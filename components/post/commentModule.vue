<template>
  <div class="cmt-wrapper">
    <h4>评论</h4>
    <div class="input">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
    <el-row type="flex" justify="space-between">
      <div class="upload_img">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div>
        <el-button type="primary">提交</el-button>
      </div>
    </el-row>
    <div>
      <!-- 评论内容 -->
      <div class="no-comments">
                                    暂无评论，赶紧抢占沙发！
      </div>
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
</template>

<script>
export default {
  data() {
    return {
      input: "",
      imageUrl: "",
      pageIndex:1,
      pageSize:5,
      total:100
    };
  },
  methods:{
    handleAvatarSuccess(){},
    beforeAvatarUpload(){},
    handleCurrentChange(){},
    handleSizeChange(){}
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
  .input{
    margin-bottom: 10px;
  }
  .upload_img {
    justify-content: space-between;
    margin-bottom: 30px
  }
  .no-comments{
        font-size: 14px;
        color: #999;
        padding: 30px;
        text-align: center;
        border: 1px dashed #dddddd;
    }
}
 .avatar-uploader{
    border: 1px dashed #d9d9d9!important;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader:hover {
    border-color: #409EFF!important;
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