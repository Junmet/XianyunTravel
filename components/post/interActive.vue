<template>
  <div class="pag">
    <div class="layout">
      <div class="discuss">
        <i class="iconfont iconpinglun"></i>
        <p>评论({{article[0].comments.length}})</p>
      </div>
      <div class="discuss">
        <i class="iconfont iconstar1"></i>
        <p>收藏</p>
      </div>
      <div class="discuss">
        <i class="iconfont iconfenxiang"></i>
        <p>分享</p>
      </div>
      <div class="discuss">
        <i class="iconfont iconding"></i>
        <p>点赞({{article[0].like}})</p>
      </div>
    </div>
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
.pag {
  padding: 50px 0 30px;
  .layout {
    display: flex;
    justify-content: center;
    .discuss {
      margin: 0 20px;
      font-size: 20px;
      text-align: center;
      cursor: pointer;
      p {
        margin-top: 5px;
        font-size: 14px;
        color: #999;
      }
    }
    .iconfont {
      display: block;
      font-size: 28px;
      color: orange;
    }
  }
}
</style>