import Vue from 'vue'
import Router from 'vue-router'
import denglu from '@/components/denglu'
import zhuce from '@/components/zhuce'
import index from '@/components/index'
import err from '@/components/err'
import demo from '@/components/demo-vuex'
import mine from '@/components/mine'
import remine from '@/components/remine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/remine',
      name: 'remine',
      component: remine
    },
    {
      path: '*',
      name: 'err',
      component: err
    }
  ]
})
