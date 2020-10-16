<template>
  <div class="detail-add-car">
    <div class="add-car-top">
      <div class="goods-img">
        <img :src="carInfo.image" alt />
      </div>
      <div class="goods-info">
        <div class="goods-price">￥{{carInfo.price}}</div>
        <div class="goods-residue">库存9999件</div>
      </div>
      <div class="close-car" @click="closeCar"></div>
    </div>
    <div class="add-car-middle">
      <div class="car-color">
        <h4>颜色</h4>
        <div class="color-tag">
          <div
            class="color-item"
            v-for="(item,index) in carInfo.color"
            :key="index"
            @click="colorClick(item.name)"
            :class="{'active':isColor}"
          >{{item.name}}</div>
        </div>
      </div>
      <div class="car-size">
        <h4>尺码</h4>
        <div class="size-tag">
          <div
            class="size-item"
            v-for="(item,index) in carInfo.size"
            :key="index"
            @click="sizeClick(item.name)"
          >{{item.name}}</div>
        </div>
      </div>
      <div class="buy-count">
        <h4>购买数量:</h4>
        <div class="good-count">
          <div class="sub" @click="sub">-</div>
          <div class="count">{{goodCount}}</div>
          <div class="add" @click="add">+</div>
        </div>
      </div>
    </div>
    <div class="add-car-bottom" @click="addToCar">确认</div>
  </div>
</template>

<script>
export default {
  name: "DetailAddCar",
  props: {
    carInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      goodCount: 1,
      isColor: false,
      isSize: false
    };
  },
  methods: {
    sub() {
      this.goodCount--;
      if (this.goodCount < 1) {
        this.goodCount = 1;
      }
    },
    add() {
      this.goodCount++;
    },
    closeCar() {
      this.$emit("closeCar");
    },
    addToCar() {
      this.$emit("addToCar");
    },
    colorClick() {
      this.isColor = true;
    },
    sizeClick() {
      this.isSize = true;
    }
  }
};
</script>

<style>
.detail-add-car {
  width: 100%;
  height: 75%;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.detail-add-car > div {
  margin: 20px 10px;
}
.add-car-top {
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: #fff;
  margin: 20px 10px;
  position: relative;
}
.add-car-top::after {
  content: " ";
  display: block;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: #bbb;
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
}
.add-car-top .goods-img {
  width: 25%;
  overflow: hidden;
  border-radius: 10px;
}
.add-car-top .goods-img img {
  width: 100%;
  /* height: 100%; */
}
.add-car-top .goods-info {
  width: 55%;
  font-size: 18px;
  color: #ff6700;
  margin: 15px 0;
}
.add-car-top .goods-info .goods-residue {
  font-size: 14px;
  color: #666;
  margin: 10px 0;
}
.add-car-top .close-car {
  width: 24px;
  height: 24px;
  background-image: url("~assets/img/detail/close.png");
}
.add-car-middle > div {
  margin: 10px 0;
}
.detail-add-car .add-car-middle .car-color .color-tag .active {
  background-color: #444;
}
.add-car-middle .car-color h4,
.add-car-middle .car-size h4 {
  margin-bottom: 10px;
}
.add-car-middle .car-color .color-tag,
.add-car-middle .car-size .size-tag {
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
}
.car-color .color-tag .color-item {
  width: 30%;
  background-color: #ddd;
  margin: 10px 0;
  border-radius: 10px;
  padding: 10px 5px;
}
.car-size .size-tag .size-item {
  background-color: #ddd;
  width: 60px;
  /* height: 20px; */
  line-height: 20px;
  padding: 5px;
  border-radius: 30px;
}
.add-car-middle .buy-count {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.add-car-middle .buy-count .good-count {
  display: flex;
}
.add-car-middle .buy-count .good-count > div {
  width: 24px;
  height: 24px;
  line-height: 24px;
  background-color: #ddd;
  margin: 0 2px;
  text-align: center;
}
.buy-count .good-count .sub {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.buy-count .good-count .add {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.detail-add-car .add-car-bottom {
  position: absolute;
  bottom: 5px;
  text-align: center;
  background-color: #ff2211;
  /* width: 100%; */
  left: 0;
  right: 0;
  line-height: 28px;
  border-radius: 28px;
  margin: 0 10px;
  color: #ddd;
  letter-spacing: 2px;
}
</style>