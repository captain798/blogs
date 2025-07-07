module.exports = {
  title: 'Captain SNE',
  description: 'Captain SNE的博客',
  theme: 'reco',
  logo:"/满穗.png",
  authorAvatar:"/满穗.png",
  type: 'blog',
  author: 'captain',
  base: '/blogs/',
  head: [
    [
      'link',{ rel: 'icon', href: '/captain.jpg'}
    ],
    ['meta', { name: 'keywords', content: '编程,博客,VuePress' }],
    ['meta', { name: 'description', content: 'Captain SNE的博客' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: "首页", link: "/" }, 
      {
        text: "github项目",
        items: [
          { text: "项目1", link: "https://github.com/captain798/SmartShuttle" },
          { text: "项目2", link: "https://github.com/captain798/xhs_spider" }
        ]
      },
      {
        text: "联系我",
        items: [
          {icon: 'reco-github',text: "我的Github", link: "https://github.com/captain798"},
          {icon: 'reco-email', text: "我的邮箱", link: "mailto:2838651487@qq.com"},
        ]
      },
      {
        text: "友情链接",
        items: [
          { text: "VuePress教程", link: "https://juejin.cn/post/7189073364365869093" }
        ]
      },
    ],
    subSidebar: 'auto', 
    blogConfig: {
      category: {
        location: 2,
        text: '博客分类'
      },
      tag: {
        location: 3,
        text: '博客标签'
      }
    },
    logo: '/captain.jpg',
  },
  plugins: [
    ["sakura",
    {
      num: 20,
      show: true,
      zIndex: -1,
      img: {
        replace:false,
      }
    }],
  ],
}

