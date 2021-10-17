<template>
  <div>
    <h1 class="section-title">Бюджет</h1>
    <h4 class="section-title-two">Активные</h4>
    <ul class="flex">
      <div class="card">
        <img
          class="card__image"
          src="../assets/images/card_image.png"
          alt="test"
        />
        <div class="card__body">
          <div class="flex justify-between">
            <span class="card__title"> Ноутбук </span>
            <span class="card__title"> 300 000 </span>
          </div>
          <span class="card__subtitle">Накоплено: 100 000</span>
          <div class="budget__percent_circle">33.3%</div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Budget",
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.card {
  overflow: hidden;
  background-color: $primary-color;
  border-radius: 22px;
  height: 100%;
  box-shadow: 0px 4px 4px #231C43;
}

.card__image {
  max-width: 100%;
  width: 100%;
  height: 164px;
  object-fit: cover;
}

.card__body {
  padding: 15px 20px;
}

.card__title {
  font-weight: 600;
  font-size: 16px;
}

.card__subtitle {
  font-weight: 500;
  font-size: 12px;
  color: $small-color;
}

.budget__percent_circle {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  width: 108px;
  height: 108px;

  margin: 0 auto;
  border: 6px solid $active-color;
  border-radius: 50%;
  margin-top: 25px;
}
</style>