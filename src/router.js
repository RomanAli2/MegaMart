import { createWebHistory, createRouter } from 'vue-router'

import mainSection from './components/mainSection.vue'
import BestDeals from './components/BestDeals.vue'
import TopCatagories from './components/TopCatagories.vue'


const routes = [
  { path: '/', component: mainSection },
  { path: '/best-deals', component: BestDeals }, 
  {path:'/top-catagories',component:TopCatagories},// ✅

]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})