import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/HomePage.vue'),
        meta: {
          requiresAuth: false,
          title: 'Home',
        },
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('pages/AboutPage.vue'),
        meta: {
          requiresAuth: false,
          title: 'About',
        },
      },
      {
        path: 'imprint',
        name: 'Imprint',
        component: () => import('pages/ImprintPage.vue'),
        meta: {
          requiresAuth: false,
          title: 'Imprint',
        },
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: () => import('pages/auth/SignUpPage.vue'),
        meta: {
          requiresAuth: false,
          title: 'SignUp',
        },
      },
      {
        path: 'signin',
        name: 'SignIn',
        component: () => import('pages/auth/SignInPage.vue'),
        meta: {
          requiresAuth: false,
          title: 'SignIn',
        },
      },
      {
        path: 'googlesignin',
        name: 'OAuthGoogleSignIn',
        component: () => import('pages/auth/OauthGoogleSignInPage.vue'),
      },
    ],
  },

  {
    path: '/auth',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      {
        path: 'success',
        name: 'OAuthSuccess',
        component: () => import('pages/auth/OAuthSuccessPage.vue'),
      },
      {
        path: 'failure',
        name: 'OAuthFailure',
        component: () => import('pages/auth/OAuthFailurePage.vue'),
      },
    ],
  },

  {
    path: '/my-account',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      {
        path: 'profile',
        name: 'UserProfile',
        component: () => import('pages/user/UserProfilePage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
