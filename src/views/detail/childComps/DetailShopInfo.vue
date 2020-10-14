<template>
  <div class="detail-shop-info" v-if="Object.keys(shop).length-1 !==0">
    <div class="shop-top">
      <img :src="shop.logo" alt />
      <h4 class="title">{{shop.name}}</h4>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shop.sells |sellCountFilter }}</div>
          <div>总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td :class="{'score-active':item.isBetter}">{{item.score}}</td>
            <td :class="{'better-active':item.isBetter}">{{item.isBetter? '高':'低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="shop-bottom-info">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    sellCountFilter(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    }
  }
};
</script>

<style>
.detail-shop-info > div {
  margin: 10px 0;
}
.detail-shop-info .shop-top {
  display: flex;
  align-items: center;
}
.detail-shop-info .shop-top img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 10px;
}
.detail-shop-info .shop-middle {
  display: flex;
  align-items: center;
  color: #333;
}
.shop-middle .shop-middle-item {
  width: 50%;
}
.shop-middle .shop-middle-left {
  display: flex;
  text-align: center;
  justify-content: space-around;
  padding: 0 7px;
  font-size: 14px;
}
.shop-middle-left .sells-count,
.shop-middle-left .goods-count {
  margin-bottom: 10px;
}

.shop-middle .shop-middle-right {
  padding: 0 7px;
}
.shop-middle .shop-middle-right table {
  margin: 0 auto;
  font-size: 14px;
}
.shop-middle .shop-middle-right table tr {
  line-height: 24px;
}
.shop-middle-right table tr td:nth-child(2) {
  padding: 0 8px;
  color: #ff6722;
}
.shop-middle-right table tr td:nth-child(3) {
  background-color: #ff6722;
  color: #fff;
  height: 16px;
}
.shop-middle .shop-middle-right table tr .score-active {
  color: #ff1100;
}
.shop-middle .shop-middle-right table tr .better-active {
  background-color: #ff1100;
}
.shop-bottom .shop-bottom-info {
  width: 85px;
  text-align: center;
  margin: 0 auto;
  padding: 5px 10px;
  background-color: #6a6272;
  border-radius: 10px;
  color: #fff;
  font-size: 15px;
  letter-spacing: 1px;
}
</style>