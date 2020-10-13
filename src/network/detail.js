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

// 提取商品信息
export class GoodsInfo {
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
