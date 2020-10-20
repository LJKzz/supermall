<template>
  <div class="sort">
    <tab-sort-item v-for="(item,index) in sorts" :key="index" :product="item" />
  </div>
</template>

<script>
import TabSortItem from "./TabSortItem";
export default {
  name: "TabMenuSort",
  props: {
    sorts: {
      type: Array,
      default: []
    }
  },
  components: {
    TabSortItem
  }
};
</script>

<style>
.sort {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  align-content: flex-start;
}
</style>