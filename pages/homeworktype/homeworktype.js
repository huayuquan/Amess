var app = getApp();
Page({
  formSubmit: function (e) {
    var result = '';
    if (e.detail.value['radio-group1'] == this.data.array[6]){
      result = '恭喜回答正确'
    }else{
      result = '抱歉回答错误'
    }
    wx.showModal({
      title: '结果',
      content: '正确答案: ' + this.data.array[6] + '  '+result,
      success: function (res) {
        wx.request({
          url: 'http://115.28.66.152/Amess/score',
          data: {
            classno: app.appData.classid,
            method: 'puts',
            name: app.appData.username,
            answer: e.detail.value['radio-group1']
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
          },
          method: 'POST',
          success: function (res) {
            console.log('确认成功')
          }
        })
      }
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  getP: function (e) {
    var that = this;
    wx.request({
      url: 'http://115.28.66.152/Amess/temp',
      data: {
        method: 'get',
        classno: app.appData.classid,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if(res.data == "F"){
          wx.showModal({
            title: '提示',
            content: '教师还未发布试题，请等待',
          })
        }else{
          var arr = res.data.split("@");
          console.log(arr);
          that.setData({
            array: arr,
          })
        }
        
      }
    })

  },
  data: {
    array: [
    ]
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