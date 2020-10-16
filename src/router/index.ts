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
import Welcome from '../views/Welcome.vue';
import Projects from '@/views/project/Projects.vue';
import ProjectDetail from '@/views/project/ProjectDetail.vue';
import Activity from '@/views/project/Activity.vue';

const requireAuth = () => (to: any, from: any, next: any) => {
  const accessToken = window.localStorage.getItem('token');
  const needAuth = !accessToken;
  console.log('from:', from, ', to:', to, ', needAuth;', needAuth);
  if (needAuth) {
    console.log('need to login');
    next('/login');
  } else {
    return next();
  }
};

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
      {
        path: 'welcome',
        name: 'welcome',
        component: Welcome,
      },
    ],
  },
  {
    path: '/project',
    component: ProjectFrame,
    beforeEnter: requireAuth(),
    children: [
      {
        path: '',
        name: 'projects-main',
        redirect: 'projects',
      },
      {
        path: 'projects',
        name: 'projects',
        component: Projects,
      },
      {
        path: ':name',
        name: 'project-detail',
        component: ProjectDetail,
      },
      {
        path: 'activity',
        name: 'activity',
        component: Activity,
      },
      {
        path: 'document',
        name: 'project-document',
        redirect: 'document',
      },
      {
        path: 'support',
        name: 'project-support',
        redirect: 'support',
      },
      {
        path: 'setting',
        name: 'setting',
        redirect: 'activity',
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

/*
router.beforeEach((to, from, next) => {
  const accessToken = window.localStorage.getItem('token');
  if (accessToken || to.path === '/login') {
    next();
  } else {
    next('/login');
  }
});
*/
export default router;
