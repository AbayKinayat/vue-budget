<template>
  <PageLoading v-show="!userData" />
  <div v-if="userData">
    <h1 class="section-title">Личный кабинет</h1>
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
</template>

<script>
import UserCard from "@/components/UserCard";
import DateCard from "@/components/DateCard";
import SalaryHistory from "@/components/SalaryHistory";
import CapitalCard from "@/components/CapitalCard";
import PageLoading from "@/components/PageLoading";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { ref as vueref } from "vue";

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

    const userData = vueref(null);

    onValue(userRef, (snapshot) => {
      userData.value = snapshot.val();
    });

    return {
      userData,
    };
  },
};
</script>

<style>
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
</style>