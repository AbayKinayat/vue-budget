<template>
  <div class="auth">
    <div class="auth-modal">
      <div class="auth-modal__left">
        <div class="auth-modal__title">{{ authModalTitle }}</div>
        <div class="auth-modal__subtitle">
          {{ authModalSubtitle }}
        </div>
        <form @submit.prevent="submit" ref="form">
          <div class="form-group circle">
            <label for="email">Ваш email</label>
            <input v-model="user.email" id="email" type="text" />
          </div>
          <div class="form-group circle">
            <label for="password">Ваш пароль</label>
            <input v-model="user.password" id="password" type="password" />
          </div>
          <div class="flex">
            <div class="flex-1"></div>
            <button :disabled="loading" class="auth-modal-btn ml-auto">
              <span v-show="!loading">{{ authModalTitle }}</span>
              <Loading v-show="loading" :scale="0.6" :height="'14px'" />
            </button>
          </div>
          <div class="auth-modal__text">
            {{ authModalTextFirst }}
            <router-link class="auth-modal__link" :to="{ name: routeName }">{{
              authModalTextLast
            }}</router-link>
          </div>
        </form>
        <div>
          <svg
            id="svg8"
            version="1.1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="logo-icon"
          >
            <g
              id="g2090"
              transform="matrix(3.8637 0 0 3.7996 -41.156 -1064.2)"
              shape-rendering="auto"
              stroke-width=".26099"
            >
              <path
                id="path1837"
                transform="matrix(.25882 0 0 .26318 .2995 290.61)"
                d="m51.998-38.551-0.33203 0.28125s-4.0586 3.3816-4.0586 7.7773c-3e-6 0.70644 0.0659 1.5946 0.16016 2.502l-0.12305 0.07422-2.7695 1.6836v2.9609h4.6777v1.8633h0.65625c-0.09072 0.3268-0.14258 0.67886-0.14258 1.0527 0 1.6321 1.6387 2.6953 1.6387 2.6953l0.29297 0.21484 0.30273-0.21484s1.6367-1.0633 1.6367-2.6953c0-0.37387-0.05371-0.72593-0.14648-1.0527h0.65234v-1.9082h0.67188v0.0078h4.0078v-2.9238l-2.7695-1.6836-0.12305-0.07422c0.09425-0.90733 0.16016-1.7955 0.16016-2.502 4e-6 -4.3957-4.0605-7.7773-4.0605-7.7773zm-0.50586 5.5273h1.0117v0.76563h1.2539v0.99414h-2.5059v0.75781h2.5059v2.7441h-1.2539v0.76562h-1.0117v-0.76562h-1.252v-0.99414h2.5137v-0.76367h-2.5137v-2.7383h1.252v-0.26758zm4.6172 6.1191 2.0098 1.2285v1.373h-2.5508c0.22912-0.71393 0.40024-1.6012 0.53516-2.5449 0.0027-0.01888 0.0032-0.03773 0.0059-0.05664zm-8.2227 0.0059c0.0024 0.01697 0.0034 0.03383 0.0059 0.05078 0.1371 0.95895 0.31012 1.8624 0.54492 2.582h-2.5508v-1.4102zm2.6777 3.582h2.8672v0.92188h-2.8672z"
                color-rendering="auto"
                dominant-baseline="auto"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="
                  font-feature-settings: normal;
                  font-variant-alternates: normal;
                  font-variant-caps: normal;
                  font-variant-east-asian: normal;
                  font-variant-ligatures: normal;
                  font-variant-numeric: normal;
                  font-variant-position: normal;
                  font-variation-settings: normal;
                  inline-size: 0;
                  isolation: auto;
                  mix-blend-mode: normal;
                  paint-order: fill markers stroke;
                  shape-margin: 0;
                  shape-padding: 0;
                  text-decoration-color: #000000;
                  text-decoration-line: none;
                  text-decoration-style: solid;
                  text-indent: 0;
                  text-orientation: mixed;
                  text-transform: none;
                  white-space: normal;
                "
              />
              <path
                id="path2016"
                d="m11.775 284.83v0.79101h0.26172v-0.79101z"
                class="logo-color"
                color-rendering="auto"
                dominant-baseline="auto"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="
                  font-feature-settings: normal;
                  font-variant-alternates: normal;
                  font-variant-caps: normal;
                  font-variant-east-asian: normal;
                  font-variant-ligatures: normal;
                  font-variant-numeric: normal;
                  font-variant-position: normal;
                  font-variation-settings: normal;
                  inline-size: 0;
                  isolation: auto;
                  mix-blend-mode: normal;
                  shape-margin: 0;
                  shape-padding: 0;
                  text-decoration-color: #000000;
                  text-decoration-line: none;
                  text-decoration-style: solid;
                  text-indent: 0;
                  text-orientation: mixed;
                  text-transform: none;
                  white-space: normal;
                "
              />
              <path
                id="path2018"
                d="m12.438 284.83v0.79101h0.25977v-0.79101z"
                class="logo-color-2"
                color-rendering="auto"
                dominant-baseline="auto"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="
                  font-feature-settings: normal;
                  font-variant-alternates: normal;
                  font-variant-caps: normal;
                  font-variant-east-asian: normal;
                  font-variant-ligatures: normal;
                  font-variant-numeric: normal;
                  font-variant-position: normal;
                  font-variation-settings: normal;
                  inline-size: 0;
                  isolation: auto;
                  mix-blend-mode: normal;
                  shape-margin: 0;
                  shape-padding: 0;
                  text-decoration-color: #000000;
                  text-decoration-line: none;
                  text-decoration-style: solid;
                  text-indent: 0;
                  text-orientation: mixed;
                  text-transform: none;
                  white-space: normal;
                "
              />
              <path
                id="path2024"
                d="m14.818 284.83v0.79101h0.26172v-0.79101z"
                class="logo-color-2"
                color-rendering="auto"
                dominant-baseline="auto"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="
                  font-feature-settings: normal;
                  font-variant-alternates: normal;
                  font-variant-caps: normal;
                  font-variant-east-asian: normal;
                  font-variant-ligatures: normal;
                  font-variant-numeric: normal;
                  font-variant-position: normal;
                  font-variation-settings: normal;
                  inline-size: 0;
                  isolation: auto;
                  mix-blend-mode: normal;
                  shape-margin: 0;
                  shape-padding: 0;
                  text-decoration-color: #000000;
                  text-decoration-line: none;
                  text-decoration-style: solid;
                  text-indent: 0;
                  text-orientation: mixed;
                  text-transform: none;
                  white-space: normal;
                "
              />
              <path
                id="path2026"
                d="m15.48 284.83v0.79101h0.25976v-0.79101z"
                class="logo-color"
                color-rendering="auto"
                dominant-baseline="auto"
                image-rendering="auto"
                solid-color="#000000"
                stop-color="#000000"
                style="
                  font-feature-settings: normal;
                  font-variant-alternates: normal;
                  font-variant-caps: normal;
                  font-variant-east-asian: normal;
                  font-variant-ligatures: normal;
                  font-variant-numeric: normal;
                  font-variant-position: normal;
                  font-variation-settings: normal;
                  inline-size: 0;
                  isolation: auto;
                  mix-blend-mode: normal;
                  shape-margin: 0;
                  shape-padding: 0;
                  text-decoration-color: #000000;
                  text-decoration-line: none;
                  text-decoration-style: solid;
                  text-indent: 0;
                  text-orientation: mixed;
                  text-transform: none;
                  white-space: normal;
                "
              />
            </g>
          </svg>
        </div>
      </div>
      <div class="auth-modal__right">
        <div class="auth-modal__right-text">
          Сайт My Budget создан для того что бы следить за своим доходом и
          расходом. Вы удивитесь узнав сколько и куда вы тратите деньги. Сайт
          абсолютно бесплатный.
        </div>
        <div class="auth-modal__right-text">
          Это компьютерная версия My Budget. Если вы зарегистрировались на
          мобильной верссии, то вы можете войти на аккаунт с этого сайта. Данные
          синхронизированы.
        </div>
        <div class="auth-modal__right-text">
          Вдохновитель: Закарин Адиль. Разработчик: Кинаят Абай.
        </div>
        <div class="author-card">
          <div class="flex justify-between align-center">
            <img
              class="author-card__avatar"
              src="../assets/images/author.jpg"
              alt="Author avatar Kinayat Abay"
            />
            <div class="author-card__titles">
              <div class="author-card__name">Кинаят Абай</div>
              <div class="author-card__profession">
                Фронтенд веб разработчик
              </div>
            </div>
          </div>
          <p class="author-card__description">
            Автор сайта My Budget компьютерной версии
          </p>
        </div>
      </div>
      <svg
        id="svg8"
        version="1.1"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="big-logo"
      >
        <g
          id="g2090"
          transform="matrix(3.8637 0 0 3.7996 -41.156 -1064.2)"
          shape-rendering="auto"
          stroke-width=".26099"
        >
          <path
            id="path1837"
            transform="matrix(.25882 0 0 .26318 .2995 290.61)"
            d="m51.998-38.551-0.33203 0.28125s-4.0586 3.3816-4.0586 7.7773c-3e-6 0.70644 0.0659 1.5946 0.16016 2.502l-0.12305 0.07422-2.7695 1.6836v2.9609h4.6777v1.8633h0.65625c-0.09072 0.3268-0.14258 0.67886-0.14258 1.0527 0 1.6321 1.6387 2.6953 1.6387 2.6953l0.29297 0.21484 0.30273-0.21484s1.6367-1.0633 1.6367-2.6953c0-0.37387-0.05371-0.72593-0.14648-1.0527h0.65234v-1.9082h0.67188v0.0078h4.0078v-2.9238l-2.7695-1.6836-0.12305-0.07422c0.09425-0.90733 0.16016-1.7955 0.16016-2.502 4e-6 -4.3957-4.0605-7.7773-4.0605-7.7773zm-0.50586 5.5273h1.0117v0.76563h1.2539v0.99414h-2.5059v0.75781h2.5059v2.7441h-1.2539v0.76562h-1.0117v-0.76562h-1.252v-0.99414h2.5137v-0.76367h-2.5137v-2.7383h1.252v-0.26758zm4.6172 6.1191 2.0098 1.2285v1.373h-2.5508c0.22912-0.71393 0.40024-1.6012 0.53516-2.5449 0.0027-0.01888 0.0032-0.03773 0.0059-0.05664zm-8.2227 0.0059c0.0024 0.01697 0.0034 0.03383 0.0059 0.05078 0.1371 0.95895 0.31012 1.8624 0.54492 2.582h-2.5508v-1.4102zm2.6777 3.582h2.8672v0.92188h-2.8672z"
            color-rendering="auto"
            dominant-baseline="auto"
            image-rendering="auto"
            solid-color="#000000"
            stop-color="#000000"
            style="
              font-feature-settings: normal;
              font-variant-alternates: normal;
              font-variant-caps: normal;
              font-variant-east-asian: normal;
              font-variant-ligatures: normal;
              font-variant-numeric: normal;
              font-variant-position: normal;
              font-variation-settings: normal;
              inline-size: 0;
              isolation: auto;
              mix-blend-mode: normal;
              paint-order: fill markers stroke;
              shape-margin: 0;
              shape-padding: 0;
              text-decoration-color: #000000;
              text-decoration-line: none;
              text-decoration-style: solid;
              text-indent: 0;
              text-orientation: mixed;
              text-transform: none;
              white-space: normal;
            "
          />
        </g>
      </svg>
      <div class="auth-modal__logo-container">My Budget</div>
    </div>
    <Snackbar
      @setSnackbar="setSnackbar"
      :isOpen="snackbarIsOpen"
      :type="snackbarType"
      :text="snackbarText"
    />
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import Loading from "@/components/Loading";
import Snackbar from "@/components/Snackbar";

export default {
  name: "LoginPage",
  components: {
    Loading,
    Snackbar,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const snackbarIsOpen = ref(false);
    const snackbarText = ref("");
    const snackbarType = ref("");

    const user = reactive({
      email: "",
      password: "",
    });

    const authModalTitle = computed(() =>
      route.name === "Login"
        ? "Войти"
        : route.name === "Registration" && "Регистрация"
    );

    const authModalSubtitle = computed(() =>
      route.name === "Login"
        ? "Не желайте и не надейтесь. Намеревайтесь."
        : "Сделайте первый шаг к вашей финансовой безопасности"
    );

    const authModalTextFirst = computed(() =>
      route.name === "Login" ? "Не зарегистрированы?" : "Уже есть аккаунт?"
    );

    const authModalTextLast = computed(() =>
      route.name === "Login" ? "Создайте аккаунт" : "Войдите в аккаунт"
    );

    const routeName = computed(() =>
      route.name === "Login" ? "Registration" : "Login"
    );

    const loading = computed(() => store.getters.loading);
    const error = computed(() => store.getters.error);

    const submit = async () => {
      if (user.email && user.password) {
        if (route.name === "Registration") {
          await store.dispatch("registration", user);
          if (!error.value) {
            router.push({ name: "Transaction" });
            setSnackbar(false, "", "");
          } else {
            if (/weak-password/i.test(error.value)) {
              setSnackbar(true, "error", "Пароль не должен быть меньше 6 символов");
              return;
            }
            if (/email-already-in-use/i.test(error.value)) {
              setSnackbar(true, "error", "Аккаунт с таким email существует");
            }
            if (/invalid-email/i.test(error.value)) {
              setSnackbar(true, "error", "Неправильный email");
            }
          }
        } else {
          await store.dispatch("signIn", user);
          if (!error.value) {
            router.push({ name: "Transaction" });
            setSnackbar(false, "", "");
          } else {
            setSnackbar(true, "error", "Не правильный email или пароль");
          }
        }
      }
    };

    const setSnackbar = (value, type, text) => {
      snackbarIsOpen.value = value;
      snackbarText.value = text;
      snackbarType.value = type;
    };

    return {
      user,
      authModalTitle,
      authModalSubtitle,
      authModalTextFirst,
      authModalTextLast,
      routeName,
      snackbarIsOpen,
      error,
      loading,
      snackbarText,
      snackbarType,
      submit,
      setSnackbar,
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
}

.auth-modal {
  position: relative;
  display: flex;
  max-width: 985px;
  width: 100%;
  min-height: 647px;
  overflow: hidden;

  background-color: $primary-color;
  box-shadow: 0px 4px 4px #231c43;
  border-radius: 22px;
}

.auth-modal__left {
  width: 50%;
  padding: 100px 89px;
}

.auth-modal__title {
  font-weight: 600;
  font-size: 25px;

  margin-bottom: 5px;
}

.auth-modal__subtitle {
  font-weight: 500;
  font-size: 14px;
  color: $auth-text-color;

  margin-bottom: 28px;
}

.auth-modal__text {
  font-weight: 500;
  font-size: 12px;
  color: $auth-text-color;

  margin-top: 17px;
}

.auth-modal__link {
  color: $active-color;
}

.auth-modal__right {
  width: 50%;
  background-color: $auth-background-color;

  padding: 175px 92px 70px 49px;
}

.auth-modal__right-text {
  font-weight: 500;
  font-size: 14px;
  color: $auth-text-color;

  margin-bottom: 20px;
}

.author-card {
  max-width: 256px;
  background-color: $primary-color;
  box-shadow: 0px 4px 4px rgba(17, 14, 33, 0.25);
  border-radius: 28px;
  padding: 18px;
}

.author-card__avatar {
  width: 52px;
  height: 52px;
  object-fit: cover;

  border-radius: 50%;
}

.author-card__name {
  font-weight: 500;
  font-size: 14px;
}

.author-card__profession {
  font-weight: 500;
  font-size: 10px;
  color: $auth-text-color;
}

.author-card__description {
  font-weight: 500;
  font-size: 10px;
  margin-top: 3px;
}

.auth-modal__logo-container {
  position: absolute;
  top: 22px;
  right: 22px;
  font-weight: bold;
  font-size: 10px;
  color: $auth-text-color;
  text-transform: uppercase;

  background-color: $primary-color;
  border-radius: 23px;
  padding: 7px 18px;
}

.logo-icon {
  position: absolute;
  animation-name: logo;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  top: 100px;
  left: 40px;
  width: 41px;
  height: 41px;
  fill: $auth-text-color;
}

.logo-color {
  fill: $auth-text-color;

  animation-name: firstfire;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}

.logo-color-2 {
  fill: $auth-text-color;

  animation-name: firstfire2;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}

.big-logo {
  width: 383px;
  height: 383px;

  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%) rotate(-20deg);
  fill: $primary-color;
}

.big-logo-shadow {
  box-shadow: 0px 5px 4px rgba(34, 29, 56, 0.25) !important;
}

.auth-modal-btn {
  width: 100%;
  color: #fff;
  background-color: $active-color;

  border-radius: 25px;
  padding: 15px 0;

  &:hover {
    filter: brightness(0.95);
  }
}

@keyframes logo {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(10px);
  }
}

@keyframes firstfire {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(0.8px);
  }
}
@keyframes firstfire2 {
  from {
    transform: translateY(0.8px);
  }
  to {
    transform: translateY(0px);
  }
}
</style>