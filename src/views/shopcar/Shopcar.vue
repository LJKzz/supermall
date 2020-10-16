<template>
  <div class="shopcar">
    <nav-bar>
      <div slot="center">购物车({{carLength}})</div>
    </nav-bar>
    <car-list />
    <car-bottom/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CarList from "./childComps/CarList";
import CarBottom from './childComps/CarBottom'
import { mapGetters } from "vuex";

export default {
  name: "Shopcar",
  components: {
    NavBar,
    CarList,
    CarBottom
  },
  computed: {
    ...mapGetters(["carLength", "carList"])
  }
};
</script>

<style>
.shopcar {
  height: 100vh;
}
.shopcar .nav-bar {
  background-color: #ff5339;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
}
</style>