// pages/scPage/scPage.js
var app = getApp();
Page({
  join:function(e){
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.showModal({
          title: '确认',
          content: '当前经纬度定位：'+latitude+' '+longitude,
          success(res){
            if(res.confirm){
              wx.request({
                url: 'http://115.28.66.152/Amess/local',
                data: {
                  method: "student",
                  classno: app.appData.classid,
                },
                header: {
                  'content-type': 'application/json' // 默认值
                },
                success: function (res) {
                  if(res.data == 'F'){
                    wx.showModal({
                      title: '别急',
                      content: '教师还未定位，等待教师签到',
                    })
                  }else{
                    var arr = res.data.split(' ');
                    var la = parseFloat(arr[0])
                    var lo = parseFloat(arr[1])
                    if((latitude>la-0.001)&&(latitude<la+0.001)&&(longitude>lo-0.001)&&(longitude<lo+0.001)){
                      wx.request({
                        url: 'http://115.28.66.152/Amess/local',
                        data: {
                          method: "studentin",
                          classno: app.appData.classid,
                          sname: app.appData.username,
                          state: 1
                        },
                        header: {
                          'content-type': 'application/json' // 默认值
                        },
                        success: function (res) {
                          if(res.data == 'T'){
                            wx.showModal({
                              title: '成功',
                              content: '签到成功',
                            })
                          }else{
                            wx.showModal({
                              title: '错误',
                              content: '信息插入错误，请重试，并联系开发者',
                            })
                          }
                          
                        }
                      })
                    }else{
                      wx.request({
                        url: 'http://115.28.66.152/Amess/local',
                        data: {
                          method: "studentin",
                          classno: app.appData.classid,
                          sname: app.appData.username,
                          state: 0
                        },
                        header: {
                          'content-type': 'application/json' // 默认值
                        },
                        success: function (res) {
                          if(res.data == 'T'){
                            wx.showModal({
                              title: '警告',
                              content: '系统检测到你不在教师周围，请火速抵达战场，如精度问题请举手示意教师，并稍后联系开发者',
                            })
                          }else{
                            wx.showModal({
                              title: '错误',
                              content: '信息插入错误，请重试，并联系开发者',
                            })
                          }
                          
                        }
                      })
                    }
                  }
                }
              })
            }else if(res.cancel){

            }
          }
        })
      },
    })
  },
  classin:function(e){
    wx.navigateTo({
      url: '../classmode/class',
    })
  },
  paper:function(e){
    wx.navigateTo({
      url: '../homeworktype/homeworktype',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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