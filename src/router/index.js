import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Shopcar = () => import('../views/shopcar/Shopcar.vue')
const Personal = () => import('../views/personal/Personal.vue')

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [{
    path: "/",
    component: Home
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcar',
    component: Shopcar
  }, {
    path: '/personal',
    component: Personal
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
