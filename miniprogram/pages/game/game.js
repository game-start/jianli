"use strict";
Page({
    data: {
        game: [
            {
                name: "捕鱼游戏",
                url: "https://guo_yuandong.gitee.io/fishgame/web-mobile",
                image: "../../resource/image/fish.jpg"
            },
            {
                name: "单机五子棋",
                url: "https://guo_yuandong.gitee.io/fishgame/gobang-mobile/",
                image: "../../resource/image/gobang.png"
            }
        ],
    },
    copyText: function (e) {
        console.log(e);
        wx.setClipboardData({
            data: e.currentTarget.dataset.text,
            success: function () {
                wx.showToast({
                    icon: "none",
                    title: "链接已经复制到粘贴板，请到浏览器打开"
                });
            }
        });
    },
    onLoad: function () {
        wx.showShareMenu({
            withShareTicket: true,
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksQ0FBQztJQUNELElBQUksRUFBQztRQUNILElBQUksRUFBQztZQUNIO2dCQUNFLElBQUksRUFBQyxNQUFNO2dCQUNYLEdBQUcsRUFBQyxtREFBbUQ7Z0JBQ3ZELEtBQUssRUFBQywrQkFBK0I7YUFDdEM7WUFDRDtnQkFDRSxJQUFJLEVBQUMsT0FBTztnQkFDWixHQUFHLEVBQUMsdURBQXVEO2dCQUMzRCxLQUFLLEVBQUMsaUNBQWlDO2FBQ3hDO1NBQ0Y7S0FDRjtJQUNELFFBQVEsWUFBQyxDQUFLO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNoQixJQUFJLEVBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUNqQyxPQUFPLEVBQUM7Z0JBQ04sRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxJQUFJLEVBQUMsTUFBTTtvQkFDWCxLQUFLLEVBQUMsb0JBQW9CO2lCQUMzQixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELE1BQU07UUFDSixFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ2YsZUFBZSxFQUFFLElBQUk7U0FDdEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xyXG4gICAgZGF0YTp7XHJcbiAgICAgIGdhbWU6W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6XCLmjZXpsbzmuLjmiI9cIixcclxuICAgICAgICAgIHVybDpcImh0dHBzOi8vZ3VvX3l1YW5kb25nLmdpdGVlLmlvL2Zpc2hnYW1lL3dlYi1tb2JpbGVcIixcclxuICAgICAgICAgIGltYWdlOlwiLi4vLi4vcmVzb3VyY2UvaW1hZ2UvZmlzaC5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTpcIuWNleacuuS6lOWtkOaji1wiLFxyXG4gICAgICAgICAgdXJsOlwiaHR0cHM6Ly9ndW9feXVhbmRvbmcuZ2l0ZWUuaW8vZmlzaGdhbWUvZ29iYW5nLW1vYmlsZS9cIixcclxuICAgICAgICAgIGltYWdlOlwiLi4vLi4vcmVzb3VyY2UvaW1hZ2UvZ29iYW5nLnBuZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIGNvcHlUZXh0KGU6YW55KXtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgd3guc2V0Q2xpcGJvYXJkRGF0YSh7XHJcbiAgICAgICAgICAgIGRhdGE6ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGV4dCxcclxuICAgICAgICAgICAgc3VjY2VzczooKT0+e1xyXG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICBpY29uOlwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6XCLpk77mjqXlt7Lnu4/lpI3liLbliLDnspjotLTmnb/vvIzor7fliLDmtY/op4jlmajmiZPlvIBcIlxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICB3eC5zaG93U2hhcmVNZW51KHtcclxuICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbn0pIl19