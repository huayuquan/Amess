//index.js
//获取应用实例
var app = getApp()
Page({
  data:
    {
      userInfo: {},
      addressData: null,
      userStatus: {},
      addRessName: false,
      content: false,
      imgStr: null,
      httpImg: [],
      imgLenght: 0
    },
  onLoad: function (e) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

    that.data.userStatus['name'] = e.name;
    that.data.userStatus['address'] = e.address;
    that.data.userStatus['lat'] = e.lat;
    that.data.userStatus['lnt'] = e.lnt;
    that.data.userStatus['userId'] = e.userId;

    // console.log(event);
  },

  // 表单提交
  formSubmit: function (e) {
    var that = this
    if (e.detail.value.content == '' || e.detail.value.content == null) {
      wx.showModal({
        title: '提示',
        content: '内容为空',
      })

    } else if (e.detail.value.address == '' || e.detail.value.address == null) {
      wx.showModal({
        title: '提示',
        content: '人员信息为空',
      })
    } else {
      wx.request({
        url: 'http://115.28.66.152/Amess/message',
        data: {
          method: "submit",
          content: e.detail.value.content,
          address: e.detail.value.address
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
        },
        method: 'POST',
        success: function (res) {
          if (res.data == 'T') {
            wx.showModal({
              title: '成功',
              content: '发布成功',
              success: function (res) {
                wx.switchTab({
                  url: '../main/main',
                })

              }
            })
          } else {
            wx.showModal({
              title: '提示',
              content: '发布失败，请重试。',
            })
          }
        }
      })
    }

  },
})
