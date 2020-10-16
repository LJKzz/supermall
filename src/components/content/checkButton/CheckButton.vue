<template>
  <div class="check-button" :class="{'check-active':isChecked}">
    <img v-if="isChecked" src="~assets/img/common/active.png" alt />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
.check-button {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  border: 1px solid #bbb;
  text-align: center;
}
.check-active {
  background-color: #ff0000;
}
.check-button > img {
  margin-top: 2px;
}
</style>