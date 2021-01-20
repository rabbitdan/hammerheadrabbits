import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fb1b4e6a = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _60d96621 = () => interopDefault(import('../pages/art.vue' /* webpackChunkName: "pages/art" */))
const _badb520e = () => interopDefault(import('../pages/development.vue' /* webpackChunkName: "pages/development" */))
const _5e39670b = () => interopDefault(import('../pages/monsters.vue' /* webpackChunkName: "pages/monsters" */))
const _05847dd9 = () => interopDefault(import('../pages/patternrecognition.vue' /* webpackChunkName: "pages/patternrecognition" */))
const _074ceec4 = () => interopDefault(import('../pages/photography/index.vue' /* webpackChunkName: "pages/photography/index" */))
const _2d11c6ec = () => interopDefault(import('../pages/sketchbook/index.vue' /* webpackChunkName: "pages/sketchbook/index" */))
const _62fe8084 = () => interopDefault(import('../pages/unpropaganda.vue' /* webpackChunkName: "pages/unpropaganda" */))
const _23e12489 = () => interopDefault(import('../pages/photography/_id/index.vue' /* webpackChunkName: "pages/photography/_id/index" */))
const _5efae275 = () => interopDefault(import('../pages/sketchbook/_id/index.vue' /* webpackChunkName: "pages/sketchbook/_id/index" */))
const _bbab98e0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _fb1b4e6a,
    name: "about"
  }, {
    path: "/art",
    component: _60d96621,
    name: "art"
  }, {
    path: "/development",
    component: _badb520e,
    name: "development"
  }, {
    path: "/monsters",
    component: _5e39670b,
    name: "monsters"
  }, {
    path: "/patternrecognition",
    component: _05847dd9,
    name: "patternrecognition"
  }, {
    path: "/photography",
    component: _074ceec4,
    name: "photography"
  }, {
    path: "/sketchbook",
    component: _2d11c6ec,
    name: "sketchbook"
  }, {
    path: "/unpropaganda",
    component: _62fe8084,
    name: "unpropaganda"
  }, {
    path: "/photography/:id",
    component: _23e12489,
    name: "photography-id"
  }, {
    path: "/sketchbook/:id",
    component: _5efae275,
    name: "sketchbook-id"
  }, {
    path: "/",
    component: _bbab98e0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
