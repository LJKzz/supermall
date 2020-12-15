<template>
  <div class="personal-card">
    <div v-for="(item, index) in product" :key="index" class="item">
      <span class="iconfont" :class="item.icon"></span>
      <div class="info">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCard",
  props: {
    product: {
      type: Array,
      default: []
    }
  }
};
</script>

<style>
.personal-card {
  margin: 10px 0;
  padding: 0 10px;
  border-radius: 10px;
  background-color: #d2b6b6;
}
.personal-card .item {
  height: 44px;
  line-height: 44px;
  color: darkgreen;
  display: flex;
  align-items: center;
}

.item .icon {
  /* margin-top: 10px;
  position: absolute;
  left: 16px;
  top: -7px; */
  display: block;
  border: 1px solid black;
  width: 24px;
  height: 24px;
}

.item .info {
  margin-left: 10px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  padding-left: 5px;
}

.item:last-of-type .info {
  border-bottom: none;
}
</style>