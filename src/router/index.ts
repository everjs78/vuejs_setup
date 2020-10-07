import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import MainFrame from '../views/MainFrame.vue';
import ProjectFrame from '../views/ProjectFrame.vue';
import Home from '../views/Home.vue';
import Document from '../views/Document.vue';
import Support from '../views/Support.vue';
import Pricing from '../views/Pricing.vue';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';
import Projects from '@/views/project/Projects.vue';
import Activity from '@/views/project/Activity.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: MainFrame,
    children: [
      {
        path: '',
        name: 'main',
        component: Home,
      },
      {
        path: 'document',
        name: 'document',
        component: Document,
      },
      {
        path: 'support',
        name: 'support',
        component: Support,
      },
      {
        path: 'pricing',
        name: 'pricing',
        component: Pricing,
      },
      {
        path: 'login',
        name: 'login',
        component: Login,
      },
      {
        path: 'signup',
        name: 'signup',
        component: SignUp,
      },
    ],
  },
  {
    path: '/project',
    component: ProjectFrame,
    children: [
      {
        path: '',
        name: 'project-main',
        component: Projects, // TODO replace Projects
      },
      {
        path: 'projects',
        name: 'projects',
        component: Projects, // TODO replace Projects
      },
      {
        path: 'activity',
        name: 'activity',
        component: Activity, // TODO replace Projects
      },
      {
        path: 'billing',
        name: 'billing',
        component: Activity, // TODO replace Projects
      },
      {
        path: 'project-document',
        name: 'project-document',
        component: Activity, // TODO replace Projects
      },
      {
        path: 'project-support',
        name: 'project-support',
        component: Activity, // TODO replace Projects
      },
      {
        path: 'setting',
        name: 'setting',
        component: Activity, // TODO replace Projects
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
