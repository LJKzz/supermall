<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length -1 !== 0">
    <div class="detail-goods-top">
      <span>宝贝详情</span>
    </div>
    <div class="detail-goods-title">{{detailInfo.desc}}</div>
    <div class="goods-info-list" v-if="detailInfo.detailImage">
      <img
        v-for="(item,index) in detailInfo.detailImage[0].list"
        :key="index"
        @load="imageLoad"
        :src="item"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      count: 0,
      imageLength: 0
    };
  },
  methods: {
    imageLoad() {
      if (this.count++ === this.imageLength) {
        this.$emit("goodsImageLoad");
      }
    }
  },
  watch: {
    detailInfo() {
      this.imageLength = this.detailInfo.detailImage[0].list.length;
    }
  }
};
</script>

<style>
.detail-goods-info .detail-goods-top {
  text-align: center;
  font-size: 13px;
}
.detail-goods-info .detail-goods-top span {
  position: relative;
}
.detail-goods-info .detail-goods-top span::before,
.detail-goods-info .detail-goods-top span::after {
  content: "";
  width: 60px;
  height: 2px;
  background-color: #a8a2bb;
  display: block;
  position: absolute;
  top: 8px;
  bottom: 0;

  border-radius: 50%;
}
.detail-goods-info .detail-goods-top span::before {
  left: -70px;
}
.detail-goods-info .detail-goods-top span::after {
  right: -70px;
}
.detail-goods-info > div {
  margin: 10px 0;
}
.detail-goods-info .detail-goods-title {
  padding: 10px 20px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  background-color: #fff;
  /* display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden; */
}
.detail-goods-info .goods-info-list img {
  width: 100%;
}
</style>