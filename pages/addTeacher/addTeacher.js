var app = getApp();
Page({
  add:function(e){
    wx.navigateTo({
      url: '../addEdit/addEdit',
    })
  },
  load:function(e){
    var that = this;
    wx.request({
      url: 'http://115.28.66.152/Amess/user',
      data: {
        method: 'select',
        id: app.appData.usernum
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      method: 'POST',
      success: function (res) {
        var array = res.data.split("?")
        that.setData({
          teacher:array,
        });
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    teacher:[]
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