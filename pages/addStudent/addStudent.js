// pages/addStudent/addStudent.js
var app = getApp();
Page({
  click:function(e){
    var id = e.currentTarget.dataset.id;
    var sno = this.data.show[id];
    wx.showModal({
      title: '确认',
      content: '是否同意该学生加入？',
      success:function(res){
        if(res.confirm){
          wx.request({
            url: 'http://115.28.66.152/Amess/stc',
            data: {
              method: 'agree',
              cno: app.appData.classid,
              sno: sno,
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
            },
            method: 'POST',
            success: function (res) {
              if(res.data == 'T'){
                wx.redirectTo({
                  url: '../addStudent/addStudent',
                })
              }else{
                wx.showModal({
                  title: '错误',
                  content: '添加失败，请重新操作',
                  success:function(res){
                    wx.redirectTo({
                      url: '../addStudent/addStudent',
                    })
                  }
                })
              }
            }
          })
        }else if(res.cancel){
          console.log('取消')
        }
      }
    })
  },
  load: function (e) {
    var that = this;
    wx.request({
      url: 'http://115.28.66.152/Amess/stc',
      data: {
        method: 'join',
        id: app.appData.classid
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      method: 'POST',
      success: function (res) {
        var array = res.data.split("?")
        that.setData({
          show: array,
        });
        
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    show:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.load()
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
  
  }
})