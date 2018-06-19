const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    state: 0,
    tubiao: "../../image/jiantou.png"
    // 点击保存按钮后跳转到我state变为1,并且tubiao变为../../image / jinatou.png
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
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
