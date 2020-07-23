// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init();
let db = cloud.database()
let userInfo = db.collection("userInfo")

// 云函数入口函数
exports.main = (event, context) => {
  console.log(event);
  let{Info,key,value} = event;
  console.log(userInfo);
  userInfo.where({
      [key]:value
  }).remove();
}