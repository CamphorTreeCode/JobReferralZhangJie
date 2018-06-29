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
    tubiao: "../../image/jiantou.png",
    tubiao1:"../../image/jinatou.png",
    // 点击保存按钮后跳转到我state变为1,并且tubiao变为../../image / jinatou.png
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (canshu) {

    console.info('返回数据###################')
    console.info(canshu)
    //判断信息是否填写完整
    if (canshu.name == 'true') {
     this.setData({
       //完整不显示待完善
       state : 1
     })
    } else {
      this.setData({
        //不完整显示待完善
        state: 0
      })
    }
 

    var that=this;
    wx.getUserInfo({
      success: function (res) {
        // console(res.userInfo)
        that.setData({
          userInfo: res.userInfo,
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
