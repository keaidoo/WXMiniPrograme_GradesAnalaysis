// pages/ReplaceQuestion/ReplaceQuestion.js




Page({

  /**
   * 页面的初始数据
   */
  data: {
    qNum:'',
    qContent: '',
    qPoint:'',
    lists: [],              // 接收搜索的内容
    wxSearchData: ''    // 输入的值


  },
  //获取用户输入的用户名
  qNumInput: function (e) {
    this.setData({
      qNum: e.detail.value
    })
  },
  qContentInput: function (e) {
    this.setData({
      qContent: e.detail.value
    })
  },
  qPointInput: function (e) {
    this.setData({
      qPoint: e.detail.value
    })
  },
  //获取用户输入
  changeClick: function (e) {
    console.log("题号：" + this.data.qNum + " 题目内容：" + this.data.qContent + " 题目涉及的知识点："+ this.data.qPoint);
    wx.request({
      url: 'http://47.100.229.168:8080/stu/question/replace/'+this.data.paperId,
      method: 'POST',
      data: {
        questionNumber: this.data.qNum,
        question: this.data.qContent,
        points: this.data.qPoint
      },
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.data === "failed") {
          wx.showToast({
            title: '替换出错！',
            icon: 'none',
            duration: 2000
          })
        } else {
          wx.showToast({
            title: '替换成功',
            icon: 'success',
            duration: 2000
          })
        }
      }
    })
  },
//搜索


// 分割线

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      paperId: options.paper_id,
      courseName:options.course_name,
      paperName:options.paper_name
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

  }
})