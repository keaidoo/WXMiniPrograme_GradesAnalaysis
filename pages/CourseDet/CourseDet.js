// pages/CourseDet/CourseDet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取数据
 
    var that = this
    wx.request({
      url: 'http://47.100.229.168:8080/stu/teacher/courses/1',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫list的这个数组中
        //console.log(res.data)
        that.setData({
          list: res.data,
          //res代表success函数的事件对，data是固定的，list是数组
        })
      }
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