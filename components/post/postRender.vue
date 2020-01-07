<template>
  <div class="detial-post">
    <div class="post-header">
      <h1 class="post-title">{{article[0].title}}</h1>
      <div class="release-news">
        <span>攻略 : {{article[0].city.created_at}}</span>
        <span>阅读 :{{article[0].watch?article[0].watch:0}}</span>
      </div>
    </div>
    <div class="post-content" v-html="article[0].content"></div>
  </div>
</template>

<script>
export default {
    props:{
        article:{
            type:Array,
            default(){
                return []
            }
        }
    }
};
</script>

<style lang="less" scoped>
.detial-post {
  .post-header {
    .post-title {
      padding: 20px 0;
      font-size: 32px;
      border-bottom: 1px solid #dddddd;
    }
    .release-news {
      padding: 20px;
      float: right;
      span {
        margin-left: 15px;
        color: #999999;
      }
    }
  }
  .post-content {
    clear: both;
    /deep/p {
      line-height: 24px;
    }
    /deep/img {
      max-width: 700px;
      height: auto;
      margin: 10px 0;
      background-size: 100% 100%;
      object-fit: cover;
    }
  }
}
</style>