<template>
  <div
    v-if="hour && minute && second"
    class="date-card flex justify-between align-center"
  >
    <div class="date-card__icon-container">
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M21 0C16.8466 0 12.7865 1.23163 9.33303 3.53914C5.8796 5.84665 3.18798 9.1264 1.59854 12.9636C0.0090989 16.8009 -0.406771 21.0233 0.403519 25.0969C1.21381 29.1705 3.21386 32.9123 6.15077 35.8492C9.08767 38.7861 12.8295 40.7862 16.9031 41.5965C20.9767 42.4068 25.1991 41.9909 29.0364 40.4015C32.8736 38.812 36.1534 36.1204 38.4609 32.667C40.7684 29.2135 42 25.1534 42 21C42 15.4305 39.7875 10.089 35.8493 6.15076C31.911 2.21249 26.5696 0 21 0V0ZM21 38.5022C17.5384 38.5022 14.1545 37.4757 11.2763 35.5525C8.3981 33.6294 6.1548 30.8959 4.8301 27.6978C3.5054 24.4997 3.1588 20.9806 3.83412 17.5855C4.50945 14.1904 6.17637 11.0718 8.62409 8.62408C11.0718 6.17636 14.1904 4.50944 17.5855 3.83411C20.9806 3.15879 24.4997 3.50539 27.6978 4.83009C30.8959 6.15479 33.6294 8.39809 35.5525 11.2763C37.4757 14.1545 38.5022 17.5384 38.5022 21C38.4935 25.6392 36.6468 30.0859 33.3663 33.3663C30.0859 36.6468 25.6392 38.4935 21 38.5022Z"
            fill="white"
            class="date-card__icon_color"
          />
          <path
            d="M28.5797 22.7522L23.9203 19.2478L22.7522 18.375V8.74782C22.7522 8.28311 22.5676 7.83744 22.239 7.50884C21.9104 7.18024 21.4647 6.99564 21 6.99564C20.5353 6.99564 20.0896 7.18024 19.761 7.50884C19.4324 7.83744 19.2478 8.28311 19.2478 8.74782V19.2478C19.2491 19.385 19.2668 19.5216 19.3003 19.6547C19.3318 19.7831 19.3803 19.9067 19.4447 20.0222C19.4898 20.1372 19.5541 20.2438 19.635 20.3372C19.635 20.3372 19.635 20.3897 19.6875 20.4028C19.7602 20.4876 19.8416 20.5646 19.9303 20.6325L20.0025 20.685L22.7325 22.7325L26.9325 25.8825C27.2339 26.1123 27.6035 26.2347 27.9825 26.2303C28.3491 26.229 28.7061 26.1126 29.0031 25.8977C29.3002 25.6828 29.5223 25.3801 29.6382 25.0322C29.7542 24.6844 29.7581 24.309 29.6494 23.9588C29.5408 23.6087 29.325 23.3014 29.0325 23.0803L28.5797 22.7522Z"
            fill="white"
            class="date-card__icon_color"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="42" height="42" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="date-card__content">
      <div class="date-card__title">{{ hour }}:{{ minute }}:{{ second }}</div>
      <div class="date-card__subtitle">
        {{ day }} {{ month }} {{ year }} {{ weekDay }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onUnmounted } from "vue";
export default {
  name: "DateCard",
  setup() {
    const currentDate = new Date();
    const hour = ref(currentDate.getHours());
    const minute = ref(currentDate.getMinutes());
    const second = ref(currentDate.getSeconds());
    const year = ref(currentDate.getFullYear());
    const month = ref(currentDate.toLocaleString("default", { month: "long" }));
    const day = ref(currentDate.getDate());
    const timeInterval = setInterval(() => {
      const date = new Date();
      hour.value = date.getHours();
      minute.value = date.getMinutes();
      second.value = date.getSeconds();
      if (hour.value < 10) {
        hour.value = `0${hour.value}`;
      }
      if (minute.value < 10) {
        minute.value = `0${minute.value}`;
      }
      if (second.value < 10) {
        second.value = `0${second.value}`;
      }
    }, 1000);

    onUnmounted(() => {
      clearInterval(timeInterval);
    });

    const weekDay = computed(() => {
      const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четсерг",
        "Пятница",
        "Суббота",
      ];

      return days[currentDate.getDay()];
    });

    return {
      hour,
      minute,
      second,
      year,
      month,
      day,
      weekDay,
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.date-card {
  width: max-content;
  background-color: $primary-color;

  margin-bottom: 22px;
  border-radius: 22px;
  padding: 18px;
}

.date-card__icon-container {
  margin-right: 12px;
}

.date-card__icon_color {
  fill: #fff;
}

.date-card__title {
  font-weight: bold;
  font-size: 20px;

  margin-bottom: 3px;
}

.date-card__subtitle {
  font-size: 12px;
  color: $small-color;
}
</style>