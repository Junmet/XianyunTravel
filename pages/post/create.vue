<template>
  <div class="container">
    <el-row type="flex" :gutter="50">
      <el-col>
        <div class="left">
          <h2>发表新攻略</h2>
          <p>分享你的个人游记，让更多人看到哦！</p>
        </div>
        <div>
          <el-form ref="dataForm" :model="dataForm">
            <el-form-item>
              <el-input v-model="dataForm.title" placeholder="请输入内容"></el-input>
            </el-form-item>
            <!-- 富文本 -->
            <el-form-item>
              <div>
                <VueEditor :config="config" ref="vueEditor" />
              </div>
            </el-form-item>

            <el-form-item class="select" label="选择城市">
              <el-autocomplete
                placeholder="请输入城市"
                v-model="dataForm.city"
                @blur="handleDepartChange"
                :fetch-suggestions="queryDepartSearch"
              ></el-autocomplete>
            </el-form-item>
          </el-form>
        </div>
        <div class="create-button">
          <el-button type="primary" @click="submit">提交</el-button>
          <span>
            或着
            <a href="#" style="color:orange" @click="draft">保存到草稿</a>
          </span>
        </div>
      </el-col>
      <el-col>
        <div class="rigth">
          <h4>草稿箱({{$store.state.post.newly.length?$store.state.post.newly.length:0}})</h4>
          <div class="draft-list" v-for="(item,index) in $store.state.post.newly" :key="index">
            <div class="draft-item">
              <div class="draft-post-title" @click="returningdata(index)">
                {{item.title}}
                <span class="iconfont el-icon-edit"></span>
              </div>
              <p>{{item.time}}</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import VueEditor from "vue-word-editor";
import "quill/dist/quill.snow.css";
let VueEditor;
if (process.browser) {
  VueEditor = require("vue-word-editor").default;
}

export default {
  data() {
    return {
      dateTime:"",
      // 表单数据
      dataForm: {
        content: "",
        title: "",
        city: ""
      },
      // 实现提示城市
      departData: [],
      config: {
        // 上传图片的配置
        uploadImage: {
          url: "http://157.122.54.189:9095/upload",
          name: "files",
          // res是结果，insert方法会把内容注入到编辑器中，res.data.url是资源地址
          uploadSuccess(res, insert) {
            // 在文件上传成功之后，将路径插入到富文本框
            insert("http://157.122.54.189:9095" + res.data[0].url); 
          }
        },
        // 上传视频的配置
        uploadVideo: {
         url: "http://157.122.54.189:9095/upload",
          name: "files",
          uploadSuccess(res, insert) {
            insert("http://157.122.54.189:9095" + res.data[0].url);
          }
        }
      }
    };
  },

  components: {
    VueEditor
  },
  methods: {
    // 出发城市输入框失去焦点时候默认选中第一个城市
    handleDepartChange() {
      if (this.departData.length > 0) {
        this.dataForm.city = this.departData[0].value;
      }
    },
    async queryDepartSearch(value, callback) {
      //   console.log(value);
      if (!value) {
        callback([]);
        return;
      }
      let res = await this.$axios({
        url: "/airs/city",
        params: {
          name: value
        }
      });
      let { data } = res.data;
      console.log(data);
      
      this.departData = data.map(item => {
        item.value = item.name;
        return item;
      });
      callback(this.departData);
    },
    // 提交
    submit() {
      this.dataForm.content = this.$refs.vueEditor.editor.root.innerHTML;
      this.$axios({
        url:"/posts",
        method:"POST",
         headers: {
          Authorization: "Bearer " + this.$store.state.user.userInfo.token
        },
        data:this.dataForm
      }).then(res=>{
        console.log(res);
            this.$message({
          message: '恭喜你，新增成功',
          type: 'success'
        });
      })
    },
    // 保存到草稿
    draft(){
      this.dataForm.content = this.$refs.vueEditor.editor.root.innerHTML;
      let dateTime = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
      this.dateTime = dateTime
      this.dataForm.time = this.dateTime    
      this.$store.commit("post/storage",this.dataForm)
    },
    // 草稿返回数据
    returningdata(index){
      this.dataForm.city = this.$store.state.post.newly[index].city
      this.$refs.vueEditor.editor.root.innerHTML = this.$store.state.post.newly[index].content
      this.dataForm.title = this.$store.state.post.newly[index].title
    }
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
      &:hover{
        color: orange;
        text-decoration: underline;
      }
    }
    p {
      color: #999;
    }
  }
  .Ftext {
    height: 450px;
    margin-bottom: 60px;
  }
}
/deep/.ql-toolbar.ql-snow + .ql-container.ql-snow{
  height: 400px;
}
</style>