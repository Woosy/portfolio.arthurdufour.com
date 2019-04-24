import Vue from 'vue'
import Router from 'vue-router'
import AppHeader from './layout/AppHeader'
import AppFooter from './layout/AppFooter'

import Index from './views/index.vue'
import Stage1 from './views/Stage1.vue'
import Stage2 from './views/Stage2.vue'
import PPE3 from './views/PPE3.vue'
import PPE4 from './views/PPE4.vue'
import VeilleTechnologique from './views/VeilleTechnologique'
import VeilleJuridique from './views/VeilleJuridique'

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
      path: '/stage1',
      name: 'stage1',
      components: {
        header: AppHeader,
        default: Stage1,
        footer: AppFooter
      }
    },
    {
      path: '/stage2',
      name: 'stage2',
      components: {
        header: AppHeader,
        default: Stage2,
        footer: AppFooter
      }
    },
    {
      path: '/ppe3',
      name: 'ppe3',
      components: {
        header: AppHeader,
        default: PPE3,
        footer: AppFooter
      }
    },
    {
      path: '/ppe4',
      name: 'ppe4',
      components: {
        header: AppHeader,
        default: PPE4,
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
    },
    {
      path: '/veille-juridique',
      name: 'veille-juridique',
      components: {
        header: AppHeader,
        default: VeilleJuridique,
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
