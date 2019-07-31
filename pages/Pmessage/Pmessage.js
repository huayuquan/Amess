
var app = getApp();
Page({
  data: {
    userHead: '../../image/1.jpg',
    username: '',
    tel :'',
    sex :'',
    written: ''
  },
  onShow: function () {
  },
  request: function (e) {
    var that = this;
      wx.request({
        url: 'http://115.28.66.152/Amess/person',
        data: {
          method: app.appData.userid,
          sid: app.appData.usernum
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res.data)
          that.setData({
            username: res.data.name,
            sex: res.data.sex,
            tel: res.data.tel,
            written: res.data.write
          })
        }
      })
  },
  onLoad: function (options) {
    this.request()
  },
  onReady: function () {
    // 页面渲染完成
  },
  
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
 
  getScanning: function () {
    app.getScanning()
  },



})