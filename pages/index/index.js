// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    juli: -11,
    // 下拉框第一个显示
    diyige: "true",
    dier: "true",
    disan: "true",
    disi: "true",
    // 报名表显示
    dcancel: "block",
    clientY: "",
    post: "relative",
    tophead: 0,
    // 头部轮播图
    slider: [
      { picUrl: "/img/index/banner.jpg" },
      { picUrl: "https://www.chuanshoucs.com/ServerImg/2018-05-28/ef6245ff-1ffe-442f-9cd2-f996ba9f54b5.jpg" },
      { picUrl: "https://www.chuanshoucs.com/ServerImg/2018-05-28/4a333764-8229-420d-8f4d-c91ac0f159e1.jpg" },
      { picUrl: "https://www.chuanshoucs.com/ServerImg/2018-05-28/e99b9c44-8f0c-4223-a1f5-a1735473d4c0.jpg" },
      { picUrl: "https://www.chuanshoucs.com/ServerImg/2018-05-28/62c32dd7-df0f-4ad6-b041-6d85d2c1b772.jpg" }
    ],
    suoyouc:0,
    swiperCurrent: 0,
    // 换一批的数据
    change: [
      {
        name: "上海胜瑞日铭",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        price: "4000-5000/月"
      },
      {
        name: "天下第一仓:菜鸟",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
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
    xingbie: [
      { name: "全部", state: 0 },
      { name: "男可做", state: 0 },
      { name: "女可做", state: 0 }
    ],
    xuanze: "a",
    curren: "",
    gao: 0,
    xianshi: "none",

    // 底部列表显示
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
        url: "https://www.chuanshoucs.com/ServerImg/2018-05-28/801519c6-74e7-43f8-bfa5-f473cf8780cf.jpg",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3700",
        price: "4000-5000/月"
      },
      {
        name: "上海胜瑞日铭",
        url: "https://www.chuanshoucs.com/ServerImg/2018-05-28/81672414-0c6f-473e-8b86-6204d0bb49ff.jpg",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3400",
        price: "4000-5000/月"
      },
      {
        name: "天下第一仓:菜鸟",
        url: "https://www.chuanshoucs.com/ServerImg/2018-05-28/20a58256-d943-479f-8278-dcbd18881785.jpg",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3700",
        price: "4000-5000/月"
      },
      {
        name: "天下第一仓:菜鸟",
        url: "https://www.chuanshoucs.com/ServerImg/2018-05-28/8f735726-01af-440b-a923-fef845c55088.jpg",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3700",
        price: "4000-5000/月"
      },
      {
        name: "天下第一仓:菜鸟",
        url: "https://www.chuanshoucs.com/ServerImg/2018-05-28/20a58256-d943-479f-8278-dcbd18881785.jpg",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        fanli: "3700",
        price: "4000-5000/月"
      },
      {
        name: "天下第一仓:菜鸟",
        url: "https://www.chuanshoucs.com/ServerImg/2018-05-28/8f735726-01af-440b-a923-fef845c55088.jpg",
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
    // setInterval(function(){
    //   wx.pageScrollTo({
    //     scrollTop: 560
    //   })
    // },10)
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
  onPageScroll: function (e) {
    console.log(e);//{scrollTop:99}
    if (e.scrollTop >= 565) {
      this.setData({
        post: 'fixed',
        juli: '140'
      })
    }
    else {
      this.setData({
        post: 'relative',
        juli: '0',
      })
    }
    // else if (this.data.gao != 0) {
    //   this.setData({
    //     post: 'fixed',
    //     juli: '0',
    //   })
    // }
    // gao: 0,
    //   // post: "relative",
    //   diyige: "true",
    //     disi: "true",
    //       dier: "true",
    //         disan: "true"
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //获取当前swiper的current，修改swiper指示点
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  // 头部4个分类跳转
  fanli: function () {
    wx.navigateTo({
      url: '/pages/bendi/bendi?key=高返现'
    })
  },
  zuixin: function () {
    wx.navigateTo({
      url: '/pages/bendi/bendi?key=今日最新'
    })
  },
  bendi: function () {
    wx.navigateTo({
      url: '/pages/bendi/bendi?key=本地招聘'
    })
  },
  mingqi: function () {
    wx.navigateTo({
      url: '/pages/bendi/bendi?key=名企招聘'
    })
  },
  returnfee: function () {
    wx.navigateTo({
      url: '/pages/returnfee/returnfee',
    })
  },
  // 头部4个分类跳转
  sanlei: function (e) {
    var that = this;

    // tophead距离顶部的值
    var clienty = e.touches[0].clientY;

    // console.log(this.data.diyige)
    if (this.data.curren == 0 && this.data.diyige == "true") {
      var ww = setInterval(function () {
        clienty -= 10;
        that.setData({
          tophead: clienty,
          post: "fixed"
        })
        if (that.data.tophead <= 0) {
          clearInterval(ww)
          that.setData({
            tophead: 0,
            post: "fixed"
          })
        }
      }, 1)

      var gaodu = 0;
      setTimeout(function () {
        var ss = setInterval(function () {
          // console.log(gaodu)
          if (that.data.tophead == 0) {
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
              disi: "true",
            })
            if (gaodu > 500) {
              clearInterval(ss);
            }
          }
        }, 10)
      }, 1)
    } else if (this.data.curren != 0 && this.data.diyige == "true") {
      var ww = setInterval(function () {
        clienty -= 10;
        that.setData({
          tophead: clienty,
          post: "fixed"
        })
        if (that.data.tophead <= 0) {
          clearInterval(ww)
          that.setData({
            tophead: 0,
            post: "fixed"
          })
        }
      }, 1)
      var that = this;
      var gaodu = 0;
      // setTimeout(function () {
      var ss = setInterval(function () {
        // console.log(gaodu)
        if (that.data.tophead == 0) {
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
            disi: "true",
          })
          if (gaodu > 500) {
            clearInterval(ss);
          }
        }
      }, 10)
      // }, 300)
    }
  },

  sanprice: function (e) {

    // wx.pageScrollTo({
    //   scrollTop: 560
    // })
    var that = this;
    var clienty = e.touches[0].clientY;
    // console.log(clienty)


    if (this.data.curren != 1 && this.data.dier == "true") {
      var ww = setInterval(function () {
        clienty -= 10;
        that.setData({
          tophead: clienty,
          post: "fixed"
        })
        if (that.data.tophead <= 0) {
          clearInterval(ww)
          that.setData({
            tophead: 0,
            post: "fixed"
          })
        }
      }, 1)

      var gaodu = 0;
      // setTimeout(function () {
      var ss = setInterval(function () {
        if (that.data.tophead == 0) {
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
            disi: "true",
          })
          if (gaodu > 500) {
            clearInterval(ss);
          }
        }
      }, 10)
      // }, 300)
    } else if (this.data.curren == 1 && this.data.dier == "true") {
      var ww = setInterval(function () {
        clienty -= 10;
        that.setData({
          tophead: clienty,
          post: "fixed"
        })
        if (that.data.tophead <= 0) {
          clearInterval(ww)
          that.setData({
            tophead: 0,
            post: "fixed"
          })
        }
      }, 1)

      var gaodu = 0;
      // setTimeout(function () {
      var ss = setInterval(function () {
        if (that.data.tophead == 0) {
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
            disi: "true",
          })
          if (gaodu > 500) {
            clearInterval(ss);
          }
        }
      }, 10)
      // }, 300)
    }
  },

  sanzong: function (e) {

    // wx.pageScrollTo({
    //   scrollTop: 560
    // })
    var that = this;
    var clienty = e.touches[0].clientY;

    if (this.data.curren != 2 && this.data.disan == "true") {
      var ww = setInterval(function () {
        clienty -= 10;
        that.setData({
          tophead: clienty,
          post: "fixed"
        })
        if (that.data.tophead <= 0) {
          clearInterval(ww)
          that.setData({
            tophead: 0,
            post: "fixed"
          })
        }
      }, 1)
      // var that = this;
      var gaodu = 0;
      // setTimeout(function () {
      var ss = setInterval(function () {
        if (that.data.tophead == 0) {
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
            disi: "true",
          })
          if (gaodu > 500) {
            clearInterval(ss);
          }
        }
      }, 10)
      // }, 300)
    } else if (this.data.curren == 2 && this.data.disan == "true") {
      var ww = setInterval(function () {
        clienty -= 10;
        that.setData({
          tophead: clienty,
          post: "fixed"
        })
        if (that.data.tophead <= 0) {
          clearInterval(ww)
          that.setData({
            tophead: 0,
            post: "fixed"
          })
        }
      }, 1)
      // var that = this;
      var gaodu = 0;
      // setTimeout(function () {
      var ss = setInterval(function () {
        if (that.data.tophead == 0) {
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
            disi: "true",
          })
          if (gaodu > 500) {
            clearInterval(ss);
          }
        }
      }, 10)
      // }, 300)
    }
  },
  sanshai: function (e) {
    
    var that = this;
    var clienty = e.touches[0].clientY;
      if (this.data.curren != 3 && this.data.disi == "true") {
        var ww = setInterval(function () {
          clienty -= 10;
          that.setData({
            tophead: clienty,
            post: "fixed"
          })
          if (that.data.tophead <= 0) {
            clearInterval(ww)
            that.setData({
              tophead: 0,
              post: "fixed"
            })
          }
        }, 1)
        // var that = this;
        var gaodu = 0;
        // setTimeout(function () {
        var ss = setInterval(function () {
          if (that.data.tophead == 0) {
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
              disi: "false",
            })
            if (gaodu > 500) {
              clearInterval(ss);
            }
          }
        }, 10)
        // }, 300)
      } else if (this.data.curren == 3 && this.data.disi == "true") {
        var ww = setInterval(function () {
          clienty -= 10;
          that.setData({
            tophead: 0,
            post: "fixed"
          })
          if (that.data.tophead <= 0) {
            clearInterval(ww)
            that.setData({
              tophead: 0,
              post: "fixed"
            })
          }
        }, 1)
        // var that = this;
        var gaodu = 0;
        // setTimeout(function () {
        var ss = setInterval(function () {
          if (that.data.tophead == 0) {
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
              disi: "false",
            })
            if (gaodu > 500) {
              clearInterval(ss);
            }
          }
        }, 10)
        // }, 300)
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
      disi: "true",
      dier: "true",
      disan: "true"
    })
  },
  textdianji: function (e) {
    var index = e.currentTarget.dataset.ind;
    console.log(this.data.leixing[index].state)
    if (this.data.leixing[index].state == 1) {
      this.data.leixing[index].state = 0;
    }
    else if (this.data.leixing[index].state == 0) {
      this.data.leixing[index].state = 1;
    }
    this.setData({
      leixing: this.data.leixing
    })
  },
  textdiana: function (e) {
    var index = e.currentTarget.dataset.ia;
    console.log(this.data.jine[index].state)
    if (this.data.jine[index].state == 1) {
      this.data.jine[index].state = 0;
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
  // 填写报名信息显示和隐藏
  dcancel: function () {
    this.setData({
      dcancel: "none"
    })
  },
  dconfirm: function () {
    this.setData({
      dcancel: "none"
    })
    wx.navigateTo({
      // 跳转到报名表
      url: '/pages/baoming/baoming',
    })
  },
  xiangqing: function () {
    wx.navigateTo({
      url: '/pages/postdetails/postdetails',
    })
  },
  huidaotop: function () {
    console.log(this.data.gao)
    if (this.data.gao == 0) {
      wx.pageScrollTo({
        scrollTop: 565
      })
      this.setData({
        abba : 565
      })
    }
    this.setData({
      post: 'fixed',
      juli: '100'
    })
  },
  bindscro:function(e){
    if (e.detail.scrollTop >= 565) {
      this.setData({
        post: 'fixed',
        juli: '100'
      })
    }
    else {
      this.setData({
        post: 'relative',
        juli: '-17',
      })
    }
  }
})