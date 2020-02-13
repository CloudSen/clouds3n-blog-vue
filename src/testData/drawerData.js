// type: 0分组标题 1：父菜单 2：普通菜单
export default [
  {
    id: '1',
    parentId: '-1',
    type: 0,
    name: '主要模块',
    order: 1,
  },
  {
    id: '2',
    parentId: '1',
    type: 2,
    name: '格言',
    routerPath: '/home/motto',
    icon: 'home',
    order: 1,
  },
  {
    id: '3',
    parentId: '1',
    type: 2,
    name: '个人博客',
    routerPath: '/home/blog/articles',
    icon: 'book',
    order: 2,
  },
  {
    id: '4',
    parentId: '1',
    type: 2,
    name: '专题',
    routerPath: '/home/topic',
    icon: 'wb_incandescent',
    order: 3,
  },
  {
    id: '5',
    parentId: '1',
    type: 1,
    name: '我的项目',
    routerPath: '/home/my-project',
    icon: 'work',
    order: 4,
  },
  {
    id: '6',
    parentId: '1',
    type: 2,
    name: '关于',
    routerPath: '/home/about',
    icon: 'info',
    order: 5,
  },
  {
    id: '7',
    parentId: '-1',
    type: 0,
    name: '系统相关',
    order: 2,
  },
  {
    id: '8',
    parentId: '7',
    type: 2,
    name: '时间轴',
    routerPath: '/home/time-line',
    icon: 'timeline',
    order: 1,
  },
  {
    id: '9',
    parentId: '7',
    type: 2,
    name: 'Dashboard',
    routerPath: '/home/dashboard',
    icon: 'dashboard',
    order: 2,
  },
  {
    id: '10',
    parentId: '-1',
    type: 0,
    name: '其他',
    order: 3,
  },
  {
    id: '11',
    parentId: '1',
    type: 2,
    name: '梦想清单',
    routerPath: '/home/dreamer',
    icon: 'check_box',
    order: 6,
  },
  {
    id: '12',
    parentId: '1',
    type: 2,
    name: '生命倒计时',
    routerPath: '/home/deadline',
    icon: 'av_timer',
    order: 7,
  },
  {
    id: '13',
    parentId: '5',
    type: 2,
    name: 'Web终端',
    routerPath: '/home/welcome',
    icon: 'computer',
    order: 1,
  },
  {
    id: '14',
    parentId: '10',
    type: 2,
    name: '友情链接',
    routerPath: '/home/friends',
    icon: 'people',
    order: 1,
  },
  {
    id: '15',
    parentId: '10',
    type: 2,
    name: 'RSS订阅',
    routerPath: '/home/rss',
    icon: 'rss_feed',
    order: 2,
  },
]
