import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    [
      {
        id: 1,
        midImg: "/static/images/minChildLF.png",
        bigImg: "/static/images/childLF.png",
        title: "蒙奇·D·路飞(モンキー・D・ルフィ)",
        description: "海贼王，我当定了！",
      },
      {
        id: 2,
        midImg: "/static/images/minRoronoaZoro.png",
        bigImg: "/static/images/RoronoaZoro.png",
        title: "罗罗诺亚·索隆(ロロノア・ゾロ)",
        description:
          "请把那把刀给我吧！我要会连她的份也一起努力的，我要成为世界第一的大剑客，我要让我的名字，响彻天堂！",
      },
      {
        id: 3,
        midImg: "/static/images/minLfWife.png",
        bigImg: "/static/images/lfWife.png",
        title: "波雅·汉库克(ボア・ハンコック)",
        description: "男人?同伴还是敌人都一样!但...他(路飞)除外。",
      },
    ],
  ],
});
