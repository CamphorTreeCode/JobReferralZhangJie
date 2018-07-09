// pages/postdetails/postdetails.js

//引入富文本
var WxParse = require('../../wxParse/wxParse.js');
var app = getApp()
function getDate(str){
  var date = new Date(str);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day; 
  }
  var nowDate = year + "年" + month + "月" + day + '日';
  return nowDate 
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
      // 控制报名信息的显示
      gao : 0,
      hidden:true,
      xianshi:3,
      xinxi:4, //初始显示的是去报名的弹窗  
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
      ],
      //浏览记录
      browser:[],
      isApplicant:'',
      //收藏记录id
      collectionId:null,
      isInvalid:1,
      //转发按钮
      zhuanfa:true,
      shade:'none',
      //海报事件
      haibao:true,
      width:'',
      height:'',
      CompanyJobId:'',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var scene = decodeURIComponent(options.scene)
    console.log("Path: " + scene)
    console.info("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    console.info(options.CompanyJobId);
    
    if (options.CompanyJobId) {
      this.setData({ CompanyJobId: options.CompanyJobId });
    } else {
      this.setData({ CompanyJobId: decodeURIComponent(options.scene) });
      console.log("Path: " + scene)
    }


    // console.log(options)
    // this.setData({
    //   CompanyJobId: options.CompanyJobId
    // })
    getDate('2018-06-26 14:15:05')
    var that  = this
    //查询用户是否收藏start
    wx.request({
      url: app.globalData.appUrl + 'WXCollection/selectOneCollection', //仅为示例，并非真实的接口地址
      data: { companyJobId: that.data.CompanyJobId, openId: app.returnOpenId() },
      method: "get",
      header: {
        'content-type': 'application/x-www-form-urlencoded',// 默认值
        //'content-type': 'application/json', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        console.info("下面是该用户收藏状态：1:已收藏  0:未收藏")
        console.log(res.data, res.data[0]!=null)
        if (res.data[0]!=null){
          console.log("已经收藏")
          that.data.shouimg = "/img/postdetails/shoucang.png";      
          that.setData({
            shouimg: that.data.shouimg,
            collectionId: res.data[0].collectionId
          })
        }
      }
    })
 //查询用户是否收藏end

    //查询用户报名该岗位的状态start
    wx.request({
      url: app.globalData.appUrl + 'WXApplicantCompantJob/selectIsApplicant', //仅为示例，并非真实的接口地址
      data: { companyJobId: that.data.CompanyJobId, openId: app.returnOpenId()},
      method: "get",
      header: {
        'content-type': 'application/x-www-form-urlencoded',// 默认值
        //'content-type': 'application/json', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        console.info("下面是该用户报名该岗位的状态：true:已报名  false:未报名")
        console.log(res.data.IsApplicant)
        that.setData({
          isApplicant:res.data.IsApplicant
        })
      }
    })
    //查询用户报名该岗位的状态end

    // 获取详细信息 start 
        //
    if (!options.CompanyJob){
      console.log("項目")
    wx.request({
      url: app.globalData.appUrl + 'WXCompanyJob/selectCompanyJob', //仅为示例，并非真实的接口地址
      data: { CompanyJobId: that.data.CompanyJobId },
      method: "get",
      header: {
        'content-type': 'application/x-www-form-urlencoded',// 默认值
        //'content-type': 'application/json', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        console.info("下面是原始数据的信息")
        console.log(res)
        res.data[0].company.companyAddress = res.data[0].company.companyAddress.replace(/,/g, '');
        res.data[0].createTime = getDate(res.data[0].createTime)
        res.data[0].jobLabels = JSON.parse(res.data[0].jobLabels)
        res.data[0].jobSwiperImages = JSON.parse(res.data[0].jobSwiperImages)
        //富文本解析
        var article = res.data[0].jobDescription;
        WxParse.wxParse('article', 'html', article, that, 5);
        var article1 = res.data[0].jobNotes;
        WxParse.wxParse('article1', 'html', article1, that, 5);
        that.setData({
          companyJob:res.data
        })    
      }
    })
    }else{
    console.log("有值")
    //console.log(options.isInvalid)
      that.setData({
        companyJob: JSON.parse(options.CompanyJob),
        isInvalid: options.isInvalid

      })    
    }
   // 获取详细信息 end
  // 增加商品浏览量  增加用户浏览 start
  
    var openId = app.returnOpenId();
    console.log(openId)

    wx.request({
      url: app.globalData.appUrl + 'WXCompanyJob/addCompanyJobJobBrowser', //仅为示例，并非真实的接口地址
      data: { CompanyJobId: that.data.CompanyJobId,openId: openId},
      method: "get",
      header: {
        'content-type': 'application/x-www-form-urlencoded',// 默认值
        //'content-type': 'application/json', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        console.log(res)
      }
    })
  // 增加商品的浏览量  增加用户浏览 end
  // 查询用户的浏览数 start
    console.log(openId)
    wx.request({
      url: app.globalData.appUrl + 'WXBrowserHistory/selectBrowserHistoryFour', //仅为示例，并非真实的接口地址
      data: { CompanyJobId: that.data.CompanyJobId },
      method: "get",
      header: {
        'content-type': 'application/x-www-form-urlencoded',// 默认值
       //'content-type': 'application/json', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        console.log(res)
        that.setData({
        browser:res.data
        })

      }


      
    })
  // 查询用户的浏览数 end
  },

  /**
   * 
   * 生命周期函数--监听页面初次渲染成
   *
   * /
  onReady: function () {
      
  },   

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
   
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
  onShareAppMessage: function (options) {

    console.log(options)
    console.info(this.data.companyJob[0].company.companyName)
    var companyName = this.data.companyJob[0].company.companyName;
    if (options.from === 'button') {
      // 来自页面内转发按钮
      console.log(options.target)
    }
    return {
      title: companyName,
      //path: '/page/user?id=123'
    }
  
  },

  //转发按钮事件
  zhuanfa:function() {
    var that = this;
    console.info("转发事件触发")
    that.setData({
      zhuanfa: false,
      shade:'block'
    })
  },
  //转发页面关闭按钮
  shareModalClose:function(){
    var that = this;
    console.info("关闭页面事件触发")
    that.setData({
      zhuanfa: true,
      shade: 'none'
    })
  },

  //生成海报事件
  getGoodsQrcode:function(){
    var that = this;
    console.info("生成海报事件触发")
    //获取Access_Token
    wx.request({
      url: app.globalData.appUrl + 'GetQR_CodeController/getewm', //仅为示例，并非真实的接口地址
      data: {
        scene:that.data.CompanyJobId,
        page:"pages/index/index"
        },
      method: "get",
      header: {
        'content-type': 'application/x-www-form-urlencoded',// 默认值
        //'content-type': 'application/json', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        console.info("返回的Tocken为：")
        console.log(res.data)
        that.setData({
          access_tocken: res.data
        })   
        let scrollHeight = wx.getSystemInfoSync().windowHeight * 0.9;
        let scrollWidth = wx.getSystemInfoSync().windowWidth * 0.9;
        that.setData({
          haibao: false,
          zhuanfa: true,
          shade: 'block',
          height: scrollHeight,
          width: scrollWidth
        })
        const ctx = wx.createCanvasContext('shareCanvas');
        ctx.clearRect(0, 0, 300, 450);
        ctx.drawImage("/img/postdetails/ren.png", 12.5, 12.5, 20, 20);
        ctx.setFontSize(12)
        ctx.font = '宋体';
        ctx.fillStyle = 'blue';
        ctx.fillText('用户昵...', 45, 26)
        ctx.fillStyle = '#333';
        ctx.fillText('分享给你一条消息', 93, 26)
        ctx.drawImage("/img/postdetails/1.jpg ", 40, 35, scrollWidth * 0.9 - 80, scrollWidth * 0.9 - 80);
        ctx.fillText('天下第一驿站', 12.5, scrollWidth * 0.9 - 25)
        ctx.fillStyle = '#999';
        ctx.setFontSize(12)
        ctx.fillText('长按识别小程序码访问', 25, scrollHeight * 0.9 * 0.7)
        ctx.drawImage(res.data, 175, scrollHeight * 0.9 * 0.55,70 , 70);
        ctx.draw()
      }
    })

  },

  //关闭海报
  closeHaiBao:function(){
    var that = this;
    console.info("关闭海报事件触发")
    that.setData({
      zhuanfa: true,
      shade: 'none',
      haibao:true,
    })
  },


  //收藏变换图片
  shoucan:function(e){
    var that = this;
    console.log("...",e, e.currentTarget.dataset.collectionid)
    var collectionId = e.currentTarget.dataset.collectionid
     //请求属性
    var companyJobId = e.currentTarget.dataset.id
    
    var openid = wx.getStorageSync('openid')
    var companyJob =  that.data.companyJob
    var CompanyJob = JSON.stringify(companyJob)
    if (that.data.shouimg =="/img/postdetails/weishoucang.png"){
    //请求收藏接口 start
    wx.request({
      url: app.globalData.appUrl + 'WXCollection/addCollection',
      data:{
        companyJobId: companyJobId,
        openId: openid,
        CompanyJob: CompanyJob
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        console.info(res, res.data.resultNum == 1);
        if (res.data.resultNum == 1 || res.data.state==1){
          console.log("11")
          that.data.shouimg = "/img/postdetails/shoucang.png";
          that.data.xianshi = 1; 
          that.setData({
            shouimg: that.data.shouimg,
            xianshi: that.data.xianshi,
            collectionId: res.data.collectionId
          })

          setTimeout(function () {
            that.setData({
              xianshi: 3
            })
          }, 1000)
        }else{

        }
      }
    })
    }
    //请求收藏接口 end
    //取消收藏接口 start
else{
      wx.request({
        url: app.globalData.appUrl + 'WXCollection/cancelCollection',
        data: {
          collectionId: collectionId
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded', // 默认值
          xcxuser_name: "xcxuser_name"
        },
        success: function (res) {
          console.info(res, );
          if (res.data[0] == 1) {
            that.data.shouimg = "/img/postdetails/weishoucang.png";
            that.data.xianshi = 0;
            that.setData({
              shouimg: that.data.shouimg,
              xianshi: that.data.xianshi
            })

            setTimeout(function () {
              that.setData({
                xianshi: 3
              })
            }, 1000)
          } else {

          }
        }
      })
}
 //取消收藏接口 end


  },

  baoming:function(){
    //判断用户是否有报名表start
    if (app.globalData.applicantUser == true) {
      console.info("用户已经填写报名信息")
      console.info(app.globalData.applicantUser)
        this.data.xinxi = 1;    // 值为 1  为去报名弹窗
    } else {
      console.info("用户已经填写报名信息")
      console.info(app.globalData.applicantUser)
        this.data.xinxi = 0;      // 值为 0  为去完善信息弹窗 
    }
    //判断用户是否有报名表end
    
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
  Bqueren: function (e) {
    var that= this;
    //用户报名岗位
    console.info(e)
    var companyJobId = e.currentTarget.dataset.id;
    console.info("下面是用户报名的岗位id");
    console.info(companyJobId);
    var openId = app.returnOpenId();
    console.info(openId);
    var ApplicantContent = that.data.companyJob;
    var applicantContent = JSON.stringify(ApplicantContent)
    wx.request({
      url: app.globalData.appUrl + 'WXApplicantCompantJob/addApplicantCompanyJob', //仅为示例，并非真实的接口地址
      data: { 
        companyJobId: e.currentTarget.dataset.id, 
        openId: openId,
        applicantContent: applicantContent
        },
      method: "get",
      header: {
        'content-type': 'application/x-www-form-urlencoded',// 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        setTimeout(function () {
          that.setData({
            isApplicant: true,
          })
        }, 1000)
      }
    })
    
    if (that.data.hidden == true) {
      that.data.hidden = false;
    }
    that.setData({
      hidden: that.data.hidden,
      xinxi: 3,
      gao : 0
    })
    setTimeout(function () {
      that.setData({
        hidden: true
      })
    }, 1000)
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
  tiaozhuan:function(e){
    console.log(e, e.currentTarget.dataset.id)
    var companyId = e.currentTarget.dataset.id
    this.setData({
      gao: 0
    })
    wx.navigateTo({
      url: '/pages/businessdetails/businessdetails?companyId=' + companyId
    })
  },

  //跳转到首页
  shouye(){
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },
  
  //已报名点击事件
  yibaoming(){
    wx.showModal({
      title: '提示',
      content: '您已经报名！',
    })
  },
  

})