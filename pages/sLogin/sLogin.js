// pages/sLogin/sLogin.js
var app = getApp();
Page({
  forSubmit: function (e) {
    if (e.detail.value.username == null || e.detail.value.password == '') {
      wx.showModal({
        title: 'Warning',
        content: 'The username can not be empty!',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else if (e.detail.value.password == null || e.detail.value.password == '') {
      wx.showModal({
        title: 'Warning',
        content: 'The password can not be empty!',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      var th = this;
      var method = this.data.method;
      wx.request({
        url: 'http://115.28.66.152/Amess/user', //仅为示例，并非真实的接口地址
        data: {
          username: e.detail.value.username,
          password: e.detail.value.password,
          method: method,
        },
        header: {
          'content-type': 'application/json' // 默认值
        },

        success: function (res) {
          console.log(res.data);
          if (res.data == "T") {
            app.appData.userid = 'ss'
            app.appData.usernum = e.detail.value.password
            app.appData.username = e.detail.value.username
            wx.switchTab({
              url: '../homepage/homepage'
            })
          } else {
            wx.showModal({
              title: 'Warning',
              content: 'The username dose not exist or password error',
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

      })
    }

  },

  /**
   * 页面的初始数据
   */
  data: {
    method: 'student',
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
  
  },
  usernameInput: function (e) {
    this.setData(
      { username: e.detail.value }
    )
  },

  sregister: function () {
    wx.navigateTo({
      url: '../sregister/sregister',
    })
  },
})
