// pages/postdetails/postdetails.js
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
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getDate('2018-06-26 14:15:05')
    var that  = this

    //查询用户报名该岗位的状态start
    wx.request({
      url: app.globalData.appUrl + 'WXApplicantCompantJob/selectIsApplicant', //仅为示例，并非真实的接口地址
      data: { companyJobId: options.CompanyJobId, openId: app.returnOpenId()},
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
    wx.request({
      url: app.globalData.appUrl + 'WXCompanyJob/selectCompanyJob', //仅为示例，并非真实的接口地址
      data: { CompanyJobId: options.CompanyJobId },
      method: "get",
      header: {
        'content-type': 'application/x-www-form-urlencoded',// 默认值
        //'content-type': 'application/json', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        console.log(res)
        res.data[0].company.companyAddress = res.data[0].company.companyAddress.replace(/,/g, '');
        res.data[0].createTime = getDate(res.data[0].createTime)
        res.data[0].jobLabels = JSON.parse(res.data[0].jobLabels)
        res.data[0].jobSwiperImages = JSON.parse(res.data[0].jobSwiperImages)
        that.setData({
          companyJob:res.data
        })    
      }
    })
   // 获取详细信息 end
  // 增加商品浏览量  增加用户浏览 start
    var openId = app.returnOpenId();
    console.log(openId)
    wx.request({
      url: app.globalData.appUrl + 'WXCompanyJob/addCompanyJobJobBrowser', //仅为示例，并非真实的接口地址
      data: { CompanyJobId: options.CompanyJobId,openId: openId},
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
      data: { CompanyJobId: options.CompanyJobId },
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
  shoucan:function(e){
    var that = this;
    console.log(e)
     //请求属性
    var companyJobId = e.currentTarget.dataset.id
    var openid = wx.getStorageSync('openid')
    var companyJob =  that.data.companyJob
    var CompanyJob = JSON.stringify(companyJob)
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
        if (res.data.resultNum == 1 || res.data.resultNum==1){
          that.data.shouimg = "/img/postdetails/shoucang.png";
          that.data.xianshi = 1; 
          that.setData({
            shouimg: that.data.shouimg,
            xianshi: that.data.xianshi
          })

          setTimeout(function () {
            that.setData({
              xianshi: 3
            })
          }, 1000)
        }else{
          this.data.shouimg = "/img/postdetails/weishoucang.png";
          this.data.xianshi = 0;
        }
      }
    })
    //请求收藏接口 end



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
            isApplicant: true
          })
        }, 200)
      }
    })

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
  }

})