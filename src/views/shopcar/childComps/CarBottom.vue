<template>
  <div class="car-bottom clear-fix">
    <div class="bottom-left left">
      <check-button :isChecked="isSelectAll" @click.native="check()" />
      <span>全选</span>
    </div>
    <div class="bottom-right right">
      <div class="bottom-price">合计:￥{{totalPrice}}</div>
      <div class="bottom-sell" @click="clearCar">结算</div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CarBottom",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["carLength", "carList"]),

    totalPrice() {
      return this.carList
        .filter(item => {
          return item.check;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.num;
        }, 0)
        .toFixed(2);
    },
    isSelectAll() {
      if (this.carList.length == 0) {
        return false;
      }
      return !this.carList.find(item => !item.check);
    }
  },
  methods: {
    check() {
      if (this.isSelectAll) {
        this.carList.forEach(item => (item.check = false));
      } else {
        this.carList.forEach(item => (item.check = true));
      }
    },
    clearCar() {
      if (this.carList.length == 0) {
        this.$toast.show("购物车为空", 2000);
      }
      if (!this.carList.find(item => item.check)) {
        this.$toast.show("请至少选择一件商品", 2000);
      }
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
  width: 60%;
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