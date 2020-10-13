<template>
  <div class="detail-base-info" v-if="Object.keys(goods).length !==0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount" :style="{backgroundColor:goods.discountBgc}">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <span class="info-services-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index].icon" alt />
        <span>{{goods.services[index].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
.detail-base-info {
  padding: 0 10px;
}
.detail-base-info > div {
  width: 100%;
  margin: 15px 0;
}
.detail-base-info .info-title {
  font-weight: bold;
  line-height: 24px;
}

.detail-base-info .info-price .discount {
  border-radius: 9px;
  padding: 2px 5px;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  position: relative;
  bottom: 6px;
}
.detail-base-info .info-price span {
  margin-right: 5px;
}
.detail-base-info .info-price .new-price {
  font-size: 24px;
  color: #ff6700;
}
.detail-base-info .info-price .old-price {
  font-size: 13px;
}
.detail-base-info .info-other,
.detail-base-info .info-services {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.detail-base-info .info-services .info-services-item img {
  width: 12px;
  height: 12px;
}
</style>