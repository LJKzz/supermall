<template>
  <div class="goods-list-item" @click="toDetail(goodsId)">
    <img @load="imageLoad" v-lazy="showImage" alt />
    <h5>{{goodsItem.title}}</h5>
    <span class="price" v-if="price">
      <span>￥</span>
      <span class="big-price">{{price[0]}}</span>
      <span v-if="price.length===2" class="small-price">.{{price[1]}}</span>
    </span>
    <span class="cfav">{{goodsCafc}}人收藏</span>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {
      price: 0
    };
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {
    this.getPrice();
    // console.log(this.goodsItem);
  },
  computed: {
    showImage() {
      return (
        this.goodsItem.image || this.goodsItem.img || this.goodsItem.show.img
      );
    },
    goodsId() {
      return this.goodsItem.iid || this.goodsItem.shop_id;
    },
    goodsCafc() {
      return this.goodsItem.cfav || "0";
    }
  },
  methods: {
    getPrice() {
      if (this.goodsItem.price)
        this.price = this.goodsItem.price.toString().split(".");
    },
    imageLoad() {
      if (this.$route.path.indexOf("/home") !== -1) {
        this.$bus.$emit("homeItemImageLoad");
      } else if (this.$route.path.indexOf("/detail") !== -1) {
        this.$bus.$emit("detailItemImageLoad");
      } else if (this.$route.path.indexOf("/category") !== -1) {
        this.$bus.$emit("cateItemImageLoad");
      }
    },
    toDetail(id) {
      if (this.goodsItem.iid) {
        this.$router.push("/detail?q=" + id);
      } else if (this.goodsItem.shop_id) {
        // this.$router.push("?q=" + id);
      }
    }
  }
};
</script>

<style>
.goods-list-item img {
  display: block;
  width: 100%;
  /* border-radius: 10px; */
}
.goods-list-item a {
  font-size: 0px;
}
.goods-list-item h5 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 5px 0;
  padding: 0 5px;
}
.goods-list-item > span {
  padding: 0 5px;
}
.goods-list-item .price {
  font-size: 0px;
  color: #ff6700;
}
.goods-list-item .price span {
  font-size: 12px;
}
.goods-list-item .price .big-price {
  font-size: 18px;
}
.goods-list-item .cfav {
  font-size: 13px;
  margin-left: 10px;
}
</style>