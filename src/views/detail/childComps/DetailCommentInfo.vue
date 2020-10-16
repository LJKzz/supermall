<template>
  <div class="detail-comment-info" v-if="Object.keys(commentInfo).length-1 !== 0">
    <div class="info-header">
      <div class="info-title">宝贝评价({{commentInfo.rate}})</div>
      <div class="info-more">
        查看全部
        <span class="info-more-right"></span>
      </div>
    </div>
    <div class="info-user" v-if="commentInfo.user">
      <img :src="commentInfo.user.avatar" alt />
      <div>
        <div class="info-user-name">{{commentInfo.user.uname}}</div>
        <div class="comment-other">
          <span class="comment-time">{{commentInfo.created |getTime}}</span>
          <span>{{commentInfo.style}}</span>
        </div>
      </div>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <!-- <div class="info-tag">
        <span v-for="(item,index) in commentInfo.extraInfo" :key="index">{{item}}</span>
      </div>-->
      <div class="info-imgs"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    getTime(date) {
      var date = +new Date("2020-9-19 20:00:00") / 1000;
      const date1 = new Date().getTime();
      let times = (date1 - date * 1000) / 1000;
      let year = parseInt(times / 60 / 60 / 24 / 365);
      if (year) {
        return year + "年前";
      }
      let mouth = parseInt(times / 60 / 60 / 24 / 30);
      if (mouth) {
        return mouth + "月前";
      }
      let week = parseInt(times / 60 / 60 / 24 / 7);
      if (week) {
        return week + "周前";
      }
      let day = parseInt(times / 60 / 60 / 24);
      if (day) {
        return day + "天前";
      }
      day = day < 10 ? "0" + day : day;
      let h = parseInt((times / 60 / 60) % 24);
      h = h < 10 ? "0" + h : h;
      let m = parseInt((times / 60) % 60);
      m = m < 10 ? "0" + m : m;
      let s = parseInt(times % 60);
      s = s < 10 ? "0" + s : s;
      console.log(year, mouth, week, day, h, m, s);

      // return realDate;
    }
  }
};
</script>

<style>
.detail-comment-info > div {
  margin: 10px 0;
}
.detail-comment-info .info-header {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.detail-comment-info .info-header .info-title {
  font-size: 18px;
  color: #333;
  font-weight: bold;
}
.detail-comment-info .info-header .info-more {
  display: flex;
  align-items: center;
  color: #ff6700;
}
.info-header .info-more .info-more-right {
  display: block;
  width: 16px;
  height: 16px;
  /* background-color: aquamarine; */
  background: url("~assets/img/detail/right.png") no-repeat center;
  background-size: 70%;
}
.detail-comment-info .info-user {
  display: flex;
  align-items: center;
}
.detail-comment-info .info-user .info-user-name {
  color: #222;
}
.detail-comment-info .info-user .comment-other {
  font-size: 14px;
  margin-top: 5px;
}
.info-user .comment-other .comment-time {
  margin-right: 10px;
}
.detail-comment-info .info-user img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
</style>