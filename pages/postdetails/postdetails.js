// pages/postdetails/postdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      // 控制报名信息的显示
      gao : 0,
      hidden:true,
      xianshi:3,
      xinxi:3, //初始显示的是去报名的弹窗  
      // 收藏图片的地址
      shouimg:"/img/postdetails/weishoucang.png",
      // 轮播图片
      slider: [
        { picUrl: "https://www.chuanshoucs.com/ServerImg/2018-05-28/4d62d4f4-3c71-4b72-9c64-a505e2e6f3ca.jpg" },
        { picUrl: "https://www.chuanshoucs.com/ServerImg/2018-05-28/de08adb0-fc92-47d1-b4fa-022281bbb371.jpg" },
        { picUrl: "https://www.chuanshoucs.com/ServerImg/2018-05-28/5f65fb4a-4fd7-48bc-a7c6-f418964fae2a.jpg" },
        { picUrl: "https://www.chuanshoucs.com/ServerImg/2018-05-28/cf14d802-d561-4168-ab67-96963cadce12.jpg" },
        { picUrl: "https://www.chuanshoucs.com/ServerImg/2018-05-28/00629d51-0a27-4831-b706-7864ba4b57e5.jpg" }
      ],
      title:[
        {name:"人气"},
        { name: "返现最高 " },
        {name: "名企" },
        { name: "口碑爆棚" }
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
  
  },
  //收藏变换图片
  shoucan:function(){
    if (this.data.shouimg =="/img/postdetails/weishoucang.png"){
      this.data.shouimg = "/img/postdetails/shoucang.png";
      this.data.xianshi=1; 
    } else if(this.data.shouimg == "/img/postdetails/shoucang.png") {
      // console.log(2)
      this.data.shouimg = "/img/postdetails/weishoucang.png";
      this.data.xianshi = 0;
    }
    var that=this;
    this.setData({
      shouimg: this.data.shouimg,
      xianshi: this.data.xianshi
    })

    setTimeout(function(){
      that.setData({
        xianshi: 3
      })
    },1000)
  },
  baoming:function(){
    
    // 判断条件自己给   判断是去报名还是去 填写信息
    if(this.data.xinxi==3){
      this.data.xinxi=0;      // 值为 0  为去完善信息弹窗     
    }
    if (this.data.xinxi == 4) {
      this.data.xinxi = 1;    // 值为 0  为去报名弹窗     
    }

    //这个IF 语句是 可以看到   报名  ， 和完善信息的调试
    if(this.data.xinxi==0){
      this.data.xinxi=1;
    } else if (this.data.xinxi == 1) {
      this.data.xinxi = 0;
    }

    this.setData({
      xinxi:this.data.xinxi,
      gao : 1
    })
  },
  // 去报名 取消按钮
  Bquxiao:function(){
    this.setData({
      xinxi: 3,
      gao :0 
    })
  },
   // 去报名 确认按钮
  Bqueren: function () {
    if (this.data.hidden == true) {
      this.data.hidden = false;
    }
    this.setData({
      hidden: this.data.hidden,
      xinxi: 3,
      gao : 0
    })
    var that = this;
    setTimeout(function () {
      that.setData({
        hidden: true
      })
    }, 500)
  },
  //去完善信息 取消按钮
  Wquxiao:function(){
    this.setData({
      xinxi: 4,
      gao:0
    })
  },
  //去完善信息 确认按钮
  Wqueren:function(){
    this.setData({
      gao: 0,
      xinxi: 4
    })
    wx.navigateTo({
      url: '/pages/baoming/baoming',
    })
  },
  
  // 跳转企业详情页
  tiaozhuan:function(){
    this.setData({
      gao: 0
    })
    wx.navigateTo({
      url: '/pages/businessdetails/businessdetails'
    })
  }

})