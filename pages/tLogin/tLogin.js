var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    method:'teacher'
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
    if(e.detail.value.username == null || e.detail.value.username == ''){
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
    }else if(e.detail.value.password == null ||e.detail.value.password == ''){
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
    }else{
      var th = this;
      var method = this.data.method;
      wx.request({
        url: 'http://115.28.66.152/Amess/user',
        data: {
          username: e.detail.value.username,
          password: e.detail.value.password,
          method:method,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
        },
        method: 'POST',
        success: function (res) {
          console.log(res.data);
          if(res.data == "T"){
            app.appData.userid = 'ts'
            app.appData.usernum = e.detail.value.password
            wx.switchTab({
              url: '../homepage/homepage'
            })
          }else{
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


usernameInput: function(e){
  this.setData(
    {username:e.detail.value}
  )
}

})