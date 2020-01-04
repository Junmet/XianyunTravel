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


      <!-- 文章列表 -->
      <el-col :span="17">
        <div class="post-wrapper">
          <!-- 搜索 -->
          <div class="city-search">
            <el-input class="elinput" placeholder="请输入内容">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <!-- 推荐 -->
            <div class="recommend">推荐:
              <span>广州</span>
              <span>上海</span>
              <span>北京</span>
            </div>
          </div>
          <!-- 推荐攻略 -->
          <div class="recommend_strategy">
            <el-row type="flex" justify="space-between">
              <span class="strategy_size">推荐攻略</span>
              <div class="line"></div>
              <el-button type="primary" icon="el-icon-edit">写游记</el-button>
            </el-row>
          </div>
          <!-- 攻略文章 -->
          <div class="guide_post">
             <!-- 攻略文章组件 -->
             <PostList></PostList>
          </div>
          <!-- 分页 -->
           <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageIndex"
              :page-sizes="[3,5,10]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
            </el-pagination>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import CityMenu from "@/components/post/cityMenu"
import PostList from "@/components/post/postList"
export default {
  data () {
    return {
      pageIndex:1,
      pageSize:5,
      total:8
    }
  },
  components:{
    CityMenu,
    PostList
  },
  methods:{
    handleSizeChange(){},
    handleCurrentChange(){}
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
  .elinput{
    border: 2px solid orange;
  }
  .recommend{
    padding: 10px 0;
    font-size: 12px;
    color: #666;
    > span{
      margin-right: 5px;
    }
  }
  .recommend_strategy{
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    position: relative;
    .strategy_size{
      font-size: 18px;
      color: orange;
      line-height: 40px;
    }
    .line{
      width: 72px;
      height: 2px;
      background-color: orange;
      position: absolute;
      bottom: -10px;
      left: 0;
    }
  }
  .el-pagination{
    text-align: center;
  }
}
</style>