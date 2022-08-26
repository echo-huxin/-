import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "/static/images/lf.gif",
    favicon: "https://s2.loli.net/2022/08/18/roWO1DM8zXYqSBN.png",
    github: "https://github.com/echo-huxin",
    githubName: "echo-huxin",
    icp: "源ICP备1024号",
    id: 1,
    mail: "wb4425883@163.com",
    qq: "1611012508",
    qqQrCode: "/static/images/qqCode.jpg",
    siteTitle: "JS.D.HX",
    weixin: "hustle-hx",
    weixinQrCode: "/static/images/wxCode.jpg",
  },
});
