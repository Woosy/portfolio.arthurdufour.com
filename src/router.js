import Vue from 'vue'
import Router from 'vue-router'
import AppHeader from './layout/AppHeader'
import AppFooter from './layout/AppFooter'

import Index from './views/index.vue'
import VeilleTechnologique from './views/VeilleTechnologique'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        header: AppHeader,
        default: Index,
        footer: AppFooter
      }
    },
    {
      path: '/ppe3',
      name: 'ppe3',
      components: {
        header: AppHeader,
        default: Index,
        footer: AppFooter
      }
    },
    {
      path: '/ppe4',
      name: 'ppe4',
      components: {
        header: AppHeader,
        default: Index,
        footer: AppFooter
      }
    },
    {
      path: '/veille-technologique',
      name: 'veille-technologique',
      components: {
        header: AppHeader,
        default: VeilleTechnologique,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})
