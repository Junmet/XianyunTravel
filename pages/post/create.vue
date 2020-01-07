<template>
  <div class="container">
    <el-row type="flex" :gutter="50">
      <el-col>
        <div class="left">
          <h2>发表新攻略</h2>
          <p>分享你的个人游记，让更多人看到哦！</p>
        </div>
        <div>
          <el-form>
            <el-form-item>
              <el-input placeholder="请输入内容"></el-input>
            </el-form-item>
            <!-- 富文本 -->
            <el-form-item>
              <VueEditor :config="config" ref="vueEditor" class="Ftext" />
            </el-form-item>

            <el-form-item class="select" label="选择城市">
              <el-autocomplete v-model="state4" placeholder="请输入内容"></el-autocomplete>
            </el-form-item>
          </el-form>
        </div>
        <div class="create-button">
          <el-button type="primary">提交</el-button>
          <span>
            或着
            <a href="#" style="color:orange">保存到草稿</a>
          </span>
        </div>
      </el-col>
      <el-col>
        <div class="rigth">
          <h4>草稿箱（1）</h4>
          <div class="draft-list">
            <div class="draft-item">
              <div class="draft-post-title">
                <span class="iconfont el-icon-edit"></span>
              </div>
              <p>2020-01-07</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import "quill/dist/quill.snow.css";
let VueEditor;

if (process.browser) {
  VueEditor = require("vue-word-editor").default;
}

export default {
  data() {
    return {
      config: {
        // 上传图片的配置
        uploadImage: {
          url: "http://localhost:3000/upload",
          name: "file",
          // res是结果，insert方法会把内容注入到编辑器中，res.data.url是资源地址
          uploadSuccess(res, insert) {
            insert("http://localhost:3000" + res.data.url);
          }
        },

        // 上传视频的配置
        uploadVideo: {
          url: "http://localhost:3000/upload",
          name: "file",
          uploadSuccess(res, insert) {
            insert("http://localhost:3000" + res.data.url);
          }
        }
      }
    };
  },

  components: {
    VueEditor
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
  .left {
    width: 750px;
    h2 {
      font-weight: 400;
      font-size: 22px;
      margin-bottom: 10px;
    }
    p {
      font-size: 12px;
      color: #999;
      margin-bottom: 10px;
    }
    .select {
      margin-bottom: 22px;
    }
  }
  .rigth {
    width: 200px;
    border: 1px solid #ddd;
    padding: 10px;
    h4 {
      margin-bottom: 10px;
      font-weight: 400;
      color: #666;
    }
    .draft-item {
      margin-bottom: 10px;
      font-size: 14px;
    }
    .draft-post-title {
      cursor: pointer;
    }
    p{
      color:#999
    }
  }
  .Ftext {
    height: 450px;
    margin-bottom: 60px;
  }
}
</style>