module.exports = {
  title: 'Captain的博客',
  description: '这里是captain的个人博客，主要记录自己的编程经验，欢迎大家交流分享',
  theme: 'reco',
  logo:"/满穗.png",
  autoAvatar:"/满穗.png",
  type: 'blog',
  author: 'captain',
  base: '/blogs/',
  head: [
    [
      'link',{ rel: 'icon', href: '/captain.jpg'}
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "友情链接",
        items: [
          { text: "VuePress教程", link: "https://juejin.cn/post/7189073364365869093" }
        ]
      },
      {icon: 'reco-github',text: "我的Github", link: "https://github.com/captain798"},
      {icon: 'reco-email', text: "我的邮箱", link: "mailto:2838651487@qq.com"},
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
    ['vuepress-plugin-comment', {
      choosen: 'valine',
      options: {
        appId: 'FJkvm85H3Is8484DfggJQ1s5-gzGzoHsz',
        appKey: 'WUhg1yRcnyH9LbznTDju5xhe',
        showComment: true,
        visitor: true,
        isShowComments: true,
        placeholder: '💬 欢迎留下你的宝贵评论或建议~',
        hide: ['link'], // 隐藏不需要的字段
        requiredFields: ['mail'], // 强制要求填写邮箱
        highlight: true,
        recordIP: false
      }
    }]
  ]
}

