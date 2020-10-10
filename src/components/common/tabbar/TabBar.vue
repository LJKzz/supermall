<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style>
.tab-bar {
  display: flex;
  background-color: #ddd;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 1px rgba(43, 40, 40, 0.2);
  height: 49px;
}

</style>