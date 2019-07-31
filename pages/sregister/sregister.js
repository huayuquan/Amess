// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    method: 'register'
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
  forSubmit: function (e) {
    if (e.detail.value.name == null || e.detail.value.name == '') {
      wx.showModal({
        title: 'Warning',
        content: 'The account can not be empty!',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else if (e.detail.value.num == null || e.detail.value.num == '') {
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
      var method = this.data.method;
      wx.request({
        url: 'http://115.28.66.152/Amess/user', //仅为示例，并非真实的接口地址
        data: {
          username: e.detail.value.name,
          password: e.detail.value.num,
          tel: e.detail.value.tel,
          sex: e.detail.value.sex,
          written: e.detail.value.written,
          method: method,
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        
        success: function (res) {
          console.log(res.data);
          if (res.data == "T") {
            console.log('got')
            wx.showModal({
              title: '恭喜',
              content: '注册成功',
              success: function (res) {
                if (res.confirm) {
                  wx.navigateBack({

                  })
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })

          } else {
            wx.showModal({
              title: 'Warning',
              content: 'The username had exis',
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
})