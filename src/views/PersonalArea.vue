<template>
  <PageLoading v-show="!userData" />
  <transition
    enter-active-class="page-enter-active"
    leave-active-class=".page-enter-leave"
  >
    <div v-if="userData && !pageLoading">
      <div class="section-title">
        <span>Личный кабинет</span>
        <router-link :to="{ name: 'Edit User' }">
          <svg
            width="15"
            height="15"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="edit-user"
          >
            <g clip-path="url(#clip0_120:2)">
              <path
                d="M1.64598 7.90652L4.09286 10.3534L10.3483 4.10027L7.89911 1.65105L1.64598 7.90652ZM0.0147324 11.7128C-0.0391739 11.9307 0.0686387 12.0385 0.286608 11.9846L3.54911 10.8971L1.10223 8.45027L0.0147324 11.7128ZM11.4358 0.563547C10.3507 -0.523953 9.26083 0.291672 9.26083 0.291672C9.08271 0.427609 8.44521 1.1073 8.44521 1.1073L10.8921 3.55417C10.8921 3.55417 11.5694 2.91667 11.7077 2.73855C11.7077 2.73855 12.5233 1.65339 11.4358 0.563547Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_120:2">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </router-link>
      </div>

      <div class="personal-area__content">
        <UserCard :user="userData" />
        <div class="personal-area__salary-history_wrapper">
          <DateCard />
          <SalaryHistory />
        </div>
        <div class="personal-area__capital">
          <CapitalCard
            :capital="userData.capital"
            :currentCapital="userData.currentCapital"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import UserCard from "@/components/UserCard";
import DateCard from "@/components/DateCard";
import SalaryHistory from "@/components/SalaryHistory";
import CapitalCard from "@/components/CapitalCard";
import PageLoading from "@/components/PageLoading";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { ref as vueref, onMounted } from "vue";

export default {
  name: "PersonalArea",
  components: {
    UserCard,
    DateCard,
    SalaryHistory,
    CapitalCard,
    PageLoading,
  },
  setup() {
    const auth = getAuth();
    const user = auth.currentUser;
    const db = getDatabase();
    const userRef = ref(db, "users/" + user.uid);

    const pageLoading = vueref(true);
    const userData = vueref(null);

    onValue(userRef, (snapshot) => {
      userData.value = snapshot.val();
    });

    onMounted(() => {
      setTimeout(() => {
        pageLoading.value = false;
      }, 10);
    });

    return {
      userData,
      pageLoading,
    };
  },
};
</script>

<style lang="scss">
.personal-area__content {
  display: flex;
  justify-content: space-between;
  max-width: 990px;
  width: 100%;
}

.personal-area__salary-history_wrapper {
  width: 40%;
}

.personal-area__capital {
  width: 25%;
}

#edit-user {
  cursor: pointer;
  transition: 0.2s;

  margin-left: 10px;

  &:hover {
    transform: scale(1.1);
  }
}
</style>