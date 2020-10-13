<template>
  <div class="details-shop-info" v-if="Object.keys(shop).length-1 !==0">
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
.details-shop-info {
  padding: 30px 10px;
}
.details-shop-info .shop-top {
  display: flex;
  align-items: center;
}
.details-shop-info .shop-top img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 10px;
}
.details-shop-info .shop-middle {
  display: flex;
  align-items: center;
  margin: 20px 0;
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
</style>