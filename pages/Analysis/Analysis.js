// pages/Analysis/Analysis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectorItems:  ["a","b","c"]
  },
  // selectorChange选择课程函数
  selectorChange: function(e) {
    let i = e.detail.value; //获得选项的数组下标
    let value = this.data.selectorItems[i]; //获得选项的值
    this.setData({
      selector: value
    }); //将选项名称更新到WXML页面上
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取数据
    var that = this
    wx.request({
      url: 'http://47.100.229.168:8080/stu/paper/analysis/1',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        res.data.percentage = res.data.percentage.toFixed(2)
        wx.request({
          url: 'http://47.100.229.168:8080/stu/grade/analysis/1',
          headers: {
            'Content-Type': 'application/json'
          },
          success: function(res1) {
            console.log(res1.data)
            that.setData({
              paper_name: '程序设计基础与C程序设计',
              paper_id: 1,
              analysis: res.data,
              gradeAnalysis: res1.data
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})