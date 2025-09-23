module.exports = {
  title: 'captain798',
  description: '记录分享学习笔记和经验感悟',
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
    ['meta', { name: 'keywords', content: '编程,算法,csp,博客,VuePress' }],
    ['meta', { name: 'description', content: 'Captain798' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: "首页", link: "/" }, 
      {
        text: "Github项目",
        items: [
          { text: "微信小程序智约班车", link: "https://github.com/captain798/SmartShuttle" },
          { text: "Scrapy爬虫小红书", link: "https://github.com/captain798/xhs_spider" },
          { text: "InkSoul心灵墨迹", link: "https://github.com/c0ffee-milk/Inksoul"},
        ]
      },
      {
        text: "Contact",
        items: [
          {icon: 'reco-github',text: "github", link: "https://github.com/captain798"},
          {icon: 'reco-email', text: "email", link: "mailto:2838651487@qq.com"},
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
        text: 'Category'
      },
      tag: {
        location: 3,
        text: 'Tag'
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
    ["vuepress-plugin-sitemap",
      {
        hostname: 'https://captain798.github.io/blogs'
      }
    ],
  ],
}

