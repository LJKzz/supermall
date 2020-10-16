import {
  request
} from './request'

// 请求详情页数据
export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  })
}

// 请求推荐
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

// 提取商品信息
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.discountBgc = itemInfo.discountBgColor
    this.realPrice = itemInfo.lowNowPrice
    this.columns = columns
    this.services = services
  }
}
// 提取店铺信息
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}
// 提取评论
export class Comment {
  constructor(rate) {
    this.comment = rate.list[0]
    this.comment.rate = rate.cRate;
  }
}

export class Car {
  constructor(itemInfo, skuInfo) {
    this.price = itemInfo.lowNowPrice
    this.image = itemInfo.topImages[0]
    this.color = skuInfo.props[0].list
    this.size = skuInfo.props[1].list
  }
}
