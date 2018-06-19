// pages/returnfee/returnfee.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '', //代表自己定义的日期
    dates: "", //显示的日期
    // 工厂信息
    factory: [
      {
        name: "常熟新市常熟新市",
        date: "2018-3-23",
        title: [
          { name: "学生" }
        ]
      },  
      {
        name: "【扬州李尔",
        date: "2018-3-23",
        title: [
          { name: "学生" }
        ]
      },
      {
        name: "常熟新市",
        date: "2018-3-23",
        title: [
          { name: "学生" }
        ]
      },
      {
        name: "【扬州李尔",
        date: "2018-3-23",
        title: [
          { name: "学生" }
        ]
      },
      {
        name: "常熟新市",
        date: "2018-3-23",
        title: [
          { name: "学生" }
        ]
      },
      {
        name: "【扬州李尔",
        date: "2018-3-23",
        title: [
          { name: "学生" }
        ]
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 先获取当前日期显示
    this.data.date = new Date();
    var ddd = new Date();
    var myDate = this.data.date.getFullYear() + '-' + (this.data.date.getMonth() + 1) + '-' + this.data.date.getDate()
    var yayay = {
      year: ddd.getFullYear(),
      month: ddd.getMonth() +1,
      day: ddd.getDate()
    }
    // 判断月份和日期前面有没有0
    if ((ddd.getMonth() + 1) <= 9 && ddd.getDate() >= 10) {
      var myDate = ddd.getFullYear() + '-' + (ddd.getMonth() + 1) + '-0' + ddd.getDate();
    }
    if ((ddd.getMonth() + 1) && ddd.getDate() >= 10) {
      var myDate = ddd.getFullYear() + '-0' + (ddd.getMonth() + 1) + '-' + ddd.getDate();
    }
    if ((ddd.getMonth() + 1) && ddd.getDate() <= 9) {
      var myDate = ddd.getFullYear() + '-0' + (ddd.getMonth() + 1) + '-0' + ddd.getDate();
    }
    if ((ddd.getMonth() + 1) >= 10 && ddd.getDate() >= 10) {
      var myDate = ddd.getFullYear() + '-' + (ddd.getMonth() + 1) + '-' + ddd.getDate();
    }
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    this.setData({
      dates: myDate,
      date: yayay
    });
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
  //  点击日期组件确定事件  
  bindDateChange: function (e) {
    //根据获取到的日期，进行解析，分别取到 年，月，日,然后赋值给日期数据
    var arr = e.detail.value.split('-');
    var er = [''], san = [''];
    if (arr[1] <= 9) {
      er = arr[1].split('0')
    }
    if (arr[2] <= 9) {
      san = arr[2].split('0')
    }
    var ser, ber;
    if (er.length == 2) {
      ser = er[1];
    } else {
      ser = arr[1];
    }
    //转化成number类型
    parseInt(ser);
    if (san.length == 2) {
      ber = san[1]
    } else {
      ber = arr[2]
    }
    var yayay = {
      year: arr[0],
      month: ser,
      day: ber 
    }
    this.setData({
      dates: e.detail.value,
      date: yayay
    })
  },
  chakan: function () {
    wx.navigateTo({
      url: '/pages/identical/identical',
    })
  },
  pageon: function () {
    var datea = this.data.date;
    var monthDaySize;
    if (datea.day == 1){
      datea.month--;
    }
    if (datea.month == 1 || datea.month == 3 || datea.month == 5 || datea.month == 7 || datea.month == 8 || datea.month == 10 || datea.month == 12)     {
      monthDaySize = 31;
    } else if (datea.month == 4 || datea.month == 6 || datea.month == 9 || datea.month == 11) {
      monthDaySize = 30;
    } else if (datea.month == 2) {
      // 计算是否是闰年,如果是二月份则是29天
      if ((datea.year - 2000) % 4 == 0) {
        monthDaySize = 29;
      } else {
        monthDaySize = 28;
      }
    };
    //判断月份为1，天数为1时，年份减1
    if (datea.month== 1 && datea.day == 1){
      datea.month = 13;
      datea.year--; 
    }
    //判断天数为1，月份减1，天数回到本月最大
    if (datea.day == 1) {
      datea.day = monthDaySize;
      
      if (datea.day <= 9 && datea.month >= 10) {
        var myDate = datea.year + '-' + (datea.month) + '-0' + datea.day;
      }
      if (datea.month <= 9 && datea.day >= 10) {
        var myDate = datea.year + '-0' + (datea.month) + '-' + datea.day;
      }
      if (datea.month <= 9 && datea.day <= 9) {
        var myDate = datea.year + '-0' + (datea.month) + '-0' + datea.day;
      }
      if (datea.month >= 10 && datea.day >= 10) {
        var myDate = datea.year + '-' + (datea.month) + '-' + datea.day;
      }

    } else {
      datea.day--;
      if (datea.day <= 9 && datea.month >= 10) {
        var myDate = datea.year + '-' + (datea.month) + '-0' + datea.day;
      }
      if (datea.month <= 9 && datea.day >= 10) {
        var myDate = datea.year + '-0' + (datea.month) + '-' + datea.day;
      }
      if (datea.month <= 9 && datea.day <= 9) {
        var myDate = datea.year + '-0' + (datea.month) + '-0' + datea.day;
      }
      if (datea.month >= 10 && datea.day >= 10) {
        var myDate = datea.year + '-' + (datea.month) + '-' + datea.day;
      }
    }
    
    this.setData({
      date: datea,  //日期数据
      dates: myDate //拼接后的日期
    });
  },
  pageup: function () {
    var datea = this.data.date;
    // 根据月份来判断当前对应月份的天数
    var monthDaySize;
    if (datea.month == 1 || datea.month == 3 || datea.month == 5 || datea.month == 7 || datea.month == 8 || datea.month == 10 || datea.month == 12)     {
      monthDaySize = 31;
    } else if (datea.month == 4 || datea.month == 6 || datea.month == 9 || datea.month == 11) {
      monthDaySize = 30;
    } else if (datea.month == 2) {
      // 计算是否是闰年,如果是二月份则是29天
      if ((datea.year - 2000) % 4 == 0) {
        monthDaySize = 29;
      } else {
        monthDaySize = 28;
      }
    };
    
   //判断月份为12，天数为最大时，年份加1
    if (datea.month == 12 && datea.day == monthDaySize) {
      datea.month = 0;
      datea.year++;
    }
    // 获取当前系统日期来判断，不能超过当前日期
    var ddd = new Date();
    var ss = ddd.getMonth() + 1;
    var aa = ddd.getDate();
    var yy=ddd.getFullYear();
    if (datea.month >= ss && datea.day >= aa && datea.year >=yy) {
      return false
    }
  //判断天数为本月最大，月份加1，天数回到1
    if (datea.day == monthDaySize) {
      datea.day = 1;
      datea.month++;
      if (datea.day <= 9 && datea.month >= 10) {
        var myDate = datea.year + '-' + (datea.month) + '-0' + datea.day;
      }
      if (datea.month <= 9 && datea.day >= 10) {
        var myDate = datea.year + '-0' + (datea.month) + '-' + datea.day;
      }
      if (datea.month <= 9 && datea.day <= 9) {
        var myDate = datea.year + '-0' + (datea.month) + '-0' + datea.day;
      }
      if (datea.month >= 10 && datea.day >= 10) {
        var myDate = datea.year + '-' + (datea.month) + '-' + datea.day;
      }

    } else { 
      datea.day++;
      if (datea.day <= 9 && datea.month >= 10) {
        var myDate = datea.year + '-' + (datea.month) + '-0' + datea.day;
      }
      if (datea.month <= 9 && datea.day >= 10) {
        var myDate = datea.year + '-0' + (datea.month) + '-' + datea.day;
      }
      if (datea.month <= 9 && datea.day <= 9) {
        var myDate = datea.year + '-0' + (datea.month) + '-0' + datea.day;
      }
      if (datea.month >= 10 && datea.day >= 10) {
        var myDate = datea.year + '-' + (datea.month) + '-' + datea.day;
      }
    }
    this.setData({
      date: datea,  //日期数据
      dates: myDate //拼接后的日期
    });
  }
})
