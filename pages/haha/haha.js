var app = getApp()
// pages/haha/haha.js
Page({
  click:function(e){
    var that = this;
    var tid = app.appData.usernum
    wx.request({
      url: 'http://115.28.66.152/Amess/paper',
      data: {
        method:"wx",
        tid:tid
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
          var arr = res.data.split("#")
          that.setData({
            paper: arr
          })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    paper: [],
    answer:[]
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
  confirm: function (e) {
    var th = this;
    var id = e.target.id;
    wx.showModal({
      title: 'Confirm',
      content: '确认发布这套题' + id,
      success: function (res) {
        if (res.confirm){
          wx.request({
            url: 'http://115.28.66.152/Amess/temp',
            data: {
              classno: app.appData.classid,
              method: 'submit',
              data: th.data.paper[id]
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
            },
            method: 'POST',
            success: function (res) {
              console.log('发布成功')
            }
          })
        }
      }
    })
  },
  back:function(e){
    wx.request({
      url: 'http://115.28.66.152/Amess/temp',
      data: {
        classno: app.appData.classid,
        method: 'rollback',
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  gets:function(e){
    var that = this;
    wx.request({
      url: 'http://115.28.66.152/Amess/score',
      data: {
        classno: app.appData.classid,
        method: 'gets',
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      method: 'POST',
      success: function (res) {
        if(res.data == 'F'){
          wx.showModal({
            title: '提示',
            content: '还未有结果，请稍等',
          })
        }else{
          var arr = res.data.split("?")
          that.setData({
            answer: arr
          })
        }
        
      }
    })
  }
})