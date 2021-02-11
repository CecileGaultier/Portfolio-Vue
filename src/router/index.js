import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'

import About from '@/components/About'
import Projects from '@/components/Projects'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',             name: 'Accueil',    component: Accueil},

    { path: '/about',       name: 'About',      component: About},

    { path: '/projects',    name: 'Projects',   component: Projects},

  ]
})
