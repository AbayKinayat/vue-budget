<template>
  <div class="flex">
    <template v-if="isLoginOrRegisterRoute">
      <router-view></router-view>
    </template>
    <template v-if="!isLoginOrRegisterRoute">
      <HeaderSidebar @showModal="toggleTransactionModal" />
      <main class="main">
        <router-view></router-view>
      </main>
      <addTransactionModal
        @closeModal="toggleTransactionModal"
        :isOpen="addTransactionIsOpen"
      />
    </template>
    <Snackbar
      :text="snackbarText"
      :type="snackbarType"
      :isOpen="snackbarIsOpen"
      @setSnackbar="setSnackbar"
    />
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HeaderSidebar from "@/components/HeaderSidebar";
import addTransactionModal from "@/components/addTransactionModal";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import Snackbar from "@/components/Snackbar";
export default {
  components: {
    HeaderSidebar,
    addTransactionModal,
    Snackbar,
  },
  setup() {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSnackbar(true, "success", "You are successfully logged in");
      }
    });

    const addTransactionIsOpen = ref(false);
    const snackbarIsOpen = ref(false);
    const snackbarType = ref("");
    const snackbarText = ref("");
    const route = useRoute();

    function toggleTransactionModal() {
      addTransactionIsOpen.value = !addTransactionIsOpen.value;
    }

    const isLoginOrRegisterRoute = computed(
      () => route.name === "Login" || route.name === "Registration"
    );

    const setSnackbar = (value, type, text) => {
      snackbarIsOpen.value = value;
      snackbarType.value = type;
      snackbarText.value = text;
    };

    return {
      addTransactionIsOpen,
      isLoginOrRegisterRoute,
      snackbarText,
      snackbarType,
      snackbarIsOpen,
      toggleTransactionModal,
      setSnackbar,
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  cursor: url("./assets/images/cursor2.svg"), auto;
}

body {
  font-family: "Montserrat", sans-serif;
  color: #fff;
  background-color: $body-color;
  overflow: hidden;

  padding-left: 17px;
}

ul {
  list-style: none;
}

button {
  border: none;
  cursor: pointer;
}

.main {
  width: 100%;
  padding: 56px 0 0 55px;
  height: 100vh;
  overflow-y: auto;
  padding-right: 17px;
}

main::-webkit-scrollbar {
  width: 15px;
  height: 10px;
}
main::-webkit-scrollbar-track {
  background-color: $body-color;
}
main::-webkit-scrollbar-thumb {
  background: #fff;
  border: 5px solid $body-color;
}

.flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}
.justify-center {
  justify-content: center;
}
.align-center {
  align-items: center;
}

.section-title {
  font-weight: 600;
  font-size: 30px;

  margin-bottom: 24px;
}

.section-title-two {
  font-size: 15px;
  line-height: 18px;
  color: $small-color;

  margin-bottom: 10px;
}

.max-content {
  width: max-content !important;
}

.flex-1 {
  flex: 1;
}
</style>
