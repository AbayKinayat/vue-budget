<template>
  <div class="flex">
    <HeaderSidebar @showModal="toggleTransactionModal" />
    <main class="main">
      <Transaction />
    </main>
    <addTransactionModal @closeModal="toggleTransactionModal" :isOpen="addTransactionIsOpen" />
  </div>
</template>

<script>
import HeaderSidebar from "@/components/HeaderSidebar";
import Transaction from "@/views/Transaction";
import addTransactionModal from "@/components/addTransactionModal";
import { ref } from "vue";
export default {
  components: {
    HeaderSidebar,
    Transaction,
    addTransactionModal,
  },
  setup() {
    const addTransactionIsOpen = ref(false);

    function toggleTransactionModal() {
      addTransactionIsOpen.value = !addTransactionIsOpen.value;
    }

    return {
      addTransactionIsOpen,
      toggleTransactionModal,
    };
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
  overflow: hidden;

  padding-left: 17px;
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
  height: 100vh;
  overflow-y: auto;
  padding-right: 17px;
}

main::-webkit-scrollbar {
  width: 15px;
  height: 10px;
}
main::-webkit-scrollbar-track {
  background-color: $body-color;
}
main::-webkit-scrollbar-thumb {
  background: #fff;
  border: 5px solid $body-color;
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

.max-content {
  width: max-content !important;
}

.flex-1 {
  flex: 1;
}
</style>
