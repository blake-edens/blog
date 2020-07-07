import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PostsManager from '@/components/PostsManager'
import ShowPost from '@/components/ShowPost'
import Auth from '@okta/okta-vue'

Vue.use(Auth, {
  issuer: 'https://dev-770800.okta.com/oauth2/default',
  client_id: '0oag3bcpdErrjc24p4x6',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
    },
    {
      path: '/posts-manager',
      name: 'PostsManager',
      component: PostsManager,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/post/:id',
      name: 'post',
      component: ShowPost
    },
    {
      path: '*',
      beforeEnter: (to, from, next) => {
        next('/')
      }
    }
  ]
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
