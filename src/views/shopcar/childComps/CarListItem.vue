<template>
  <div class="car-list-item">
    <div class="item-shop-info">
      <!-- <check-button /> -->
      <div class="logo">
        <img :src="itemInfo.shopLogo" alt />
      </div>
      <div class="name">{{itemInfo.shopName}}</div>
    </div>
    <div class="item-good-info">
      <check-button :isChecked="itemInfo.check" @click.native="checkClick" />
      <div class="good-info-img">
        <img :src="itemInfo.image" alt />
      </div>
      <div class="good-info">
        <div class="info-text">{{itemInfo.title}}</div>
        <div class="info-style">
          <span>{{itemInfo.color}}</span>
          <span>;{{itemInfo.size}}</span>
        </div>
        <div class="info-price left">￥{{itemInfo.price*itemInfo.num}}</div>
        <div class="info-num right">×{{itemInfo.num}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CarListItem",
  components: {
    CheckButton
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    checkClick() {
      this.itemInfo.check = !this.itemInfo.check;
    }
  }
};
</script>

<style>
.car-list-item {
  padding: 10px 10px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
}
.item-shop-info {
  height: 48px;
  display: flex;
  align-items: center;
}
.item-shop-info .logo {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
}
.item-shop-info .logo img {
  width: 100%;
}
.item-shop-info .name {
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
}
.item-good-info {
  display: flex;
  align-items: center;
}
.item-good-info .good-info-img {
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 10px;
}
.item-good-info .good-info-img img {
  width: 100%;
}
.item-good-info .good-info {
  width: 60%;
  margin-left: 10px;
}
.good-info .info-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  /* margin: 20px 0 30px; */
}
.good-info .info-style {
  margin: 15px 0;
  font-size: 14px;
}
.good-info .info-num {
  font-size: 14px;
  color: #333;
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 3px;
}
</style>