// pages/AnswerDet/AnswerDet.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
   a1:[
     {
       Question_num: "1",
       corret_rate: "20%",
     },
     {
       Question_num: "2",
       corret_rate: "26%",
     },
     {
       Question_num: "3",
       corret_rate: "40%",
     },
     {
       Question_num: "4",
       corret_rate: "20%",
     },
     {
       Question_num: "7",
       corret_rate: "56%",
     },
     {
       Question_num: "8",
       corret_rate: "50%",
     },
     {
       Question_num: "1",
       corret_rate: "20%",
     },
     {
       Question_num: "2",
       corret_rate: "26%",
     },
   ],
   
    aa: [
      {
        nickName: "小红",
        studentnum:"20151392",
        reward: "65"
      },
      {
        nickName: "小兰",
        studentnum: "20151331",
        reward: "93"
      },
      {
        nickName: "小白",
        studentnum: "20151352",
        reward: "54"
      },
      {
        nickName: "小云",
        studentnum: "20151347",
        reward: "77"
      },
      {
        nickName: "小M",
        studentnum: "20151347",
        reward: "67"
      },
      {
        nickName: "小云",
        studentnum: "20151347",
        reward: "77"
      },
      {
        nickName: "小M",
        studentnum: "20151347",
        reward: "67"
      },
    ],



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
      //获取数据
      var that=this
      wx.request({
        url: 'http://47.100.229.168:8080/stu/teacher/courses/1',
        success:function(res){
          that.setData({
            list: res.data,
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