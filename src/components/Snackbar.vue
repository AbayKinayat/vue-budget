<template>
  <div
    class="snackbar"
    ref="snackbar"
    :class="{
      success: type === 'success',
      error: type === 'error',
      warning: type === 'warning',
      active: isOpen,
    }"
  >
    <div class="snackbar-header">
      <!-- Check -->
      <svg
        v-show="type === 'success'"
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 25.875C20.3345 25.875 25.875 20.3345 25.875 13.5C25.875 6.66548 20.3345 1.125 13.5 1.125C6.66548 1.125 1.125 6.66548 1.125 13.5C1.125 20.3345 6.66548 25.875 13.5 25.875Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.75 14.625L10.125 18L19.125 9"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <!-- Error -->
      <svg
        v-show="type === 'error'"
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_112:6)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.5 6.75C14.2425 6.75 14.85 7.3575 14.85 8.1V13.5C14.85 14.2425 14.2425 14.85 13.5 14.85C12.7575 14.85 12.15 14.2425 12.15 13.5V8.1C12.15 7.3575 12.7575 6.75 13.5 6.75ZM13.4865 0C6.0345 0 0 6.048 0 13.5C0 20.952 6.0345 27 13.4865 27C20.952 27 27 20.952 27 13.5C27 6.048 20.952 0 13.4865 0ZM13.5 24.3C7.533 24.3 2.7 19.467 2.7 13.5C2.7 7.533 7.533 2.7 13.5 2.7C19.467 2.7 24.3 7.533 24.3 13.5C24.3 19.467 19.467 24.3 13.5 24.3ZM14.85 20.25H12.15V17.55H14.85V20.25Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_112:6">
            <rect width="27" height="27" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <!-- Warning -->
      <svg
        v-show="type === 'warning'"
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_112:6)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.5 6.75C14.2425 6.75 14.85 7.3575 14.85 8.1V13.5C14.85 14.2425 14.2425 14.85 13.5 14.85C12.7575 14.85 12.15 14.2425 12.15 13.5V8.1C12.15 7.3575 12.7575 6.75 13.5 6.75ZM13.4865 0C6.0345 0 0 6.048 0 13.5C0 20.952 6.0345 27 13.4865 27C20.952 27 27 20.952 27 13.5C27 6.048 20.952 0 13.4865 0ZM13.5 24.3C7.533 24.3 2.7 19.467 2.7 13.5C2.7 7.533 7.533 2.7 13.5 2.7C19.467 2.7 24.3 7.533 24.3 13.5C24.3 19.467 19.467 24.3 13.5 24.3ZM14.85 20.25H12.15V17.55H14.85V20.25Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_112:6">
            <rect width="27" height="27" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="snackbar-body">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        if (
          value === "success" ||
          value === "error" ||
          value === "warning" ||
          !value
        ) {
          return true;
        }
        console.error(
          "Snackbar component required such types ('success' || 'error' || 'warning')"
        );
      },
    },
    text: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    isOpen(value) {
      console.log("proverka");
      if (value) {
        setTimeout(
          () =>
            this.$store.dispatch("setSnackbar", {
              isOpen: false,
              type: "",
              text: "",
            }),
          3000
        );
      } else {
        this.$refs.snackbar.classList.remove("active");
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.snackbar {
  position: absolute;
  left: 30px;
  bottom: 30px;
  display: flex;
  max-width: 500px;
  width: 100%;
  min-height: 57px;
  transition: 0.2s ease-out;

  border-radius: 9px;
  overflow: hidden;

  visibility: hidden;
  opacity: 0;
  transform: translateY(30px);

  &.active {
    visibility: visible;
    opacity: 1;
    transform: translateY(0px);
  }

  .snackbar-header {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 87px;
    width: 100%;
  }

  .snackbar-body {
    flex: 1;
    font-weight: 500;
    padding: 19px 21px;
  }

  &.success {
    .snackbar-header {
      background-color: $success-snackbar-color-dark;
    }

    .snackbar-body {
      background-color: $success-snackbar-color-light;
    }
  }

  &.error {
    .snackbar-header {
      background-color: $error-snackbar-color-dark;
    }

    .snackbar-body {
      background-color: $error-snackbar-color-light;
    }
  }

  &.warning {
    .snackbar-header {
      background-color: $warning-snackbar-color-dark;
    }

    .snackbar-body {
      background-color: $warning-snackbar-color-light;
    }
  }
}
</style>
