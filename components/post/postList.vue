<template>
  <div>
    <!-- 单封面文章 -->
    <el-row type="flex" justify="space-between" class="box" v-if="data.images.length<3">
      <!-- 左边图片 -->
      <el-col :span="8">
        <a href="#">
          <img class="img_cover" :src="data.images[0]" alt />
        </a>
      </el-col>
      <!-- 右边文章 -->
      <el-col :span="16">
        <div class="item-text">
          <h4>{{data.title}}</h4>
          <p class="post-desc" style="margin: 15px 0">
            <a href="#">
                {{data.summary}}
            </a>
          </p>
          <div class="post_bottom">
            <div class="user_lert">
              <!-- 位置定位 -->
              <span class="place">
                <i class="el-icon-location-outline"></i>
                  {{data.cityName}}
              </span>
              <!-- 用户 -->
              <div class="post_img">
                by
                <a href="#">
                  <img class="user_img" align="middle" src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt/>
                </a>
                <a class="user_name" href="#">{{data.account.nickname}}</a>
              </div>
              <!-- 查看人数 -->
              <span>
                  <i class="el-icon-view">{{data.watch}}</i>
              </span>
            </div>
            <!-- 点赞 -->
            <span class="praise">{{data.like}}点赞</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 多封面文章 -->
    <el-row type="flex" justify="space-between" class="box" v-else >
        <!-- 文字内容 -->
              <el-col :span="24">
        <div class="item-text">
          <h4>{{data.title}}</h4>
          <p class="post-desc"  style="margin-top:15px">
            <a href="#">
              {{data.summary}}
            </a>
          </p>
        <!-- 文章图片 -->
        <a class="article_imgs" href="#">
          <img class="img_cover" :src="data.images[0]" alt />
          <img class="img_cover" :src="data.images[1]" alt />
          <img class="img_cover" :src="data.images[2]" alt />
        </a>
          <div class="post_bottom">
            <div class="user_lert">
              <!-- 位置定位 -->
              <span class="place">
                <i class="el-icon-location-outline"></i>
                   {{data.cityName}}
              </span>
              <!-- 用户 -->
              <div class="post_img">
                by
                <a href="#">
                  <img class="user_img" align="middle" src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt/>
                </a>
                <a class="user_name" href="#">{{data.account.nickname}}</a>
              </div>
              <!-- 查看人数 -->
              <span>
                  <i class="el-icon-view">{{data.watch}}</i>
              </span>
            </div>
            <!-- 点赞 -->
            <span class="praise">{{data.like}}点赞</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  mounted () {
    // console.log(data);
    
  }
};
</script>

<style lang="less" scoped>
.box {
  border-bottom: 1px solid #ddd;
}
.img_cover {
  padding: 20px 0;
  width: 220px;
  height: 150px;
  // background-color: aquamarine;
}
.item-text {
  padding: 20px 0;
  h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    font-size: 18px;
  }
  .post-desc {
    // margin-bottom: 15px;
    line-height: 1.5;
    font-size: 14px;
    height: 63px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    color: #666;
    // margin: 15px 0;
  }
  .post_bottom {
    font-size: 12px;
    color: #999;
    display: flex;
    justify-content:space-between;
    .user_lert {
      display: flex;
    }
    .place {
      margin-right: 10px;
    }
    .post_img {
    display: flex;
    //   flex-direction:column;
      .user_img {
        //   display: block;
        width: 16px;
        height: 16px;
        border-radius: 100px;
        margin: -9px 5px 0 5px;
      }
    }
    .praise{
        color: orange;
        font-size: 16px;
    }
    .user_name{
        color: orange;
    }
    .el-icon-view{
        margin-left: 6px; 
    }
  }
}
.article_imgs{
    display: flex;
    justify-content: space-between;
    .img_cover{
        padding: none
    }
}
</style>