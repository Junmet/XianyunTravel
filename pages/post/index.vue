<template>
  <div class="container">
    <el-row type="flex" justify="space-between" class="map">
      <!-- 左侧边栏 -->
      <el-col :span="7">
        <div class="sidebar">
          <!-- 城市列表 -->
          <!-- <div class="citylist">123</div> -->
          <CityMenu></CityMenu>

          <!-- 推荐城市 -->
          <div class="recommend">
            <h4 class="aside-title">推荐城市</h4>
            <a href="/post#" class="a_img">
              <img class="recommendCity-img" src="http://157.122.54.189:9093/images/pic_sea.jpeg">
            </a>
          </div>
        </div>
      </el-col>
      <el-col :span="17">
        <div class="post-wrapper"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CityMenu from "@/components/post/cityMenu"
export default {
  components:{
    CityMenu
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
}
.map{
margin-top: 30px
}
.sidebar{
  width: 260px;
  // position: relative;
  // .citylist{
  //   width: 260px;
  //   height: 165px;
  //   background-color: aqua;
  // }
  .recommend{
    margin-top: 20px;
    .aside-title{
      font-weight: 400;
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;
      margin-bottom: 10px;
    }
    .a_img{
      display:inline-block;
      width: 260px;
      .recommendCity-img{
        width:100%;
      }
    }
  }
}
.post-wrapper{
  width: 700px;
  height: 500px;
  background-color: red
}
</style>