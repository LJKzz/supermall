import {
  request
} from './request'

//获取首页数据
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

// 获取首页商品数据
export function getHomeGoodsdata(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
