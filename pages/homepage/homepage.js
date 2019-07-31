Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModalStatus: false,
    imgUrls: [
      'http://i0.sinaimg.cn/travel/2015/0618/U11064P704DT20150618103241.jpg',
      'http://pic.baike.soso.com/p/20131112/20131112164621-29121509.jpg',
      'http://a4.att.hudong.com/61/74/01300000334094123468744040940_s.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
  
  },
  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 200, //动画时长 
      timingFunction: "linear", //线性 
      delay: 0 //0则不延迟 
    });

    // 第2步：这个动画实例赋给当前的动画实例 
    this.animation = animation;

    // 第3步：执行第一组动画：Y轴偏移240px后(盒子高度是240px)，停 
    animation.translateY(240).step();

    // 第4步：导出动画对象赋给数据对象储存 
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画 
    setTimeout(function () {
      // 执行第二组动画：Y轴不偏移，停 
      animation.translateY(0).step()
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
      this.setData({
        animationData: animation
      })

      //关闭抽屉 
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)

    // 显示抽屉 
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  }, 



  ok: function (e) {
    wx.showModal({
      title: '提示',
      content: '请收下我的膝盖...（努力写ing...）',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  director1: function (e) {
    wx.navigateTo({
      url: '../director1/director1',
    })
  },
  director2: function (e) {
    wx.navigateTo({
      url: '../director2/director2',
    })
  },

  seat:function(e){
    wx.navigateTo({
      url: '../text/text'
    })
  },
  haha: function (e) {
    wx.navigateTo({
      url: '../haha/haha'
    })
  },

  paper:function(e){
    wx.navigateTo({
      url: '../homeworktype/homeworktype',
    })
  },

  homework:function(e){
    wx.navigateTo({
      url: '../homework/homework',
    })
  },


  sLogin: function (e) {
    wx.navigateTo({
      url: '../sLogin/sLogin',
    })
  },
  weather: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  calendar: function (e) {
    wx.navigateTo({
      url: '../calendar/calendar',
    })
  },
  class:function(e){
  wx.navigateTo({
    url:'../classmode/class',
  })
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
