<template>
  <div class="personal">
    <nav-bar>
      <div slot="center">SuperMall</div>
    </nav-bar>
    <user-info />
    <account />
    <personal-card :product="orderList" />
    <personal-card :product="serviceList" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import UserInfo from "./childComps/UserInfo";
import Account from "./childComps/Account";
import PersonalCard from "./childComps/PersonalCard";
export default {
  name: "Personal",
  components: {
    NavBar,
    UserInfo,
    Account,
    PersonalCard
  },
  data() {
    return {
      orderList: [
        { icon: "icon-Message", info: "我的消息" },
        { icon: "icon-openshop", info: "积分商城" },
        { icon: "icon-huiyuanka", info: "会员卡" }
      ],
      serviceList: [
        { icon: "icon-gouwuche", info: "我的购物车" },
        { icon: "icon-xiazaiapp", info: "下载购物APP" }
      ]
    };
  }
};
</script>

<style>
.personal {
  background-color: #ddd;
}
.personal .nav-bar {
  background-color: var(--color-tint);
  color: #ddd;
  letter-spacing: 1px;
  font-weight: bold;
}
</style>