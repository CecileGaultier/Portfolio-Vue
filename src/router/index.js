import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'

import About from '@/components/About'

import Projects from '@/components/Projects'
import All from '@/components/project/All'
import Coppola from '@/components/project/Coppola'
import Incamp from '@/components/project/Incamp'
import MMINotes from '@/components/project/MMINotes'
import PRoom from '@/components/project/PRoom'
import Fly from '@/components/project/Fly'

import Hobbies from '@/components/Hobbies'
import Movie from '@/components/hobbie/Movie'
import Art from '@/components/hobbie/Art'
import Games from '@/components/hobbie/Games'
import Danse from '@/components/hobbie/Danse'
import Travel from '@/components/hobbie/Travel'

import Contact from '@/components/Contact'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',             name: 'Accueil',    component: Accueil},


    { path: '/about',       name: 'About',      component: About},


    { path: '/projects',    name: 'Projects',   component: Projects},
    { path: '/all',         name: 'All',        component: All},
    { path: '/coppola',     name: 'Coppola',    component: Coppola},
    { path: '/incamp',      name: 'Incamp',     component: Incamp},
    { path: '/mminotes',    name: 'MMINotes',   component: MMINotes},
    { path: '/proom',       name: 'PRoom',      component: PRoom},
    { path: '/fly',         name: 'Fly',        component: Fly},


    { path: '/hobbies',     name: 'Hobbies',    component: Hobbies},
    { path: '/movie',       name: 'Movie',      component: Movie},
    { path: '/art',         name: 'Art',        component: Art},
    { path: '/games',       name: 'Games',      component: Games},
    { path: '/danse',       name: 'Danse',      component: Danse},
    { path: '/travel',      name: 'Travel',     component: Travel},

    { path: '/contact',     name: 'Contact',    component: Contact},

  ]
})
