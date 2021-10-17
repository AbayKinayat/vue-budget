<template>
  <div class="user-info">
    <div class="user-card">
      <div>
          <span>{{ user.username }}</span><br />
          <small>{{ user.email }}</small>
      </div>
      <div class="user-card__body">
        <div class="user-card__label">О себе</div>
        <p class="user-card__subtitle">
          {{ user.description || "Нет информации" }}
        </p>
      </div>
    </div>
    <div class="user-info__item flex justify-between align-center">
      <div>Счет</div>
      <div>{{ user.cash }} тг</div>
    </div>
    <div class="user-info__item flex justify-between align-center">
      <div>Зарплата</div>
      <div>{{ user.salary }} тг</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
.user-info {
  width: 31%;
}

.user-card {
  background-color: $primary-color;
  border-radius: 22px;
  overflow: hidden;

  margin-bottom: 8px;
  padding: 20px;
}

.user-card__avatar {
  width: 50px;
  height: 50px;

  margin-right: 12px;
  border-radius: 50%;
}

.user-card__body {
  margin-top: 12px;
}

.user-card__label {
  font-size: 12px;
  color: $small-color;

  margin-bottom: 8px;
}

.user-info__item {
  background: $primary-color;
  border: 1px solid $purple-border-color;
  border-radius: 22px;

  margin-bottom: 8px;
  padding: 20px;
}
</style>