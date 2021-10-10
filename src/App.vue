<template>
  <div class="flex">
    <HeaderSidebar />
    <main class="main">
      <Transaction />
    </main>
  </div>
</template>

<script>
import HeaderSidebar from "@/components/HeaderSidebar";
import Transaction from "@/views/Transaction";
export default {
  components: {
    HeaderSidebar,
    Transaction,
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  color: #fff;
  background-color: $body-color;

  padding: 0 17px;
}

ul {
  list-style: none;
}

button {
  border: none;
  cursor: pointer;
}

.main {
  width: 100%;
  
  padding: 56px 0 0 55px;
}

.flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}
.justify-center {
  justify-content: center;
}
.align-center {
  align-items: center;
}

.section-title {
  font-weight: 600;
  font-size: 30px;

  margin-bottom: 24px;
}
</style>
