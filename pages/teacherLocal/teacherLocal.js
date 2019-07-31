// pages/teacherLocal/teacherLocal.js
var app = getApp();
Page({
  result:function(e){
    var that = this;
    wx.request({
      url: 'http://115.28.66.152/Amess/local',
      data: {
        method: "result",
        classno: app.appData.classid
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if(res.data == null ||res.data == ''){
          wx.showModal({
            title: '提示',
            content: '当前还未有学生签到，请等候',
          })
        }else{
          var arr = res.data.split("?")
          that.setData({
            state: arr
          })
        }
        
      }
    })
  },
  exit:function(e){
    wx.showModal({
      title: '退出确认',
      content: '是否退出此页面，并取消定位',
      success:function(res){
        if(res.confirm){
          wx.request({
            url: 'http://115.28.66.152/Amess/local',
            data: {
              method: "tout",
              classno: app.appData.classid,
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success: function (res) {
              if (res.data == 'T') {
                wx.navigateTo({
                  url: '../inClass/inClass',
                })
              } else if (res.data == 'F') {
                wx.showModal({
                  title: '取消失败',
                  content: '请重试，或联系开发者',
                })
              }
            }
          })
        }else if(res.cancel){

        }
      }
    })
  },
  local:function(e){
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var accuracy = res.accuracy
        wx.showModal({
          title: '定位成功',
          content: '确认定位 latitude： '+latitude+' longitude: '+longitude,
          success:function(res){
            if(res.confirm){
              wx.request({
                url: 'http://115.28.66.152/Amess/local',
                data: {
                  method: "teacher",
                  classno: app.appData.classid,
                  local: latitude + ' ' + longitude
                },
                header: {
                  'content-type': 'application/json' // 默认值
                },
                success: function (res) {
                  if(res.data == 'T'){
                    wx.showModal({
                      title: '成功',
                      content: '现在可以通知学生签到',
                    })
                  }else if(res.data == 'F'){
                    wx.showModal({
                      title: '上交失败',
                      content: '请重试，或联系开发者',
                    })
                  }
                }
              })
            }else if(res.cancel){

            }
          }
        })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    state: []
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