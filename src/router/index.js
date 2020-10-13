import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Shopcar = () => import('../views/shopcar/Shopcar.vue')
const Personal = () => import('../views/personal/Personal.vue')
const Detail = () => import('../views/detail/Detail.vue')

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

function getAbsolutePath() {
  let path = location.pathname
  return path.substring(0, path.lastIndexOf('/') + 1)
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
  },
  {
    path: '/detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: getAbsolutePath()
})

export default router
