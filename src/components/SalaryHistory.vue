<template>
  <div>
    <div class="salary-history__title"> История изменения зарплат </div>
    <div class="user-info__item flex justify-between align-center">
      <div class="salary-date">25 Апр 2022 Среда</div>
      <div>1 000 000 тг</div>
    </div>
    <div class="user-info__item flex justify-between align-center">
      <div class="salary-date">25 Апр 2022 Среда</div>
      <div>1 000 000 тг</div>
    </div>
    <div class="user-info__item flex justify-between align-center">
      <div class="salary-date">25 Апр 2022 Среда</div>
      <div>1 000 000 тг</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SalaryHistory",
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.salary-history__title {
  font-size: 16px;
  color: $small-color;

  margin-bottom: 14px;
}

.salary-date {
  font-size: 12px;
}
</style>
