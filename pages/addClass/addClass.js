// pages/addClass/addClass.js
var app = getApp()
Page({
  forSubmit: function (e) {
    var id = app.appData.usernum;
    wx.showModal({
      title: '创建',
      content: '确认信息无误，并创建？',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: 'http://115.28.66.152/Amess/class',
            data: {
              method: 'insert',
              username: e.detail.value.username,
              password: e.detail.value.password,
              id: id,
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
            },
            method: 'POST',
            success: function (res) {
              if (res.data == 'T') {
                wx.showModal({
                  title: '成功',
                  content: '添加成功',
                  success: function (res) {
                    wx.redirectTo({
                      url: '../teacherClass/teacherClass',
                    })
                  }
                })
              } else {
                wx.showModal({
                  title: '失败',
                  content: '请检查信息，添加失败',
                  success: function (res) {
                    wx.redirectTo({
                      url: '../teacherClass/teacherClass',
                    })
                  }
                })
              }
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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