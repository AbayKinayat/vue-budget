import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD2XCwOolqHO77ppDDDEnuUxWX5VvR9tcw",
  authDomain: "my-budget-cdca4.firebaseapp.com",
  databaseURL: "https://my-budget-cdca4-default-rtdb.firebaseio.com",
  projectId: "my-budget-cdca4",
  storageBucket: "my-budget-cdca4.appspot.com",
  messagingSenderId: "444335599966",
  appId: "1:444335599966:web:2c71e8d4cf8f3a7731dfcf",
  measurementId: "G-2T5F3NY67P"
};

const appFirebase = initializeApp(
  firebaseConfig
)

getAnalytics(appFirebase);

const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app')
