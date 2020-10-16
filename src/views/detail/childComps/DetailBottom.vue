<template>
  <div class="detail-bottom">
    <div class="bottom-left">
      <div>
        <i class="icon shop"></i>
        <div>店铺</div>
      </div>
      <div>
        <i class="icon service"></i>
        <div>客服</div>
      </div>
      <div>
        <i class="icon select"></i>
        <div>收藏</div>
      </div>
    </div>
    <div class="bottom-right">
      <div class="cart" @click="openCar">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottom",
  methods: {
    openCar() {
      this.$emit("openCar");
    }
  }
};
</script>

<style>
.detail-bottom {
  height: 49px;
  background-color: #fff;
  display: flex;
  box-shadow: 0 -3px 1px rgba(43, 40, 40, 0.2);
  position: relative;
  z-index: 99;
}
.detail-bottom .bottom-left {
  width: 45%;
  display: flex;
  font-size: 14px;
}
.detail-bottom .bottom-left > div {
  flex: 1;
  text-align: center;
}
.detail-bottom .bottom-left .icon {
  display: block;
  width: 24px;
  height: 24px;
  margin: 3px auto;
}
.detail-bottom .bottom-left .shop {
  background: url("~assets/img/detail/shop.png");
}
.detail-bottom .bottom-left .service {
  background: url("~assets/img/detail/service.png");
}
.detail-bottom .bottom-left .select {
  background: url("~assets/img/detail/select.png");
}
.detail-bottom .bottom-right {
  width: 50%;
  border-radius: 49px;
  text-align: center;
  display: flex;
  margin: 5px auto;
  overflow: hidden;
  line-height: 39px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
}

.detail-bottom .bottom-right .cart {
  width: 50%;
  background-color: #ff6700;
}
.detail-bottom .bottom-right .buy {
  width: 50%;
  background-color: #ff4037;
}
</style>