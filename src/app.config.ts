export default {
  pages: [
    'pages/index/index',
    'pages/follow/index',
    'pages/mine/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    "selectedColor": "#ee2746",
    // "selectedColor": "#1890ff",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "pages/assets/img/home.png",
        "selectedIconPath": "pages/assets/img/home_selected.png"
      },
      {
        "pagePath": "pages/follow/index",
        "text": "关注",
        "iconPath": "pages/assets/img/follow.png",
        "selectedIconPath": "pages/assets/img/follow_selected.png"
      },
      {
        "pagePath": "pages/mine/index",
        "text": "我的",
        "iconPath": "pages/assets/img/mine.png",
        "selectedIconPath": "pages/assets/img/mine_selected.png"
      },
    ]
  },
}
