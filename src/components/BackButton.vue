<template>
  <div class="back-btn">
    <svg
      width="9"
      height="16"
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_125:5)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.68911 0.791986C9.2882 0.399986 8.64183 0.399986 8.24092 0.791986L1.44183 7.43999C1.12274 7.75199 1.12274 8.25599 1.44183 8.56799L8.24092 15.216C8.64183 15.608 9.2882 15.608 9.68911 15.216C10.09 14.824 10.09 14.192 9.68911 13.8L3.76547 7.99999L9.69729 2.19999C10.09 1.81599 10.09 1.17599 9.68911 0.791986Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_125:5">
          <rect width="9" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: "BackButton",
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.back-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 32px;
  cursor: pointer;
  background-color: $active-color;

  border-radius: 50%;
  margin-bottom: 20px;
}
</style>