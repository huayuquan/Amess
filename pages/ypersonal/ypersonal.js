// pages/personal/personal.js
var app = getApp();
Page({
  user: function (e) {
    this.setData({
      username: app.appData.username
    })
  },
  data: {
    array: ['', '', '', '', '', ''],
    username: ''
  },
  onLoad: function (options) {
    this.user()
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示.
    var userInfo = wx.getStorageSync('userInfo');
    if (userInfo.length !== 0) {
      this.setData({
        operation: '退出',
        login: true,
        userName: userInfo.userName,
        userPhone: userInfo.userPhone,

      })
    } else {
      this.setData({
        userName: '',
        userPhone: '',
        userHead: '../../image/6.jpg',
        operation: '退出登录',
        login: false
      })
    }
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  defaultLogin: function (e) {
    let login = e.currentTarget.dataset.login;
    if (login == true) {
      // 点击退出
      wx.showToast({
        title: '退出中',
        icon: 'loading'
      })
      setTimeout(function () {
        wx.hideToast();
        wx.removeStorageSync('userInfo');
        wx.switchTab({
          url: '../index/index'
        })
      }, 2000);
    } else {
      // 点击登录

      wx.navigateTo({
        url: '../login/login'
      })
    }
  },
  listFirst: function () {
    // 我的预订
    if (this.data.login) {
      wx.switchTab({
        url: '../orders/orders'
      })
    } else {
      wx.showToast({
        title: '请登录',
        icon: 'loading',
        duration: 800
      })
    }
  },
  getScanning: function () {
    app.getScanning()
  },
  calendar: function (e) {
    wx.navigateTo({
      url: '../calendar/calendar'
    })
  },
  result: function (e) {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  Pmessage: function (e) {
    wx.navigateTo({
      url: '../Pmessage/Pmessage'
    })
  },
  text: function (e) {
    wx.navigateTo({
      url: '../editPerson/editPerson'
    })
  },
  seat: function (e) {
    var id = app.appData.userid;
    if (id == 'cs') {
      wx.navigateTo({
        url: '../addTeacher/addTeacher'
      })
    } else if (id == 'ts') {
      wx.navigateTo({
        url: '../teacherClass/teacherClass',
      })
    } else if (id == 'ss') {
      wx.navigateTo({
        url: '../studentClass/studentClass',
      })
    }
  },
  Scourse: function (e) {

  },

  request: function (e) {
    var that = this;
    wx.request({
      url: 'http://115.28.66.152/Amess/student',
      data: {
        method: 'wx'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        var arr = res.data.split(",");
        console.log(arr);
        that.setData({
          array: arr
        })
      }
    })
  }
})