<template>
  <div class="car-bottom clear-fix">
    <div class="bottom-left left">
      <check-button :isChecked="isChecked" @click.native="check()" />
      <span>全选</span>
    </div>
    <div class="bottom-right right">
      <div class="bottom-price">合计:￥</div>
      <div class="bottom-sell">结算</div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CarBottom",
  data() {
    return {
      isChecked: false
    };
  },
  components: {
    CheckButton
  },
  methods: {
    check() {
      this.isChecked = !this.isChecked;
    }
  }
};
</script>

<style>
.car-bottom {
  width: 100%;
  height: 40px;
  background-color: #fff;
  position: fixed;
  bottom: 49px;
}
.car-bottom .bottom-left {
  width: 20%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.car-bottom .bottom-left .check-button {
  margin: 0;
}
.car-bottom .bottom-right {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.car-bottom .bottom-right .bottom-sell {
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 5px 0px;
  border-radius: 30px;
  background-color: #ff3300;
  color: #fff;
  letter-spacing: 2px;
}
</style>