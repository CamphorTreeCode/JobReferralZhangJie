//app.js
var userLogin = require('utils/userlogin.js');

App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    //  var pg=this;
    // setTimeout(function () {
    //   console.log(wx.getStorageSync('openid'))
    //   //获取用户是否填写报名表 
    //   var that = pg;
    var that = this;
    wx.request({
      url: that.globalData.appUrl + 'WXApplicant/findUserApplicant?openId=' + wx.getStorageSync('openid') + '', //仅为示例，并非真实的接口地址
      data: {
        openId: wx.getStorageSync('openid')
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function(res) {
        console.info("下面是用户是否填写报名百信息")
        that.globalData.applicantUser = res.data.applicantUser;
        console.info(that.globalData.applicantUser)
      }
    })
    // }, 500);


  },
  getOpenId: function() {
    console.log("獲取opoenid")
    var that = this
    userLogin.getOpenid()
  },

  returnOpenId: function() {
    var openid = wx.getStorageSync('openid')
    console.log(openid)
    if (openid) {
      console.log("有openid")
    } else {
      console.log("沒有openid")
      this.getOpenId();
      openid = wx.getStorageSync('openid')
    }
    return openid
  },


  globalData: {
    userInfo: null, 
    //用户是否有报名表
    applicantUser:"",
    //appUrl:"http://localhost/ZhangJie/",
   appUrl: "https://www.chuanshoucs.com/ZhangJie/",
  //  appUrl: "https://www.zjzj999.com/ZhangJie/",
    appId: "wxb39d67b4e5dda79d",

  }
})