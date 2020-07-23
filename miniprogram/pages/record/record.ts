Page({
    data:{
      userInfoList:[],
      buttonText:"",
      openid:""
    },
    onLoad(){
        wx.showShareMenu({
            withShareTicket: true,
          })
        wx.cloud.init();
        this.getOpenid();
        this.getAllUserInfo();
    },
    getOpenid(){
        wx.cloud.callFunction({
          name:"getOpenid"
        }).then((res:any)=>{
            console.log("openid")
            console.log(res);
            let openid = res.result.openid;
            this.data.openid = openid;
            this.isRecord(openid);
        })
    },
    isRecord(openid:string){
        let db = wx.cloud.database();
        let userInfo = db.collection("userInfo");
        userInfo.where({
          _openid:openid
        }).get().then(res=>{
            console.log("db");
            console.log(res);
            if(res.data.length>=1){
                this.setData({
                    buttonText:"点击按钮消除信息"
                })
            }else{
                this.setData({
                    buttonText:"点击按钮留下记录"
                })
            }
        })
    },
    onGetUserInfo(e:any){
        console.log(e);
        if(this.data.buttonText === "点击按钮留下记录"){
            wx.showModal({
                title:"提示",
                content:"我会获取您的昵称和头像",
                cancelText:"不同意",
                confirmText:"同意",
                success:(res)=>{
                    if(res.confirm){
                        let nickName = e.detail.userInfo.nickName;
                        let avatarUrl = e.detail.userInfo.avatarUrl;
                        this.addUserInfo(nickName,avatarUrl);
                    }
                }
            });
        }else if(this.data.buttonText === "点击按钮消除信息"){
            wx.showModal({
                title:"提示",
                content:"我会删除关于您的信息",
                cancelText:"算了吧",
                confirmText:"还是删掉",
                success:()=>{
                    this.deleteUserInfo();
                }
            })
        }
    },
    addUserInfo(nickName:string,avatarUrl:string){
        let db = wx.cloud.database();
        let userInfo = db.collection("userInfo");
        userInfo.add({
            data:{
                nickName:nickName,
                avatarUrl:avatarUrl
            }
        }).then(()=>{
            this.setData({
                buttonText:"点击按钮消除信息"
            });
            wx.showToast({
                icon:"none",
                title:"谢谢!"
            });
            this.getAllUserInfo();
        })
    },
    deleteUserInfo(){
        wx.cloud.callFunction({
            name:"deleteUserInfo",
            data:{
                key:"_openid",
                value:this.data.openid
            }
        }).then(()=>{
            this.setData({
                buttonText:"点击按钮留下记录"
            });
            this.getAllUserInfo();
        })
    },
    getAllUserInfo(){
      let db = wx.cloud.database();
      let userInfo = db.collection("userInfo");
      userInfo.get()
      .then((res:any)=>{
         this.setData({
             userInfoList:res.data
         }) 
      })
    }
})