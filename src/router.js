import { createWebHistory, createRouter } from 'vue-router'

import mainSection from './mainSection.vue'
import BestDeals from './BestDeals.vue'
import TopCatagories from './TopCatagories.vue'


const routes = [
  { path: '/', component: mainSection },
  { path: '/best-deals', component: BestDeals }, 
  {path:'/top-catagories',component:TopCatagories},// ✅

]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})