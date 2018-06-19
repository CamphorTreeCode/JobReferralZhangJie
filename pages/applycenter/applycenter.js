// pages/applycenter/applycenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
    // 报名成功数据
    dates:[
      {
        name:"江苏盐城日铠电脑配件",
        title:[
          {name:"人气"},
          { name: "返现最高" }
        ],
        dizhi:"松江",
        price:"4000-5000"
      },
      {
        name: "上海国美电器有限公司",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        dizhi: "虹口",
        price: "4000-5000"
      },
      {
        name: "上海一指禅科技有限公司",
        title: [
          { name: "人气" },
          { name: "返现最高" }
        ],
        dizhi: "徐家汇",
        price: "4000-5000"
      }
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
  show: function () {

    this.setData({ flag: false })

  },
  //消失

  hide: function () {

    this.setData({ flag: true })

  },
})