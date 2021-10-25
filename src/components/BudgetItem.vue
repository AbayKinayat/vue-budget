<template>
  <div class="card">
    <div class="card__body">
      <div class="card__body-head flex justify-between align-center">
        <div>
          <span class="card__title"> {{ budget.goal_title }} </span><br />
          <span class="card__title"> {{ budget.goal_cash }} </span>
        </div>
        <div @click="helpIsOpen = !helpIsOpen" class="help">
          <svg
            width="3"
            height="15"
            viewBox="0 0 3 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="3" height="3" rx="1.5" fill="white" />
            <rect y="6" width="3" height="3" rx="1.5" fill="white" />
            <rect y="12" width="3" height="3" rx="1.5" fill="white" />
          </svg>
        </div>
        <div class="help-action" :class="{ active: helpIsOpen }">
          <div
            @click="$emit('editBudget', budget.uid)"
            class="help-action__item"
          >
            Изменить
          </div>
          <div class="help-action__item">Удалить</div>
        </div>
      </div>
      <span class="card__subtitle">Накоплено: {{ budget.current_cash }}</span>
      <div class="percent-box">
        <div class="percent">
          <svg>
            <circle cx="50" cy="50" r="50"></circle>
            <circle ref="circle" cx="50" cy="50" r="50"></circle>
          </svg>
          <div class="budget__percent_circle">
            {{ budgetCurrentCashPercent }}%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, toRefs, ref, onMounted, onBeforeUnmount, watch } from "vue";
export default {
  name: "BudgetItem",
  emits: ["editBudget"],
  props: {
    budget: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const circle = ref(null);
    const helpIsOpen = ref(false);
    const { budget } = toRefs(props);
    const budgetCurrentCashPercent = computed(() => {
      const result = (100 * budget.value.current_cash) / budget.value.goal_cash;
      if (result) {
        return result.toFixed(1);
      }
      return 0;
    });

    const closeHelp = (event) => {
      if (
        event.target.tagName !== "svg" &&
        event.target.tagName !== "rect" &&
        event.target.className !== "help"
      ) {
        helpIsOpen.value = false;
      }
    };

    onMounted(() => {
      changeCircleCurrentCashResult(budgetCurrentCashPercent.value);
      document.addEventListener("click", closeHelp);
    });

    watch(budgetCurrentCashPercent, () => {
      changeCircleCurrentCashResult(budgetCurrentCashPercent.value);
    })

    onBeforeUnmount(() => {
      document.removeEventListener("click", closeHelp);
    });

    const changeCircleCurrentCashResult = (value) => {
      console.log("value", circle.value);
      circle.value.style[
        "stroke-dashoffset"
      ] = `calc(470 - (470 * ${value}) / 100)`;
    };

    return {
      budgetCurrentCashPercent,
      circle,
      helpIsOpen,
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.percent {
  position: relative;
  width: 120px;
  height: 120px;

  margin: 0 auto;
  margin-top: 20px;

  svg {
    position: relative;
    width: 120px;
    height: 120px;
    transform: rotateZ(-85deg);
    top: -5px;

    circle {
      width: 120px;
      height: 120px;
      fill: none;
      stroke-width: 10;
      stroke: #000;
      transform: translate(5px, 5px);
      stroke-width: 7;
      stroke-dasharray: 440;
      stroke-dashoffset: 440;
      stroke-linecap: round;
    }

    circle:nth-child(1) {
      stroke-dashoffset: 0;
      stroke: #f3f3f3;
    }

    circle:nth-child(2) {
      stroke-dashoffset: calc(440 - (440 * 0) / 100);
      stroke: #03a9f4;
      transition: 3s;
    }
  }
}

.help {
  display: flex;
  justify-content: center;
  width: 20px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
}

.help-action {
  position: absolute;
  top: 50px;
  right: 0px;
  transform: translateX(30px) translateY(-50px) scale(0);
  transition: 0.2s ease;

  visibility: hidden;
  opacity: 0;

  overflow: hidden;

  background-color: $primary-color;
  box-shadow: 0px 3px 1px rgba(35, 28, 67, 0.5);
  border-radius: 4px;
  padding: 5px 0;

  &.active {
    visibility: visible;
    opacity: 1;
    width: 150px;
    transform: translateX(80%) translateY(0) scale(1);
  }
}

.help-action__item {
  cursor: pointer;
  background-color: $primary-color;
  transition: 0.2s;

  padding: 8px 6px;

  &:hover {
    background-color: $icon-color;
  }
}
</style>