//index.js
//获取应用实例
var app = getApp()
Page({
  //初始化数据
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  onReady: function() {

  },
  viewTap: function() {

  },
  onShow: function() {

  },
  onHide: function() {

  },
  onUnload: function() {

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    console.log("================")
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log(this);
      //更新数据
      this.setData({
        userInfo:userInfo
      })
    }.bind(this))
  }
})
