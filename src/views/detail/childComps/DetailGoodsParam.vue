<template>
  <div class="detail-goods-param">
    <div class="param-rule-wrap" v-if="goodsParam.rule">
      <div class="param-rule-title">{{goodsParam.rule.key}}:</div>
      <table class="param-rule">
        <thead>
          <th v-for="(item,index) in goodsParam.rule.tables[0]" :key="index">{{item[0]}}</th>
        </thead>
        <tbody>
          <tr v-for="index1 in goodsParam.rule.tables[0][0].length">
            <td v-for="(item,index) in goodsParam.rule.tables[0]" :key="index">{{item[index1]}}</td>
          </tr>
        </tbody>
      </table>
      <div class="param-rule-info">{{goodsParam.rule.disclaimer}}</div>
    </div>
    <div class="param-info-wrap" v-if="goodsParam.info">
      <div class="param-info-title">{{goodsParam.info.key}}:</div>
      <table class="param-info">
        <tr v-for="(item,index) in goodsParam.info.set" :key="index">
          <td class="param-info-key">{{item.key}}</td>
          <td class="param-info-value">{{item.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsParam",
  props: {
    goodsParam: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
.detail-goods-param .param-rule-wrap,
.detail-goods-param .param-info-wrap {
  padding: 20px 10px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
  font-size: 14px;
}
.detail-goods-param .param-rule-wrap .param-rule-info {
  font-size: 12px;
}
.param-info-title,
.param-rule-title {
  margin-bottom: 10px;
}
.detail-goods-param .param-info .param-info-key {
  width: 20%;
  text-align: center;
}
.detail-goods-param .param-info {
  border-collapse: collapse;
}
.detail-goods-param .param-info td {
  border: 1px solid #666;
  line-height: 24px;
  padding: 5px 10px;
}
.detail-goods-param .param-rule {
  margin: 0 auto;
}
.detail-goods-param .param-rule th,
.detail-goods-param .param-rule td {
  padding: 10px;
  text-align: center;
}
</style>