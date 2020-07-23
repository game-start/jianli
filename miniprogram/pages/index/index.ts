// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    motto: "您好",
    userInfo:{}
  },
  // 事件处理函数
  toMyResume(){
      wx.switchTab({
        url:"../info/info"
      })
  },
  onLoad() {
      wx.showShareMenu({
        withShareTicket: true,
      })
      if(app.globalData.userInfo){
          this.data.userInfo = app.globalData.userInfo;
      }
  },
 
})
