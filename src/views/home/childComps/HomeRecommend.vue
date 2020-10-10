<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
      <h4>{{item.title}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.recommend {
  width: 100%;
  display: flex;
  padding: 15px 0 20px;
  border-bottom: 12px solid #ca6779;
  border-radius: 8px;
}
.recommend div {
  flex: 1;
  text-align: center;
}
.recommend div a img {
  width: 80%;
}
</style>