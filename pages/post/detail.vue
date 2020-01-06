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
          <!-- 标题 -->
          <h1>塞班贵？一定是你的打开方式不对！6000块玩转塞班</h1>
          <!-- 阅读量 -->
          <div class="read">
            <span>攻略：2019-05-22 10:57</span>
            <span>阅读：12683</span>
          </div>

          <!-- 文章主体内容 -->
          <div class="post-content">
            <p>
              大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，
              那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。
            </p>
            <p>
              <!-- 图片 -->
              <span style="background-color: rgb(252, 242, 220)">
                <img
                  src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
                  alt
                />
              </span>
              <!-- 图注释 -->
              <span style="color: rgb(153, 153, 153)">图：塞班岛。 by第5季旅游</span>
            </p>
            <h2>一、怎样用6000块玩转塞班？</h2>
            <p>
              大多数出境游客人不做预算或最终花费远远超出预算，对预算的合理分配对控制我们旅行的花费就很重要了，如何只花6000块玩转塞班岛，
              对预算超支say no？下面从5个方面来为您一一解读：机票+酒店、岛上交通、玩乐项目、吃以及购买纪念品。
            </p>
            <p>
              <br />
            </p>
            <h3>1.怎样订机票+酒店性价比最高？</h3>
            <p>
              机票和酒店的花销往往会占据我们旅行大半的花销，假设机票酒店为塞班行预算的一半，
              剩下的吃行玩购为预算的另一半，如果能在机票酒店这部分省下钱，也就意味着在塞班岛用来吃行玩购的钱就增加了
              <img
                src="https://images.mafengwo.net/images/i/face/brands_v3/6@2x.png"
                alt
              />
            </p>
            <p>
              <span style="background-color: rgb(252, 242, 220)">
                <img
                  src="https://p1-q.mafengwo.net/s10/M00/E9/33/wKgBZ1octwiAAKAoAAJ9ixcJc9M71.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
                  alt
                />
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>11111111111111</p>
            <p>222222222222222222</p>
            <p>3333333333333333333333</p>
          </div>

          <!-- 用户互动 -->
          <InterActive></InterActive>
          <!-- 评论模块 -->
          <CommentModule></CommentModule>
        </div>
      </el-col>
      <!-- 相关攻略 -->
      <el-col>
        <div class="right">
          <h4 class="aside-title">相关攻略</h4>
          <div class="recommend-list">
            <a href="#">
              <div class="post-imgText">
                <div class="post-img">
                  <img
                    src="http://157.122.54.189:9095/uploads/a3068a43353a499db0b3474384ed4086.jpeg"
                    alt
                  />
                </div>
                <div class="post-text">
                  <div class="text">aaaaa</div>
                  <p class="read_text">2020-01-04 3:11 阅读 9</p>
                </div>
              </div>
            </a>
          </div>
          <div class="recommend-list">
            <a href="#">
              <div class="post-imgText">
                <div class="post-img">
                  <img
                    src="http://157.122.54.189:9095/uploads/a3068a43353a499db0b3474384ed4086.jpeg"
                    alt
                  />
                </div>
                <div class="post-text">
                  <div class="text">aaaaa</div>
                  <p class="read_text">2020-01-04 3:11 阅读 9</p>
                </div>
              </div>
            </a>
          </div>
          <div class="recommend-list">
            <a href="#">
              <div class="post-imgText">
                <div class="post-img">
                  <img
                    src="http://157.122.54.189:9095/uploads/a3068a43353a499db0b3474384ed4086.jpeg"
                    alt
                  />
                </div>
                <div class="post-text">
                  <div class="text">aaaaa</div>
                  <p class="read_text">2020-01-04 3:11 阅读 9</p>
                </div>
              </div>
            </a>
          </div>
          <div class="recommend-list">
            <a href="#">
              <div class="post-imgText">
                <div class="post-img">
                  <img
                    src="http://157.122.54.189:9095/uploads/a3068a43353a499db0b3474384ed4086.jpeg"
                    alt
                  />
                </div>
                <div class="post-text">
                  <div class="text">aaaaa</div>
                  <p class="read_text">2020-01-04 3:11 阅读 9</p>
                </div>
              </div>
            </a>
          </div>
          <div class="recommend-list">
            <a href="#">
              <div class="post-imgText">
                <div class="post-img">
                  <img
                    src="http://157.122.54.189:9095/uploads/a3068a43353a499db0b3474384ed4086.jpeg"
                    alt
                  />
                </div>
                <div class="post-text">
                  <div class="text">aaaaa</div>
                  <p class="read_text">2020-01-04 3:11 阅读 9</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import InterActive from "@/components/post/interActive";
import CommentModule from "@/components/post/commentModule";
export default {
  components: {
    InterActive,
    CommentModule
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