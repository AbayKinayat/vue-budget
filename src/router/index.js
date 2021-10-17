
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from 'vue-router'
import Transaction from "@/views/Transaction";
import store from "@/store";

const authGuard = function (to, from, next) {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      store.dispatch("userLogged", user.uid);
      next()
    } else {
      next("/login")
    }
  });
}

const routes = [
  {
    path: '/',
    name: 'Transaction',
    component: Transaction,
    beforeEnter: authGuard,
  },
  {
    path: '/budget',
    name: 'Budget',
    component: () => import("@/views/Budget"),
    beforeEnter: authGuard,
  },
  {
    path: '/personal-area',
    name: 'Personal Area',
    component: () => import("@/views/PersonalArea"),
    beforeEnter: authGuard,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginPage"),
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import("@/views/LoginPage")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
