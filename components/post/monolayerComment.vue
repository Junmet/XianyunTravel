<template>
  <div>
    <div class="comm">
      <div class="cmt-item clearfix" v-for="(item,index) in commentData" :key="index">
        <div class="cmt-info">
          <img :src="$axios.defaults.baseURL+item.account.defaultAvatar" alt />
          {{item.account.nickname}}
          <i>{{item.account.created_at | time}}</i>
          <span>1</span>
        </div>
        <div class="cmt-content">
          <div class="cmt-floor">
              <MultilayerComment v-if='item.parent' :parent="item.parent" @reply="reply" ></MultilayerComment>
          </div>
          {{item.content}}
          <!-- 图片展示 -->
           <el-row v-if="item.pics.length>0" class="cmt-imgs">
            <img 
            v-for="(item,index) in item.pics" 
            :key="index"
            style="width: 100px; height: 100px;cursor: pointer;"
            :src="$axios.defaults.baseURL+item.url" 
            @click="fanDa($axios.defaults.baseURL+item.url)"
            >
            <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </el-row>
        </div>
        <span class="reply" @click="reply(item.account.nickname,item.id)"><a href="javascript:void(0)">回复</a></span>
      </div>    
    </div>
  </div>
</template>

<script>
import moment from "moment"
import MultilayerComment from "@/components/post/multilayerComment"
export default {
  data () {
    return {
      // 默认状态不显示
      dialogVisible: false ,
      // 展示图片路径
      dialogImageUrl:"", 
    }
  },
  components:{
    MultilayerComment
  },
  props:{
    commentData:{
      type:Array,
      default(){
        return []
      },
      account:[]
    }
  },
  methods:{
    // 展示图片
    fanDa(src){
      this.dialogVisible = true
      this.dialogImageUrl = src
    },
    reply(name,id){
      // name:评论用户名
      // id:用户ID
      // console.log(name);
      // console.log(id);
      console.log(name);
      console.log(id);
      
      this.$emit("reply",name,id)
      
    }
  },
  // 过滤器 时间
   filters:{
        time(val){
            return moment(val).format('YYYY-MM-DD hh:mm')
        }
    }
};
</script>

<style lang="less" scoped>
.comm {
  border: 1px solid #ddd;
  > div:first-child{
    border-bottom: 1px dashed #ddd;
  }
  .cmt-item {
    // border-bottom: 1px dashed #ddd;
    padding: 20px 20px 5px;
    vertical-align: top;
  }
  
  .cmt-info {
    margin-bottom: 10px;
    font-size: 12px;
    color: #666;
    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      vertical-align: top;
    }
    span {
      float: right;
    }
  }
  .cmt-content{
    padding: 0 0 0 30px;
  //  .cmt-floor{
  //    width:640px;
  //    height: 78px;
  //    background-color: #ddd
  //  }
  }
   .reply{
     float: right;
     font-size: 12px;
     :hover{
       text-decoration: underline;
       color: blue;
     }
    }
}

    .clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }
    .clearfix{
        *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
    }
</style>