// pages/applycenter/applycenter.js
var app = getApp();
var pagesize = 0
function selectApplicant(that) { 
  var openId = app.returnOpenId()
  wx.request({
    url: app.globalData.appUrl + 'WXApplicantCompantJob/selectApplicantCompanyJobPage',
    data: {
      openId: openId, 
      currentPage: ++pagesize
    },
    header: {
      // 'content-type': 'application/x-www-form-urlencoded' // Ĭ��ֵ
      'content-type': 'application/x-www-form-urlencoded', // Ĭ��ֵ
      xcxuser_name: "xcxuser_name"
    },
    method: 'get',
    success: function (res) {
      console.info("�������û�����ְλ����Ϣ��")
      console.log(res.data[0])
      if (res.data[0].lists.length > 0) {
        var applicantList = that.data.applicantList;
         for (var i = 0; i < res.data[0].lists.length; i++) {
           res.data[0].lists[i].companyJob[0].jobLabels = JSON.parse(res.data[0].lists[i].companyJob[0].jobLabels)
           res.data[0].lists[i].companyJob[0].company.companyAddress=res.data[0].lists[i].companyJob[0].company.companyAddress.split(",")[2];
           applicantList.push(res.data[0].lists[i])
         }
         console.info(res.data[0].lists, applicantList)
         
        that.setData({
          applicantList,
          showLoading: true,
        })
      } else {
        that.setData({
          bottomText: false,
          showLoading: true,
        })
      }
    }
  })
}




Page({

  /**
   * ҳ��ĳ�ʼ���� 
   */
  data: {
    flag: true,
    // �����ɹ�����
  applicantList:[],
  },

  /**
   * �������ں���--����ҳ�����
   */
  onLoad: function (options) {
    //��ȡϵͳ�߶�
    let scrollHeight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      scrollHeight: scrollHeight
    });

  },

  /**
   * �������ں���--����ҳ�������Ⱦ���
   */
  onReady: function () {
  
  },

  /**
   * �������ں���--����ҳ����ʾ
   */
  onShow: function () {

    this.data.applicantList=[];
    this.setData({
      applicantList: this.data.applicantList
    })
    pagesize = 0;
    selectApplicant(this)
  },

  /**
   * �������ں���--����ҳ������
   */
  onHide: function () {
      
  },

  /**
   * �������ں���--����ҳ��ж��
   */
  onUnload: function () {
   
  },  

  /**
   * ҳ������¼�������--�����û���������
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * ҳ�����������¼��Ĵ�����
   */
  onReachBottom: function () {
  
  },

  /**
   * �û�������ϽǷ���
   */
  onShareAppMessage: function () {
  
  },
  show: function () {

    this.setData({ flag: false })

  },

  //����ˢ�¹���
  lower() {
    console.log("��ҳ��")
    this.setData({
      showLoading: false
    })
    selectApplicant(this)
  },
  //��ʧ

  hide: function () {

    this.setData({ flag: true })

  },
  //��λ����
  companyJobDetails:function(e){
    var that = this
    console.log(e.currentTarget.dataset.id);
    var companyJobId = e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.index
     //�жϸ�λ�Ƿ���Ч
    var isInvalid = that.data.applicantList[index].isInvalid;
    var applicantList = that.data.applicantList
    var applicantContent = applicantList[index].applicantContent
    app.globalData.applicantContent = applicantContent
    wx.navigateTo({
      url: '/pages/postdetails/postdetails?CompanyJobId=' + companyJobId + '&CompanyJob=' + applicantContent + '&isInvalid=' + isInvalid, 
    })
  }
})