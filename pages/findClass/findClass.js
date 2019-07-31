// pages/findClass/findClass.js
var app = getApp()
Page({
  forSubmit: function (e) {
    wx.showModal({
      title: '添加',
      content: '确认信息无误，并查询班级？',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: 'http://115.28.66.152/Amess/class',
            data: {
              method: 'load',
              classno: e.detail.value.username,
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
            },
            method: 'POST',
            success: function (res) {
              if(res.data == null || res.data == ''){
                wx.showModal({
                  title: '抱歉',
                  content: '查询结果不存在，请核对信息',
                })
              }else{
                wx.showModal({
                  title: '确认添加',
                  content: '班级名称：'+res.data.classname,
                  success: function (res) {
                    if (res.confirm) {
                      wx.request({
                        url: 'http://115.28.66.152/Amess/class',
                        data: {
                          method: 'sc',
                          classno: e.detail.value.username,
                          sno: app.appData.usernum,
                          sname: app.appData.username,
                        },
                        header: {
                          'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
                        },
                        method: 'POST',
                        success:function(res){
                          if(res.data == 'T'){
                            wx.showModal({
                              title: '申请成功',
                              content: '请等待教师确认，成功后会在我的班级界面显示。',
                              success: function (res) {
                                wx.redirectTo({
                                  url: '../studentClass/studentClass',
                                })
                              }
                            })
                          }else{
                            wx.showModal({
                              title: '出错',
                              content: '请重新操作',
                            })
                          }
                        }
                      })
                    } else if (res.cancel) {
                      console.log('用户点击取消')
                    }
                  }
                })
              }
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
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