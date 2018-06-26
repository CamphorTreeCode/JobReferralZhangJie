// pages/bendi/bendi.js
var app =getApp();

var pagesize = 0;
function selectTypePage(that) {
console.log("21")
  wx.request({
    url: app.globalData.appUrl + 'WXCompanyJob/selectCompanyJobPage',
    data: {     
      currentPage: ++pagesize,
      jobCategoryId: that.data.jobCategoryId
    
    },
    header: {
      // 'content-type': 'application/x-www-form-urlencoded' // 默认值
      'content-type': 'application/x-www-form-urlencoded', // 默认值
      xcxuser_name: "xcxuser_name"
    },
    method: 'POST',
    success: function (res) {

      console.log(res)

      if (res.data[0].lists.length > 0) {

        var shopList = that.data.shopList
        for (var i = 0; i < res.data[0].lists.length; i++) {
          res.data[0].lists[i].jobLabels = JSON.parse(res.data[0].lists[i].jobLabels)
          shopList.push(res.data[0].lists[i])
        }


        console.info(res.data[0].lists, shopList)
        that.setData({
          shopList,
          showData: true,
          showLoading: true
        })
      } else {
        that.setData({
          bottomText: false,
          showLoading: true
        })
      }
 
    }
  })
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
        diyige: "true",
    dier: "true",
    disan: "true",
    disi: "true",
    post: "relative",
    leixing: [
      { name: "普工", state: 0 },
      { name: "包装工", state: 0 },
      { name: "质检员", state: 0 },
      { name: "仓库员", state: 0 },
      { name: "电工", state: 0 },
      { name: "叉车/铲车", state: 0 }
    ],
    xingbie: [
      { name: "全部", state: 0 },
      { name: "男可做", state: 0 },
      { name: "女可做", state: 0 }
    ],
    jine: [
      { name: "1000-2000", state: 0 },
      { name: "2000-3000", state: 0 },
      { name: "3000-4000", state: 0 },
      { name: "4000以上", state: 0 }
    ],
    hezong: [
      { name: "最新发布", state: 0 },
      { name: "离我最近", state: 0 }
    ],
    xuanze: "a",
    curren: "",
    gao: 0,
    xianshi: "none",
    foterlist: [
      {
        name: "上海胜瑞日铭",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3400",
        price: "4000-5000/月"
      },
      {
        name: "天下第一仓:菜鸟",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3700",
        price: "4000-5000/月"
      },
      {
        name: "上海胜瑞日铭",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3400",
        price: "4000-5000/月"
      },
      {
        name: "天下第一仓:菜鸟",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3700",
        price: "4000-5000/月"
      },
      {
        name: "上海胜瑞日铭",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3400",
        price: "4000-5000/月"
      },
      {
        name: "天下第一仓:菜鸟",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3700",
        price: "4000-5000/月"
      },
      {
        name: "上海胜瑞日铭",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3400",
        price: "4000-5000/月"
      },
      {
        name: "天下第一仓:菜鸟",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3700",
        price: "4000-5000/月"
      }
    ],
    shopList:[],
    jobCategoryId:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    
    let scrollHeight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      scrollHeight: scrollHeight
    });
    var that = this
    wx.setNavigationBarTitle({
      title: options.key,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    var ss = 0;
    wx.getSystemInfo({
      success: function (res) {
        ss = res.screenHeight;
      },
    })
    this.setData({
      clientY: ss
    })
    //获取商品数据 start 
    pagesize = 0;
    selectTypePage(that)
    //获取商品数据 end
    //获取所有分类的方法 start

    wx.request({
      url: app.globalData.appUrl + 'WXJobCategory/selectJobCategoryType',
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        console.info(res);
    that.setData({
      leixing:res.data
    })     
        
      }
    })
    //获取所有分类的方法 end
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  //获取所有分类http://localhost/ZhangJie/WXJobCategory/selectJobCategoryType
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
  sanlei: function () {

    // if(this.data.curren!=0){
    var that = this;
    var gaodu = 0;
    if (this.data.curren == 0 && this.data.diyige == "true") {
      var ss = setInterval(function () {
        // console.log(gaodu)
        gaodu += 40;
        that.setData({
          xuanze: 0,
          curren: 0,
          gao: gaodu,
          xianshi: "block",
          post: "fixed",
          diyige: "false",
          disi: "true",
          dier: "true",
          disan: "true"
        })
        if (gaodu > 500) {
          clearInterval(ss);
        }
      }, 10)
      
    } else if (this.data.curren != 0 && this.data.diyige == "true") {
      var ss = setInterval(function () {
        // console.log(gaodu)
        gaodu += 40;
        that.setData({
          xuanze: 0,
          curren: 0,
          gao: gaodu,
          xianshi: "block",
          post: "fixed",
          diyige: "false",
          disi: "true",
          dier: "true",
          disan: "true"
        })
        if (gaodu > 500) {
          clearInterval(ss);
        }
      }, 10)

    }

  },
  sanprice: function () {

    // if(this.data.curren!=1){
    var that = this;
    var gaodu = 0;
    if (this.data.curren == 1 && this.data.dier == "true") {
      var ss = setInterval(function () {
        // console.log(gaodu)
        gaodu += 40;
        that.setData({
          xuanze: 1,
          curren: 1,
          gao: gaodu,
          xianshi: "block",
          post: "fixed",
          diyige: "true",
          disi: "true",
          dier: "false",
          disan: "true"
        })
        if (gaodu > 500) {
          clearInterval(ss);
        }
      }, 10)
    } else if (this.data.curren != 1 && this.data.dier == "true") {
      var ss = setInterval(function () {
        // console.log(gaodu)
        gaodu += 40;
        that.setData({
          xuanze: 1,
          curren: 1,
          gao: gaodu,
          xianshi: "block",
          post: "fixed",
          diyige: "true",
          disi: "true",
          dier: "false",
          disan: "true"
        })
        if (gaodu > 500) {
          clearInterval(ss);
        }
      }, 10)
    }
  },
  sanzong: function () {

    // if (this.data.curren!=2){
    var that = this;
    var gaodu = 0;
    if (this.data.curren == 2 && this.data.disan == "true") {
      var ss = setInterval( function () {
        // console.log(gaodu)
        gaodu += 40;
        that.setData({
          xuanze: 2,
          curren: 2,
          gao: gaodu,
          xianshi: "block",
          post: "fixed",
          diyige: "true",
          disi: "true",
          dier: "true",
          disan: "false"
        })
        if (gaodu > 500) {
          clearInterval(ss);
        }
      }, 10)

    } else if (this.data.curren != 2 && this.data.disan == "true") {
      var ss = setInterval(function () {
        // console.log(gaodu)
        gaodu += 40;
        that.setData({
          xuanze: 2,
          curren: 2,
          gao: gaodu,
          xianshi: "block",
          post: "fixed",
          diyige: "true",
          disi: "true",
          dier: "true",
          disan: "false"
        })
        if (gaodu > 500) {
          clearInterval(ss);
        }
      }, 10)

    }
  },
  sanshai: function () {

    // if (this.data.curren!=3){
    var that = this;
    var gaodu = 0;
    if (this.data.curren == 3 && this.data.disi == "true") {

      var ss = setInterval(function () {
        // console.log(gaodu)
        gaodu += 40;
        that.setData({
          xuanze: 3,
          curren: 3,
          gao: gaodu,
          xianshi: "block",
          post: "fixed",
          diyige: "true",
          disi: "false",
          dier: "true",
          disan: "true"
        })
        if (gaodu > 500) {
          clearInterval(ss);
        }
      }, 10)

    } else if (this.data.curren != 3 && this.data.disi == "true") {
      var ss = setInterval(function () {
        // console.log(gaodu)
        gaodu += 40;
        that.setData({
          xuanze: 3,
          curren: 3,
          gao: gaodu,
          xianshi: "block",
          post: "fixed",
          diyige: "true",
          disi: "false",
          dier: "true",
          disan: "true"
        })
        if (gaodu > 500) {
          clearInterval(ss);
        }
      }, 10)
    }
  },
  gaibain: function (e) {
    var index = e.detail.current;
    if (index == 0) {
      this.data.xuanze = 0;
    } else if (index == 1) {
      this.data.xuanze = 1;
    } else if (index == 2) {
      this.data.xuanze = 2;
    } else if (index == 3) {
      this.data.xuanze = 3;
    }
    this.setData({
      xuanze: this.data.xuanze
    })
  },                                          
  btn: function (e) {
    var that = this
    var index = e.currentTarget.dataset.in;
    if (index =="leixing"){
      var jobCategoryId=[]
      var leixing = that.data.leixing
      for (var i = 0; i < leixing.length;i++){
        if (leixing[i].state==1){
          jobCategoryId.push(that.data.leixing[i].jobCategoryId)
        }
       
      }
      if (jobCategoryId.length>0){
        that.setData({
          jobCategoryId,
          shopList:[]
        })
       pagesize = 0
       selectTypePage(that)
      
}    
    }
    else if (index =="jine"){
      var returnMoney = [];
      var jine = that.data.jine
      for (var i = 0; i < jine.length; i++) {
        if (jine[i].state == 1) {
          returnMoney.push(jine[i].name)
        }

      }
    }
       console.log(e)
    this.setData({
      gao: 0,
      post: "relative",
      diyige: "true",
      disi: "true",
      dier: "true",
      disan: "true"
    })
  },
 //类型选择
  textdianji: function (e) {
    var that = this
    var index = e.currentTarget.dataset.ind;
    console.log(index)
 
    var leixing = that.data.leixing

    if (this.data.leixing[index].state == 1) {
      leixing[index].state = 0;

    }
    else{
      leixing[index].state = 1;
    }
    that.setData({
      leixing: leixing
    })
  },
  //类型选择
  textdian: function (e) {
    var index = e.currentTarget.dataset.id;
    // console.log(index)
    // console.log(this.data.xingbie[index].state)
    if (this.data.xingbie[index].state == 1) {
      this.data.xingbie[index].state = 0;
    }
    else if (this.data.xingbie[index].state == 0) {
      this.data.xingbie[index].state = 1;
    }
    this.setData({
      xingbie: this.data.xingbie
    })
  },
  //返现选择
  textdiana: function (e) {
    var index = e.currentTarget.dataset.ia;
    // console.log(index)
    console.log(this.data.jine[index].state)
    if (this.data.jine[index].state == 1) {
      this.data.jine[index].state = 0;
      // console.log(0)
    }
    else if (this.data.jine[index].state == 0) {
      this.data.jine[index].state = 1;
      // console.log(0)
    }
    this.setData({
      jine: this.data.jine
    })
  },
  textdianb: function (e) {
    var index = e.currentTarget.dataset.ib;
    // console.log(index)
    console.log(this.data.hezong[index].state)
    if (this.data.hezong[index].state == 1) {
      this.data.hezong[index].state = 0;
      // console.log(0)
    }
    else if (this.data.hezong[index].state == 0) {
      this.data.hezong[index].state = 1;
      // console.log(0)
    }
    this.setData({
      hezong: this.data.hezong
    })
  },
  huiqu:function(){
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  lower:function(){
    console.log("..")
    var that = this
    that.setData({
      showLoading: false
    })
    selectTypePage(that)
  }
})