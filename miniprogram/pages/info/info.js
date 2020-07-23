"use strict";
Page({
    data: {
        list: [
            {
                title: "基本信息",
                info: {
                    "姓名": "郭远东",
                    "年龄": 23,
                    "求职意向": "初级cocoscreator开发",
                    "联系电话": "17371429211",
                    "邮箱": "303726001@qq.com",
                    "住址所在地": "武汉",
                    "毕业学校": "武汉科技大学(本科)",
                    "所学专业": "软件工程"
                },
                showDetails: false
            },
            {
                title: "掌握技能",
                info: {
                    "1": "能够熟练使用js和ts编写游戏逻辑",
                    "2": "熟悉cocoscreator的各种api以及ui的调整",
                    "3": "能够使用chrome开发者工具断点排查bug以及性能调优",
                    "4": "熟悉网络接口（http,websoket),可以跟服务端对接,也知道怎么抓包改包",
                    "5": "了解git工作流",
                    "6": "了解一些web开发相关知识"
                },
                showDetails: false
            },
            {
                title: "个人介绍",
                info: {
                    "简介": "考公务员失败,放弃了。没工作经验,可以接受实习工资,接受加班。希望能得到一个工作和学习的机会。"
                }
            }
        ],
    },
    onLoad: function () {
        wx.showShareMenu({
            withShareTicket: true,
        });
    },
    showDetails: function (e) {
        var _this = this;
        var _a, _b;
        console.log(e);
        var id = e.currentTarget.id;
        var key = "list[" + id + "].showDetails";
        if (!this.data.list[id].showDetails) {
            this.setData((_a = {},
                _a[key] = true,
                _a), function () {
                console.log(_this.data.list);
            });
        }
        else {
            this.setData((_b = {},
                _b[key] = false,
                _b), function () {
                console.log(_this.data.list);
            });
        }
        ;
    },
    imageClickEvent: function (e) {
        console.log(e);
        if (e.currentTarget.dataset.index === "0") {
            wx.previewImage({
                current: "https://7975-yun-ihek2-1302692932.tcb.qcloud.la/WX.jpg?sign=382f3aaa6e2bbbbfd177c2f45de12cd5&t=1595429345",
                urls: ["https://7975-yun-ihek2-1302692932.tcb.qcloud.la/WX.jpg?sign=382f3aaa6e2bbbbfd177c2f45de12cd5&t=1595429345", "https://7975-yun-ihek2-1302692932.tcb.qcloud.la/QQ.jpg?sign=8e529f1762eccb7bbea42f677484c4fa&t=1595429389"]
            });
        }
        else if (e.currentTarget.dataset.index === "1") {
            wx.previewImage({
                current: "https://7975-yun-ihek2-1302692932.tcb.qcloud.la/QQ.jpg?sign=8e529f1762eccb7bbea42f677484c4fa&t=1595429389",
                urls: ["https://7975-yun-ihek2-1302692932.tcb.qcloud.la/WX.jpg?sign=382f3aaa6e2bbbbfd177c2f45de12cd5&t=1595429345", "https://7975-yun-ihek2-1302692932.tcb.qcloud.la/QQ.jpg?sign=8e529f1762eccb7bbea42f677484c4fa&t=1595429389"]
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksQ0FBQztJQUNILElBQUksRUFBQztRQUNILElBQUksRUFBQztZQUNEO2dCQUNFLEtBQUssRUFBQyxNQUFNO2dCQUNaLElBQUksRUFBQztvQkFDSCxJQUFJLEVBQUMsS0FBSztvQkFDVixJQUFJLEVBQUMsRUFBRTtvQkFDUCxNQUFNLEVBQUMsa0JBQWtCO29CQUN6QixNQUFNLEVBQUMsYUFBYTtvQkFDcEIsSUFBSSxFQUFDLGtCQUFrQjtvQkFDdkIsT0FBTyxFQUFDLElBQUk7b0JBQ1osTUFBTSxFQUFDLFlBQVk7b0JBQ25CLE1BQU0sRUFBQyxNQUFNO2lCQUNkO2dCQUNELFdBQVcsRUFBQyxLQUFLO2FBQ2xCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFDLE1BQU07Z0JBQ1osSUFBSSxFQUFDO29CQUNGLEdBQUcsRUFBQyxtQkFBbUI7b0JBQ3ZCLEdBQUcsRUFBQyw2QkFBNkI7b0JBQ2pDLEdBQUcsRUFBQyw4QkFBOEI7b0JBQ2xDLEdBQUcsRUFBQywwQ0FBMEM7b0JBQzlDLEdBQUcsRUFBQyxVQUFVO29CQUNkLEdBQUcsRUFBQyxlQUFlO2lCQUNyQjtnQkFDRCxXQUFXLEVBQUMsS0FBSzthQUNsQjtZQUNEO2dCQUNFLEtBQUssRUFBQyxNQUFNO2dCQUNaLElBQUksRUFBQztvQkFDSCxJQUFJLEVBQUMsaURBQWlEO2lCQUN2RDthQUNGO1NBQ0o7S0FDRjtJQUNELE1BQU07UUFDSixFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ2YsZUFBZSxFQUFFLElBQUk7U0FDdEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFdBQVcsWUFBQyxDQUFLO1FBQWpCLGlCQWlCQzs7UUFoQkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksR0FBRyxHQUFHLFVBQVEsRUFBRSxrQkFBZSxDQUFBO1FBQ25DLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsR0FBQyxHQUFHLElBQUUsSUFBSTtxQkFDVjtnQkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFJO1lBQ0gsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsR0FBQyxHQUFHLElBQUUsS0FBSztxQkFDWDtnQkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUE7U0FDSDtRQUFBLENBQUM7SUFDTixDQUFDO0lBQ0QsZUFBZSxZQUFDLENBQUs7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEdBQUcsRUFBQztZQUNyQyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUNaLE9BQU8sRUFBQywyR0FBMkc7Z0JBQ25ILElBQUksRUFBQyxDQUFDLDJHQUEyRyxFQUFDLDJHQUEyRyxDQUFDO2FBQ2pPLENBQUMsQ0FBQztTQUNOO2FBQUssSUFBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssR0FBRyxFQUFDO1lBQzdDLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsT0FBTyxFQUFDLDJHQUEyRztnQkFDbkgsSUFBSSxFQUFDLENBQUMsMkdBQTJHLEVBQUMsMkdBQTJHLENBQUM7YUFDak8sQ0FBQyxDQUFDO1NBQ0Y7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XG4gIGRhdGE6e1xuICAgIGxpc3Q6W1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6XCLln7rmnKzkv6Hmga9cIixcbiAgICAgICAgICBpbmZvOntcbiAgICAgICAgICAgIFwi5aeT5ZCNXCI6XCLpg63ov5zkuJxcIixcbiAgICAgICAgICAgIFwi5bm06b6EXCI6MjMsXG4gICAgICAgICAgICBcIuaxguiBjOaEj+WQkVwiOlwi5Yid57qnY29jb3NjcmVhdG9y5byA5Y+RXCIsXG4gICAgICAgICAgICBcIuiBlOezu+eUteivnVwiOlwiMTczNzE0MjkyMTFcIixcbiAgICAgICAgICAgIFwi6YKu566xXCI6XCIzMDM3MjYwMDFAcXEuY29tXCIsXG4gICAgICAgICAgICBcIuS9j+WdgOaJgOWcqOWcsFwiOlwi5q2m5rGJXCIsXG4gICAgICAgICAgICBcIuavleS4muWtpuagoVwiOlwi5q2m5rGJ56eR5oqA5aSn5a2mKOacrOenkSlcIixcbiAgICAgICAgICAgIFwi5omA5a2m5LiT5LiaXCI6XCLova/ku7blt6XnqItcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hvd0RldGFpbHM6ZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOlwi5o6M5o+h5oqA6IO9XCIsXG4gICAgICAgICAgaW5mbzp7XG4gICAgICAgICAgICAgXCIxXCI6XCLog73lpJ/nhp/nu4Pkvb/nlKhqc+WSjHRz57yW5YaZ5ri45oiP6YC76L6RXCIsXG4gICAgICAgICAgICAgXCIyXCI6XCLnhp/mgoljb2Nvc2NyZWF0b3LnmoTlkITnp41hcGnku6Xlj4p1aeeahOiwg+aVtFwiLFxuICAgICAgICAgICAgIFwiM1wiOlwi6IO95aSf5L2/55SoY2hyb21l5byA5Y+R6ICF5bel5YW35pat54K55o6S5p+lYnVn5Lul5Y+K5oCn6IO96LCD5LyYXCIsXG4gICAgICAgICAgICAgXCI0XCI6XCLnhp/mgonnvZHnu5zmjqXlj6PvvIhodHRwLHdlYnNva2V0KSzlj6/ku6Xot5/mnI3liqHnq6/lr7nmjqUs5Lmf55+l6YGT5oCO5LmI5oqT5YyF5pS55YyFXCIsXG4gICAgICAgICAgICAgXCI1XCI6XCLkuobop6NnaXTlt6XkvZzmtYFcIixcbiAgICAgICAgICAgICBcIjZcIjpcIuS6huino+S4gOS6m3dlYuW8gOWPkeebuOWFs+efpeivhlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93RGV0YWlsczpmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6XCLkuKrkurrku4vnu41cIixcbiAgICAgICAgICBpbmZvOntcbiAgICAgICAgICAgIFwi566A5LuLXCI6XCLogIPlhazliqHlkZjlpLHotKUs5pS+5byD5LqG44CC5rKh5bel5L2c57uP6aqMLOWPr+S7peaOpeWPl+WunuS5oOW3pei1hCzmjqXlj5fliqDnj63jgILluIzmnJvog73lvpfliLDkuIDkuKrlt6XkvZzlkozlrabkuaDnmoTmnLrkvJrjgIJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF0sXG4gIH0sXG4gIG9uTG9hZCgpe1xuICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlLFxuICAgIH0pXG4gIH0sXG4gIHNob3dEZXRhaWxzKGU6YW55KXtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgbGV0IGtleSA9IGBsaXN0WyR7aWR9XS5zaG93RGV0YWlsc2BcbiAgICAgIGlmKCF0aGlzLmRhdGEubGlzdFtpZF0uc2hvd0RldGFpbHMpe1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIFtrZXldOnRydWVcbiAgICAgICAgfSwoKT0+e1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5saXN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBba2V5XTpmYWxzZVxuICAgICAgICB9LCgpPT57XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhLmxpc3QpO1xuICAgICAgICB9KVxuICAgICAgfTtcbiAgfSxcbiAgaW1hZ2VDbGlja0V2ZW50KGU6YW55KXtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgaWYoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXggPT09IFwiMFwiKXtcbiAgICAgICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgICAgICBjdXJyZW50OlwiaHR0cHM6Ly83OTc1LXl1bi1paGVrMi0xMzAyNjkyOTMyLnRjYi5xY2xvdWQubGEvV1guanBnP3NpZ249MzgyZjNhYWE2ZTJiYmJiZmQxNzdjMmY0NWRlMTJjZDUmdD0xNTk1NDI5MzQ1XCIsXG4gICAgICAgICAgICAgIHVybHM6W1wiaHR0cHM6Ly83OTc1LXl1bi1paGVrMi0xMzAyNjkyOTMyLnRjYi5xY2xvdWQubGEvV1guanBnP3NpZ249MzgyZjNhYWE2ZTJiYmJiZmQxNzdjMmY0NWRlMTJjZDUmdD0xNTk1NDI5MzQ1XCIsXCJodHRwczovLzc5NzUteXVuLWloZWsyLTEzMDI2OTI5MzIudGNiLnFjbG91ZC5sYS9RUS5qcGc/c2lnbj04ZTUyOWYxNzYyZWNjYjdiYmVhNDJmNjc3NDg0YzRmYSZ0PTE1OTU0MjkzODlcIl1cbiAgICAgICAgICB9KTtcbiAgICAgIH1lbHNlIGlmKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4ID09PSBcIjFcIil7XG4gICAgICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICAgICAgY3VycmVudDpcImh0dHBzOi8vNzk3NS15dW4taWhlazItMTMwMjY5MjkzMi50Y2IucWNsb3VkLmxhL1FRLmpwZz9zaWduPThlNTI5ZjE3NjJlY2NiN2JiZWE0MmY2Nzc0ODRjNGZhJnQ9MTU5NTQyOTM4OVwiLFxuICAgICAgICAgIHVybHM6W1wiaHR0cHM6Ly83OTc1LXl1bi1paGVrMi0xMzAyNjkyOTMyLnRjYi5xY2xvdWQubGEvV1guanBnP3NpZ249MzgyZjNhYWE2ZTJiYmJiZmQxNzdjMmY0NWRlMTJjZDUmdD0xNTk1NDI5MzQ1XCIsXCJodHRwczovLzc5NzUteXVuLWloZWsyLTEzMDI2OTI5MzIudGNiLnFjbG91ZC5sYS9RUS5qcGc/c2lnbj04ZTUyOWYxNzYyZWNjYjdiYmVhNDJmNjc3NDg0YzRmYSZ0PTE1OTU0MjkzODlcIl1cbiAgICAgIH0pO1xuICAgICAgfVxuICB9XG59KSJdfQ==