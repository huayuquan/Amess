// pages/classmode/class.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    row:4,
    clo:3,
    id: '',
    x:'',
    y:'',
    color:[

    ],
    seat:[

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.load();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  click: function (e) {
    var th = this;
    var id = e.target.id;
    var y = (id)%this.data.clo;
    var x = (id-y)/this.data.clo;
    var col = 'color[' + x + ']['+y+']';
    var se = 'seat['+id+']';
    var infomation = th.data.seat[id];
    var color = th.data.color[x][y]

    if(color == 'red'){
      wx.showModal({
        title: 'Warning',
        content: 'The seat have been choiced.\n'+infomation,
        success: function (res) {
          console.log('用户点击确定')
        }
      })
      }else{
      if (app.appData.seatnow == 0) {//是否选择了座位
        th.setData({
          id: id,
          x: x,
          y: y,
        })
        wx.showModal({
          title: 'Confirm',
          content: 'Make sure you chose this seat  ' + id + '(+1)',
          success: function (res) {
            
            if (res.confirm) {
              th.load()
              if(th.data.seat[id] == 'no'){
                th.setData({
                  [se]: app.appData.username,
                  [col]: 'blue',
                })
                app.appData.x = x
                app.appData.y = y
                app.appData.seatnow = 1
                app.appData.id = id
                wx.request({
                  url: 'http://115.28.66.152/Amess/class',
                  data: {
                    classno: app.appData.classid,
                    method: 'update',
                    seat: th.data.seat
                  },
                  header: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
                  },
                  method: 'POST',
                  success: function (res) {
                    console.log('确认成功')
                  }
                })
              }else{
                wx.showModal({
                  title: '提示',
                  content: '已经被选了',
                })
              }
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      } else if (color == 'green') {
        wx.showModal({
          title: 'Warning',
          content: 'You have choiced a seat.',
          success: function (res) {
            console.log('用户点击确定')
          }
        })
      } else {
        wx.showModal({
          title: 'UserInfo',
          content: 'Username is  ' + infomation,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    }
  },
  leave:function(e){
    var th = this;
    var col = 'color[' + app.appData.x + '][' + app.appData.y + ']';
    var se = 'seat[' + app.appData.id + ']';
    wx.showModal({
      title: 'Confirm',
      content: 'Are you want to leave this seat?',
      success: function (res) {
        if (res.confirm) {
          th.load()
          th.setData({
            [col]: 'green',
            [se]: 'no',
          })
          app.appData.seatnow = 0;
          app.appData.x = null;
          app.appData.y = null;
          console.log('用户点击确定')
          wx.request({
            url: 'http://115.28.66.152/Amess/class',
            data: {
              classno: app.appData.classid,
              method: 'leave',
              seat: th.data.seat
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
            },
            method: 'POST',
            success: function (res) {
              wx.showModal({
                title: 'Title',
                content: 'Leave successful',
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  load:function(e){
    var that = this;
    wx.request({
      url: 'http://115.28.66.152/Amess/class',
      data: {
        classno: app.appData.classid,
        method: 'load'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        var arr = res.data.classmode.split(' ');
        var array = res.data.classseat.split(',');
        var copy = [];
        var a = []
        for (var i = 0; i < array.length; i++) {
          var k = i%arr[1];
          if (array[i] == 'no') {
            a.push('green');
          } else {
            a.push('red');
          }
          if (k == arr[1] - 1){
            copy.push(a);
            a = []
          }
        }
        console.log(copy)
        that.setData({
          row:arr[0],
          clo:arr[1],
          seat:array,
          color:copy
        });
        
        if(app.appData.x != null && app.appData.y != null){
          var col = 'color[' + app.appData.x + '][' + app.appData.y + ']';
          that.setData({
            [col]: 'blue',
          })
        }
        
      }

    })
  },
})