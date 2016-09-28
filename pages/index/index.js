//index.js
//获取应用实例
var app = getApp(),
    sports = require("../../dataSource/data.js").sports,
    getApiData = require("../../utils/apiData.js").getApiData;
const LEAGUE_KEY = "012cbe006fb1b37f1983ee57d567daed"; 
const LEAGUE_URL = "http://op.juhe.cn/onebox/football/league";   
Page({
  //初始化数据
  data: {
    favour: null,
    records: true,
    userInfo: {},
    ranks: [],
    items: sports,
    league: ""
  },
  onReady() {

  },
  viewTap() {

  },
  onShow() {

  },
  onHide() {

  },
  onUnload() {

  },
  changeFavour() {
    this.setData({
      favour: null,
      records: true
    })
  },
  getApi(data) {
    let that = this;
    getApiData(LEAGUE_URL, data, function(res) {
        that.setData({
          records: false,
          ranks: res.data.result.views.jifenbang,
          league: res.data.result.key
        })
        wx.setStorageSync("favour", data.league);
    })
  },
  getMessage: function() {
    var data = {
        "league": this.data.favour,
        "key": LEAGUE_KEY
    }
    this.getApi(data);
  },
  radioChange(e) {
    this.setData({
      favour: e.detail.value
    })
  },
  onLoad() {
    let favour = decodeURI(wx.getStorageSync("favour"));
    if (favour){
        this.setData({
          records: false
        })
        this.getApi({
          "league": favour,
          "key": LEAGUE_KEY
        })
    }
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      this.setData({
        userInfo:userInfo
      })
    }.bind(this))
  }
})
