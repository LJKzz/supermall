<template>
  <div class="account">
    <div class="account-item">
      <div class="number">
        <span class="balance">0.00</span>元
      </div>
      <div class="account-info">我的余额</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span class="balance">0</span>个
      </div>
      <div class="account-info">我的优惠</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span class="balance">0</span>分
      </div>
      <div class="account-info">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account"
};
</script>

<style>
.account {
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 0 10px;
  height: 100px;
  margin: 10px 0;
  background-color: #d2b6b6;
  border-radius: 10px;
  align-items: center;
}
.account .account-item {
  width: 33%;
}
.account .account-item .balance {
  color: #666;
  font-size: 20px;
}
.account .account-item .account-info {
  margin: 8px 0;
  font-size: 15px;
}
</style>