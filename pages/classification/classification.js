// pages/classification/classification.js
Page({

  /**
   * 页面的初始数据  
   */
  data: {
    pricex:"false",//返现金额选择
    // 下拉框第一个显示
    diyige: "true",
    dier: "true",
    disan: "true",
    disi: "true",
    xuanze: "a",
    curren: "",
    gao: 0,
    xianshi: "none",
    clientY: "",
    post: "relative",
    foterlist: [
      {
        name: "上海胜瑞日铭",
        url: "https://www.chuanshoucs.com/ServerImg/2018-05-28/7a412589-1159-42bc-ae8c-f014b8247843.jpg",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3400",
        price: "4000-5000/月"
      },
      {
        name: "天下第一仓:菜鸟",
        url: "https://www.chuanshoucs.com/ServerImg/2018-05-28/81672414-0c6f-473e-8b86-6204d0bb49ff.jpg",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3700",
        price: "4000-5000/月"
      }
    ],
    foterlist1: [
      {
        name: "上海胜瑞日铭",
        url: "https://www.chuanshoucs.com/ServerImg/2018-05-28/801519c6-74e7-43f8-bfa5-f473cf8780cf.jpg",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3400",
        price: "4000-5000/月"
      },
      {
        name: "上海圣澜科技有限公司",
        url: "https://www.chuanshoucs.com/ServerImg/2018-05-28/20a58256-d943-479f-8278-dcbd18881785.jpg",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3700",
        price: "4000-5000/月"
      },
      {
        name: "上海恩诩有限公司",
        url: "https://www.chuanshoucs.com/ServerImg/2018-05-28/8f735726-01af-440b-a923-fef845c55088.jpg",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3700",
        price: "4000-5000/月"
      },
      {
        name: "上海圣澜科技有限公司",
        url: "https://www.chuanshoucs.com/ServerImg/2018-05-28/20a58256-d943-479f-8278-dcbd18881785.jpg",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3700",
        price: "4000-5000/月"
      },
      {
        name: "上海恩诩有限公司",
        url: "https://www.chuanshoucs.com/ServerImg/2018-05-28/8f735726-01af-440b-a923-fef845c55088.jpg",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3700",
        price: "4000-5000/月"
      }
    ],

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
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    
    if (this.data.curren == 0 && this.data.diyige == "true") {
      // if (this.data.curren != 1) {
      var that = this;
      var gaodu = 0;
      setTimeout(function () {
        var ss = setInterval(function () {
          gaodu += 40;
          that.setData({
            xuanze: 0,
            curren: 0,
            gao: gaodu,
            xianshi: "block",
            post: "fixed",
            diyige: "false",
            dier: "true",
            disan: "true",
            disi: "true"
          })
          if (gaodu > 500) {
            clearInterval(ss);
          }
        }, 10)
      }, 30)
      // }
    } else if (this.data.curren != 0 && this.data.diyige == "true") {
      var that = this;
      var gaodu = 0;
      setTimeout(function () {
        var ss = setInterval(function () {
          gaodu += 40;
          that.setData({
            xuanze: 0,
            curren: 0,
            gao: gaodu,
            xianshi: "block",
            post: "fixed",
            diyige: "false",
            dier: "true",
            disan: "true",
            disi: "true"
          })
          if (gaodu > 500) {
            clearInterval(ss);
          }
        }, 10)
      }, 30)
    }
  },
  sanprice: function () {
    if (this.data.curren == 1 && this.data.dier == "true") {
    // if (this.data.curren != 1) {
      var that = this;
      var gaodu = 0;
      setTimeout(function () {
        var ss = setInterval(function () {
          gaodu += 40;
          that.setData({
            xuanze: 1,
            curren: 1,
            gao: gaodu,
            xianshi: "block",
            post: "fixed",
            diyige: "true",
            dier: "false",
            disan: "true",
            disi: "true"
          })
          if (gaodu > 500) {
            clearInterval(ss);
          }
        }, 10)
      }, 30)
    // }
    } else if (this.data.curren != 1 && this.data.dier == "true") {
      var that = this;
      var gaodu = 0;
      setTimeout(function () {
        var ss = setInterval(function () {
          gaodu += 40;
          that.setData({
            xuanze: 1,
            curren: 1,
            gao: gaodu,
            xianshi: "block",
            post: "fixed",
            diyige: "true",
            dier: "false",
            disan: "true",
            disi: "true"
          })
          if (gaodu > 500) {
            clearInterval(ss);
          }
        }, 10)
      }, 30)
    }
  },
  sanzong: function () {
    if (this.data.curren != 2 && this.data.disan == "true") {
      var that = this;
      var gaodu = 0;
      setTimeout(function () {
        var ss = setInterval(function () {

          gaodu += 40;
          that.setData({
            xuanze: 2,
            curren: 2,
            gao: gaodu,
            xianshi: "block",
            post: "fixed",
            diyige: "true",
            dier: "true",
            disan: "false",
            disi: "true"
          })
          if (gaodu > 500) {
            clearInterval(ss);
          }
        }, 10)
      }, 30)
    } else if (this.data.curren == 2 && this.data.disan == "true") {
      var that = this;
      var gaodu = 0;
      setTimeout(function () {
        var ss = setInterval(function () {

          gaodu += 40;
          that.setData({
            xuanze: 2,
            curren: 2,
            gao: gaodu,
            xianshi: "block",
            post: "fixed",
            diyige: "true",
            dier: "true",
            disan: "false",
            disi: "true"
          })
          if (gaodu > 500) {
            clearInterval(ss);
          }
        }, 10)
      }, 30)
    }
  },
  sanshai: function () {

    if (this.data.curren != 3 && this.data.disi == "true") {
      var that = this;
      var gaodu = 0;
      setTimeout(function () {
        var ss = setInterval(function () {

          gaodu += 40;
          that.setData({
            xuanze: 3,
            curren: 3,
            gao: gaodu,
            xianshi: "block",
            post: "fixed",
            diyige: "true",
            dier: "true",
            disan: "true",
            disi: "false"
          })
          if (gaodu > 500) {
            clearInterval(ss);
          }
        }, 10)
      }, 30)
    } else if (this.data.curren == 3 && this.data.disi == "true") {
      var that = this;
      var gaodu = 0;
      setTimeout(function () {
        var ss = setInterval(function () {

          gaodu += 40;
          that.setData({
            xuanze: 3,
            curren: 3,
            gao: gaodu,
            xianshi: "block",
            post: "fixed",
            diyige: "true",
            dier: "true",
            disan: "true",
            disi: "false"
          })
          if (gaodu > 500) {
            clearInterval(ss);
          }
        }, 10)
      }, 30)
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
      // post: "relative",
      diyige: "true",
      dier: "true",
      disan: "true",
      disi: "true",
      abba: 74,
      juli: '130'
    })
  },
  // swiper分类选择
  textdianji: function (e) {
    var index = e.currentTarget.dataset.ind;
    // console.log(index)
    console.log(this.data.leixing[index].state)
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
    console.log(this.data.hezong[index].state)
    if (this.data.hezong[index].state == 1) {
      this.data.hezong[index].state = 0;
    }
    else if (this.data.hezong[index].state == 0) {
      this.data.hezong[index].state = 1;
    }
    this.setData({
      hezong: this.data.hezong
    })
  },
  huidaotop: function () {
    console.log(this.data.gao)
    if (this.data.gao == 0) {
      this.setData({
        abba: 74
      })
    }
    this.setData({
      post: 'fixed',
      juli: '0'
    })
  },
  bindscro: function (e) {
    if (e.detail.scrollTop >= 74) {
      this.setData({
        post: 'fixed',
        juli: '130'
      })
    }
    else {
      this.setData({
        post: 'relative',
        juli: '0',
      })
    }
  }
})

