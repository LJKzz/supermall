<template>
  <div class="user-info">
    <div class="user-left">
      <img src="../../../assets/img/personal/user.png" alt />
    </div>
    <div class="user-content">
      <div class="login">
        <a href="javascript:0">登录</a>
        <a href="javascript:0">/注册</a>
      </div>
      <div class="phone">
        <i class="phone-logo"></i>
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="user-right">
      <img src="~assets/img/personal/left.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
};
</script>

<style>
.user-info {
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: #d2b6b6;
  height: 100px;
  margin: 10px 0;
  border-radius: 10px;
}
.user-info .user-left {
  width: 30%;
  text-align: center;
}
.user-info .user-content {
  width: 50%;
  font-size: 15px;
  padding-left: 5px;
  color: #fff;
}
.user-info .user-content > div {
  margin: 10px 0;
}
.user-info .user-content .login a {
  font-size: 18px;
  color: #fff;
}
.user-info .user-right {
  width: 20%;
  text-align: center;
}
</style>