<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item,index) in title"
      :key="index"
      :class="{active:index===currentIndex}"
    >
      <span @click="current(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    current(index) {
      this.currentIndex = index;
      this.$emit('tabControlClick',index)
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  background-color: #fff;
}
.tab-control .tab-control-item {
  flex: 1;
}
.tab-control .tab-control-item span {
  padding: 3px;
}
.tab-control .active {
  color: var(--color-hight-text);
}
.tab-control .active > span {
  border-bottom: 2px solid var(--color-tint);
}
</style>