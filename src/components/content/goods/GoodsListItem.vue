<template>
  <div class="good-list-item">{{goodsItem}}</div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      // type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
</style>