<template>
  <PageLoading v-show="loading" />
  <div v-show="!loading">
    <h1 class="section-title">Редактировать аккаунт</h1>
    <router-link :to="{ name: 'Personal Area' }">
      <BackButton />
    </router-link>
    <div class="user-edit">
      <form @submit.prevent="submit" ref="form">
        <div class="form-group">
          <label for="username">Ваше имя</label>
          <input v-model="user.username" id="username" type="text" />
        </div>
        <div class="form-group">
          <label for="description">О себе</label>
          <input v-model="user.description" id="description" type="text" />
        </div>
        <div class="form-group">
          <label for="salary">Ваша зарплата</label>
          <input v-model="user.salary" id="salary" type="text" />
        </div>
        <div class="form-group">
          <label for="currentCapital">Ваш капитал</label>
          <input
            v-model="user.currentCapital"
            id="currentCapital"
            type="text"
          />
        </div>
        <div class="form-group">
          <label for="capital">Ваш конечный капитал</label>
          <input v-model="user.capital" id="capital" type="text" />
        </div>
        <div class="flex">
          <div class="flex-1"></div>
          <button class="modal-btn ml-auto">СОХРАНИТЬ</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, ref as vueref } from "vue";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, update } from "firebase/database";
import { useStore } from "vuex";
import PageLoading from "@/components/PageLoading";
import BackButton from "@/components/BackButton";

export default {
  name: "User Edit",
  components: {
    PageLoading,
    BackButton,
  },
  setup() {
    const store = useStore();
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const db = getDatabase();
    const userRef = ref(db, "users/" + currentUser.uid);
    const loading = vueref(true);
    const user = reactive({
      username: "",
      description: "",
      salary: "",
      currentCapital: "",
      capital: "",
    });

    onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      user.username = userData.username;
      user.description = userData.description;
      user.salary = userData.salary;
      user.currentCapital = userData.currentCapital;
      user.capital = userData.capital;
      loading.value = false;
    });

    const submit = async () => {
      await update(userRef, user);
      store.dispatch("setSnackbar", {
        isOpen: true,
        type: "success",
        text: "Вы успешно редактировали ваш аккаунт",
      });
    };

    return {
      user,
      loading,
      submit,
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.user-edit {
  max-width: 700px;
  background: $primary-color;
  box-shadow: 0px 4px 4px #231c43;
  border-radius: 22px;
  padding: 40px;
}
</style>