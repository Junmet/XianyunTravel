<template>
  <div class="container">
    <el-row type="flex" justify="space-between" :gutter="20">
      <!-- 文章详情 -->
      <el-col>
        <div class="left">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/post' }">旅游攻略</el-breadcrumb-item>
            <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
          </el-breadcrumb>
          <!-- 文章主体内容 -->
          <PostRender :article="article"></PostRender>
          <!-- 用户互动 -->
          <InterActive :article="article"></InterActive>
          <!-- 评论模块 -->
          <CommentModule></CommentModule>
        </div>
      </el-col>
      <!-- 相关攻略 -->
      <el-col>
        <div class="right">
          <h4 class="aside-title">相关攻略</h4>
          <div class="recommend-list" v-for="(item,index) in strategy" :key="index">
            <nuxt-link :to="`/post/detail?id=${item.id}`">
              <div class="post-imgText">
                <div class="post-img">
                  <img :src="item.images[0]" alt />
                </div>
                <div class="post-text">
                  <div class="text">{{item.title}}</div>
                  <p class="read_text">{{article[0].city.created_at}} 阅读 {{item.watch}}</p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import InterActive from "@/components/post/interActive";
import CommentModule from "@/components/post/commentModule";
import PostRender from "@/components/post/postRender";
export default {
  data() {
    return {
      // 文章详情内容
      article: [
        {
          article: [],
          city: {},
          comments: {}
        }
      ],
      // 相关攻略
      strategy: []
    };
  },
  components: {
    InterActive,
    CommentModule,
    PostRender
  },
  watch: {
    // 相关攻略的跳转
    $route(to, from) {
      this.articlerequest();
    }
  },
  mounted() {
    this.articlerequest(), this.recommend();
  },
  methods: {
    recommend() {
      this.$axios({
        url: "/posts/recommend",
        params: {
          id: this.$route.query.id
        }
      }).then(res => {
        this.strategy = res.data.data;
      });
    },
    articlerequest() {
      this.$axios({
        url: "/posts",
        params: {
          id: this.$route.query.id
        }
      }).then(res => {
        const { data } = res.data;
        this.article = data;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 20px auto;
}
.left {
  width: 700px;
  // height: 1060px;
  // background-color: aqua;
  h1 {
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
  }
  .read {
    color: #999;
    text-align: right;
    padding: 20px;
    span {
      margin-left: 20px;
    }
  }
  .post-content {
    line-height: 1.5;
  }
  img {
    max-width: 700px !important;
    padding: 10px 0;
  }
}
.right {
  width: 280px;
  // height: 260px;
  // background-color: red;
  .aside-title {
    font-weight: 400;
    font-size: 18px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }
  .recommend-list {
    a {
      display: block;
      padding: 20px 0;
      border-bottom: 1px solid #ddd;
    }
  }
  .post-imgText {
    display: flex;
    .post-img {
      width: 100px;
      height: 80px;
      flex-shrink: 0;
      overflow: hidden;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
      }
    }
    .text {
      width: 170px;
      height: 45px;
    }
    .read_text {
      font-size: 12px;
      color: #999;
      margin-top: 15px;
    }
  }
}
</style>