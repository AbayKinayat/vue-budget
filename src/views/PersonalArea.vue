<template>
  <div>
    <h1 class="section-title">Личный кабинет</h1>
    <div class="personal-area__content">
      <UserCard />
      <div class="personal-area__salary-history_wrapper">
        <DateCard />
        <SalaryHistory />
      </div>
      <div class="personal-area__capital">
        <CapitalCard />
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard";
import DateCard from "@/components/DateCard";
import SalaryHistory from "@/components/SalaryHistory";
import CapitalCard from "@/components/CapitalCard";
export default {
  name: "PersonalArea",
  components: {
    UserCard,
    DateCard,
    SalaryHistory,
    CapitalCard,
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