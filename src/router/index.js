import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'

import About from '@/components/About'

import Projects from '@/components/Projects'
import All from '@/components/project/All'

import Hobbies from '@/components/Hobbies'
import Contact from '@/components/Contact'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',             name: 'Accueil',    component: Accueil},

    { path: '/about',       name: 'About',      component: About},

    { path: '/projects',    name: 'Projects',   component: Projects},
    { path: '/all',         name: 'All',        component: All},

    { path: '/hobbies',     name: 'Hobbies',    component: Hobbies},

    { path: '/contact',     name: 'Contact',    component: Contact},

  ]
})
