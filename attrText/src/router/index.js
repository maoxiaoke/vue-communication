import Vue from 'vue'
import Router from 'vue-router'
import Ancestor from '@/components/Ancestor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ancestor',
      component: Ancestor
    }
  ]
})
