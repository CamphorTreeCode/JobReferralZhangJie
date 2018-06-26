// pages/bendi/bendi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pricex:"false",//返现金额选择
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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    var index = e.currentTarget.dataset.in;
    this.setData({
      gao: 0,
      post: "relative",
      diyige: "true",
      disi: "true",
      dier: "true",
      disan: "true"
    })
  },
  textdianji: function (e) {
    var index = e.currentTarget.dataset.ind;
    // console.log(index)
    // console.log(this.data.leixing[index].state)
    if (this.data.leixing[index].state == 1) {
      this.data.leixing[index].state = 0;
      // console.log(0)
    }
    else if (this.data.leixing[index].state == 0) {
      this.data.leixing[index].state = 1;
      // console.log(0)
    }
    this.setData({
      leixing: this.data.leixing
    })
  },
  textdian: function (e) {
    var index = e.currentTarget.dataset.id;
    // console.log(index)
    // console.log(this.data.xingbie[index].state)
    if (this.data.xingbie[index].state == 1) {
      this.data.xingbie[index].state = 0;
      // console.log(0)
    }
    else if (this.data.xingbie[index].state == 0) {
      this.data.xingbie[index].state = 1;
      // console.log(0)
    }
    this.setData({
      xingbie: this.data.xingbie
    })
  },
  textdiana: function (e) {
    var index = e.currentTarget.dataset.ia;
    if (this.data.pricex == index) { return false; }
    else {
      this.setData({
        pricex: index
      })
    }
    // console.log(index)
    // console.log(this.data.jine[index].state)
    // if (this.data.jine[index].state == 1) {
    //   this.data.jine[index].state = 0;
    //   // console.log(0)
    // }
    // else if (this.data.jine[index].state == 0) {
    //   this.data.jine[index].state = 1;
    //   // console.log(0)
    // }
    // this.setData({
    //   jine: this.data.jine
    // })
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
  }
})