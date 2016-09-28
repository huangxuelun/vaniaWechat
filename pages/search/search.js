//index.js
//获取应用实例
var app = getApp()
Page({
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    let name = wx.getStorageSync("name");
    console.log(name);
    console.log("aaaa")
  }
})
