<template>
  <div class="detail-comment-info">
    <div class="info-header">
      <div class="info-title">宝贝评价({{commentInfo.rate}})</div>
      <div class="info-more">
        查看全部
        <span class="info-more-right"></span>
      </div>
    </div>
    <div class="info-user">
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
      const date1 = new Date().getTime();
      const realDate = new Date(date1 - date * 1000);
      // const oldDay = new Date(date * 1000);
      // console.log(realDate);
      console.log(date1, date * 1000);
      console.log(date1 - date * 1000);

      return realDate;
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
  font-size: 12px;
}
.detail-comment-info .info-header .info-title {
  font-size: 18px;
  color: #333;
  font-weight: bold;
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