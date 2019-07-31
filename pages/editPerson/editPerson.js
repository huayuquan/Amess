// pages/editPerson/editPerson.js
var app = getApp();
Page({
  forSubmit: function (e) {
    var id = app.appData.userid
    var method = ''
    if(id == 'ss'){
      method = 'ssubmit'
    }else if(id == 'cs'){
      wx.showModal({
        title: '提示',
        content: '管理员无需修改',
      })
    }else if(id == 'ts'){
      method = 'tsubmit'
    }
      wx.request({
        url: 'http://115.28.66.152/Amess/person',
        data: {
          sid: app.appData.usernum,
          tel: e.detail.value.tel,
          sex: e.detail.value.sex,
          written: e.detail.value.written,
          method: method,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
        },
        method: 'POST',
        success: function (res) {
          if (res.data == "T") {
            wx.showModal({
              title: '成功',
              content: '上传成功',
              success:function(res){
                wx.switchTab({
                  url: '../ypersonal/ypersonal',
                })
              }
            })
          } else {
            wx.showModal({
              title: '失败',
              content: '上传失败，请重试',
            })
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