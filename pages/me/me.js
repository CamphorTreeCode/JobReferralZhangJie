const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    state: 0,
    tubiao: "../../image/jiantou.png"
    // 点击保存按钮后跳转到我state变为1,并且tubiao变为../../image / jinatou.png
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
    var that=this;
    wx.getUserInfo({
      success: function (res) {
        // console(res.userInfo)
        that.setData({
          userInfo: res.userInfo
        })
      }
    })
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    console.info("***************************************")
    console.info(e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  shoucang: function(){
    wx.navigateTo({
      url: '/pages/shoucang/shoucang',
    })
  },
  huiyuan: function(){
    wx.navigateTo({
      url: '/pages/huiyuan/huiyuan',
    })
  },
  baoming: function(){
    wx.navigateTo({
      url: '/pages/baoming/baoming',
    })
  },
  dianhua: function(){
    wx.makePhoneCall({
      phoneNumber: '18679216636',
    })
  },
  yijian: function(){
    wx.navigateTo({
      url: '/pages/yijian/yijian',
    })
  },
  guanyu: function(){
    wx.navigateTo({
      url: '/pages/guanyu/guanyu',
    })
  }
})
