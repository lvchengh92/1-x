import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/components/sign'
import Extension from '@/components/extension'

Vue.use(Router)

export default new Router({
  // mode: 'history', // mode模式
  routes: [
    {
      path: '/',
      redirect: '/extension' // 重定向
    }, {
      path: '/sign',
      name: 'sign',
      component: Sign
    }, {
      path: '/extension',
      name: 'extension',
      component: Extension
    }
  ]
})
