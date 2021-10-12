<template>
  <div>
    <h1 class="section-title">Личный кабинет</h1>
    <div class="personal-area__content">
      <UserCard />
    </div>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard";
export default {
  name: "PersonalArea",
  components: {
    UserCard,
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
</style>