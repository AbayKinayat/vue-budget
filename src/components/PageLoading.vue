<template>
  <h2 class="animate">Loading</h2>
</template>

<script>
export default {
  name: "PageLoading",
};
</script>

<style>
@keyframes load {
  0% {
    opacity: 0.08;
    /*         font-size: 10px; */
    /* 				font-weight: 400; */
    filter: blur(5px);
    letter-spacing: 3px;
  }
  100% {
    /*         opacity: 1; */
    /*         font-size: 12px; */
    /* 				font-weight:600; */
    /* 				filter: blur(0); */
  }
}

.animate {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: auto;
  font-family: Helvetica, sans-serif, Arial;
  animation: load 1.2s infinite 0s ease-in-out;
  animation-direction: alternate;
  text-shadow: 0 0 1px white;
}
</style>