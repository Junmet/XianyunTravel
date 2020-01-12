<template>
  <div class="cmt-wrapper">
    <h4>评论</h4>
    <el-alert
      :title="username"
      v-if="isshow"
      type="info"
      show-icon
      @close="close"
      class="el-alerts"
    ></el-alert>
    <div class="input">
      <el-input v-model="form.content" placeholder="请输入内容"></el-input>
    </div>
    <el-row type="flex" justify="space-between">
      <div class="upload_img">
        <el-upload
          name="files"
          :file-list="form.pics"
          :action="$axios.defaults.baseURL + '/upload'"
          list-type="picture-card"
          :on-success="coverUploaded"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" class="upload-img" :src="dialogImageUrl" alt />
        </el-dialog>
      </div>
      <div>
        <el-button type="primary" @click="submit">提交</el-button>
      </div>
    </el-row>

    <!-- 评论内容 -->
    <div class="no-comments" v-if="commentData.length===0">暂无评论，赶紧抢占沙发！</div>

    <!-- 分页 -->
    <div class="comment" v-else>
      <!-- 单层评论组件 -->
      <MonolayerComment :commentData="commentData" @reply="reply"></MonolayerComment>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[2,4,6,8]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import MonolayerComment from "@/components/post/monolayerComment";
export default {
  props: {
    dataID: {
      type: String,
      default() {
        return "";
      }
    }
  },
  components: {
    MonolayerComment
  },
  data() {
    return {
      //图片预览组件
      dialogImageUrl: "",
      dialogVisible: false,

      // 文章评论数据
      commentData: [],

      input: "",
      imageUrl: "",
      pageIndex: 1,
      pageSize: 3,
      total: 0,
      username: "",
      isshow: false,
      //评论表单
      form: {
        content: "",
        pics: [],
        follow: null
      }
    };
  },
  methods: {
    // 图片上传成功的钩子
    coverUploaded(response) {
      console.log(response);
      const arr = response.map(v => {
        return (v.url = this.$axios.defaults.baseURL + v.url);
      });
      this.form.pics.push(...response);
    },
    // 点击已上传的文件链接时的钩子,可以拿到返回的数据
    handlePictureCardPreview(file) {
      // console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 删除图片的钩子
    handleRemove(file, fileList) {
      this.form.pics = fileList;
    },
    // 提交
    submit() {
      const post = this.dataID;
      this.form = { ...this.form, post };
      this.$axios({
        url: "/comments",
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: "Bearer " + this.$store.state.user.userInfo.token
        },
        data: this.form
      }).then(res => {
        console.log(res);
        // 提交成功提示
        const { message } = res.data;
        this.$message.success(message);
        // 清除内容和图片内容
        this.form = {
          content: "",
          pics: []
        };
        this.pageIndex = 1;
        this.pageSize = 3;
        // 发送成功后自动从新发送请求达到页面刷新效果
        this.articlecomment();
      });
    },
    reply(name, id) {
      this.username = name;
      this.isshow = true;
      console.log(111);
      this.form.follow = id;
    },
    close() {
      this.isshow = false;
      this.username = "";
    },
    // 页码数
    handleCurrentChange(value) {
      this.pageIndex = value;
      this.articlecomment();
    },
    // 显示数据数量
    handleSizeChange(value) {
      this.pageSize = value;
      this.articlecomment();
    },
    // 获取文章评论
    articlecomment() {
      this.$axios({
        url: "/posts/comments",
        params: {
          post: this.$route.query.id,
          _start: (this.pageIndex - 1) * this.pageSize,
          _limit: this.pageSize
        }
      }).then(res => {
        console.log(res);
        const { data, total } = res.data;
        this.commentData = data;
        this.total = total;
      });
    }
  },
  mounted() {
    // 获取文章评论
    this.articlecomment();
    // console.log(this.$axios.defaults.baseURL);
    
  },
  // 监听地址栏id变化请求文章评论
  watch: {
    $route(to, from) {
      this.articlecomment();
    }
  }
};
</script>

<style lang="less" scoped>
.cmt-wrapper {
  margin-bottom: 20px;
  h4 {
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 20px;
  }
  .input {
    margin-bottom: 10px;
  }
  .upload_img {
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .no-comments {
    font-size: 14px;
    color: #999;
    padding: 30px;
    text-align: center;
    border: 1px dashed #dddddd;
  }
}
.el-alerts {
  width: 25% !important;
}
.avatar-uploader {
  border: 1px dashed #d9d9d9 !important;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader:hover {
  border-color: #409eff !important;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
.el-pagination {
  text-align: center;
  margin: 15px 0;
}
</style>