<template>
  <div v-if="totalPages > 0" class="pagination-wrapper">
    <button
      :disabled="!showPreviousLink"
      :class="{ active: showPreviousLink }"
      class="pagination-btn"
      @click="updatePage(currentPage - 1)"
    >
      Prev
    </button>
    <div class="pagination-inner">
      {{ currentPage + 1 }} of {{ totalPages }}
    </div>
    <button
      :disabled="!showNextLink"
      class="pagination-btn"
      :class="{ active: showNextLink }"
      @click="updatePage(currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>

<script>
import { computed, toRefs } from "vue";
export default {
  name: "CustomPagination",
  emits: ["updatePage"],
  props: {
    transactions: {
      type: Array,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    console.log(props);
    const { transactions, currentPage, pageSize } = toRefs(props);
    const updatePage = (pageNumber) => {
      emit("updatePage", pageNumber);
    };

    const totalPages = computed(() =>
      Math.ceil(transactions.value.length / pageSize.value)
    );

    const showPreviousLink = computed(() => currentPage.value !== 0);
    const showNextLink = computed(
      () => currentPage.value !== totalPages.value - 1
    );

    return {
      totalPages,
      showPreviousLink,
      showNextLink,
      updatePage,
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.pagination-wrapper {
  display: flex;
  align-items: center;
}

.pagination-inner {
  margin: 0 10px;
}

.pagination-btn {
  width: max-content;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: all .2s;

  border-radius: 5px;
  padding: 10px 15px;

  &:hover {
    filter: brightness(0.80);
  }
}

.pagination-btn.active {
  background-color: $active-color;
}
</style>