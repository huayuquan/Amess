// pages/teacherClass/teacherClass.js
var app = getApp()
Page({
  click:function(e){
    var id = e.currentTarget.dataset.id;
    console.log(id)
    var s = this.data.classc[id];
    var arr = s.split(' ')[0];
    app.appData.classid = arr;
    wx.navigateTo({
      url: '../inClass/inClass'
          })
  },
  add: function (e) {
    wx.navigateTo({
      url: '../addClass/addClass',
    })
  },
  load: function (e) {
    var that = this;
    wx.request({
      url: 'http://115.28.66.152/Amess/class',
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
        var copy =[]
        for(var i = 0;i<array.length-1;i++){
          var arr = array[i].split(' ');
          var temp = arr[0]+'   '+arr[5];
          copy.push(temp);
        }
        that.setData({
          classc: array,
          show: copy,
        });
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    classc:[],
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