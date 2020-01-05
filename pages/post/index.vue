<template>
  <div class="container">
    <el-row type="flex" justify="space-between" class="map">
      <!-- 左侧边栏 -->
      <el-col :span="7">
        <div class="sidebar">
          <!-- 城市列表 -->
          <!-- <div class="citylist">123</div> -->
          <CityMenu :data="citylist" @examineCity="examineCity"></CityMenu>

          <!-- 推荐城市 -->
          <div class="recommend">
            <h4 class="aside-title">推荐城市</h4>
            <a href="/post" class="a_img">
              <img class="recommendCity-img" src="http://157.122.54.189:9093/images/pic_sea.jpeg" />
            </a>
          </div>
        </div>
      </el-col>

      <!-- 文章列表 -->
      <el-col :span="17">
        <div class="post-wrapper">
          <!-- 搜索 -->
          <div class="city-search">
            <el-input class="elinput"  v-model="examineCityData" placeholder="请输入想去的地方，比如：'广州'">
              <el-button slot="append" icon="el-icon-search" @click="searchCity"></el-button>
            </el-input>
            <!-- 推荐 -->
            <div class="recommend">
              推荐:
              <span v-for="(item,index) in recommend" :key="index" @click="recommends(item)"><a href="#">{{item}}</a></span>
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
            <PostList :data="item" v-for="(item,index) in articleLists" :key="index"></PostList>
          </div>
          <!-- 分页 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-sizes="[3,5,10]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CityMenu from "@/components/post/cityMenu";
import PostList from "@/components/post/postList";
export default {
  data() {
    return {
      pageIndex: 1, //当前多少页
      pageSize: 3, //多少条数据
      total: 0, //数据总数
      // 城市菜单列表
      citylist: [],
      // 文章列表数据 实现分页
      articleLists: [
        {
          images: [],
          account: {}
        }
      ],
      // 子组件城市数据
      examineCityData: "",
      recommend:["广州","上海","北京"]
    };
  },
  components: {
    CityMenu,
    PostList
  },
  methods: {
    // 搜索城市
    searchCity(){
      this.articleList();
    },
    // 推荐城市
    recommends(item){
      // console.log(item);
      this.examineCity(item)  
    },
    // 显示数据页数
    handleSizeChange(value) {
      // console.log(value);
      this.pageSize = value;
      this.articleList();
    },
    // 页码数
    handleCurrentChange(value) {
      // console.log(value);
      this.pageIndex = value;
      this.articleList();
    },
    articleList() {
      this.$axios({
        url: "/posts",
        params: {
          // 三元表达式  有就把城市做为参数去请求 没有就是空
          city: this.examineCityData ? this.examineCityData : null,
          _start: (this.pageIndex - 1) * this.pageSize,
          _limit: this.pageSize
        }
      }).then(res => {
        console.log(res);
        const { data,total } = res.data;
        this.articleLists = data;
        this.total =total
      });
    },
    // 接收子组件传过来的数据（城市名称）
    examineCity(data) {
      this.examineCityData = data;
      // console.log(this.examineCityData);
      this.pageIndex = 1;
      this.articleList();
    }
  },
  mounted() {
    // 城市菜单列表
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      // console.log(res);
      const { data } = res.data;
      this.citylist = data;
    });
    // 获取列表数据
    this.articleList();
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
}
.map {
  margin-top: 30px;
}
.sidebar {
  width: 260px;
  // position: relative;
  // .citylist{
  //   width: 260px;
  //   height: 165px;
  //   background-color: aqua;
  // }
  .recommend {
    margin-top: 20px;
    .aside-title {
      font-weight: 400;
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;
      margin-bottom: 10px;
    }
    .a_img {
      display: inline-block;
      width: 260px;
      .recommendCity-img {
        width: 100%;
      }
    }
  }
}
.post-wrapper {
  width: 700px;
  .elinput {
    border: 2px solid orange;
  }
  .recommend {
    padding: 10px 0;
    font-size: 12px;
    color: #666;
    > span {
      margin-right: 5px;
    }
  }
  .recommend_strategy {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    position: relative;
    .strategy_size {
      font-size: 18px;
      color: orange;
      line-height: 40px;
    }
    .line {
      width: 72px;
      height: 2px;
      background-color: orange;
      position: absolute;
      bottom: -10px;
      left: 0;
    }
  }
  .el-pagination {
    text-align: center;
    margin: 15px 0;
  }
}
</style>