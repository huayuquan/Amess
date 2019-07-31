// pages/inClass/inClass.js
Page({
  here:function(e){
    wx.redirectTo({
      url: '../teacherLocal/teacherLocal',
    })
  },
  /**
   * 页面的初始数据
   */
  join:function(e){
    wx.navigateTo({
      url: '../addStudent/addStudent',
    })
  },
  classin:function(e){
    wx.navigateTo({
      url: '../classmode/class',
    })
  },
  paper:function(e){
    wx.navigateTo({
      url: '../haha/haha',
    })
  },
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