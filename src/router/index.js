import { createRouter, createWebHistory } from 'vue-router'
import Transaction from "@/views/Transaction";

const routes = [
  {
    path: '/',
    name: 'Transaction',
    component: Transaction,
  },
  {
    path: '/budget',
    name: 'Budget',
    component: () => import("@/views/Budget")
  },
  {
    path: '/personal-area',
    name: 'Personal Area',
    component: () => import("@/views/PersonalArea")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
