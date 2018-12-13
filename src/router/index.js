import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import siderbar from '@/components/common/siderbar'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/siderbar',
      name: 'siderbar',
      component: siderbar,
      meta: {
        title: '侧边'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '登陆'
      }
    }
    

  ]
})
