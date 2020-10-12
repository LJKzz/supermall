<template>
  <div class="back-top">
    <img src="~assets/img/backTop/cc-top.png" alt />
  </div>
</template>

<script>
export default {
  name: "BackTop"
};
</script>

<style>
.back-top {
  width: 42px;
  height: 42px;
  position: fixed;
  bottom: 55px;
  right: 10px;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
}
.back-top img {
  width: 24px;
  height: 24px;
  margin: 9px 0;
}
</style>