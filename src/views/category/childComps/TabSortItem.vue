<template>
  <div class="sort-item">
    <img :src="product.image" alt />
    <h5>{{product.title}}</h5>
  </div>
</template>

<script>
export default {
  name: "TabSortItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
.sort-item {
  width: 32%;
  margin: 10px 0;
}
.sort-item img {
  width: 65%;
}
</style>