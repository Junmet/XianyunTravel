<template>
  <div class="bor">
      <mycomment v-if='parent.parent' :parent='parent.parent' @reply="sendreplys"></mycomment>
    <div class="item clearfix">
      <div class="info">
        {{parent.account?parent.account.nickname:{} }}
        <i>{{parent.account?+parent.account.created_at:{} | time}}</i>
        <span>1</span>
      </div>
      <div class="content">
          {{parent.content}}
           <!-- 图片展示 -->
           <el-row v-if="parent.pics.length>0" class="cmt-imgs">
            <img 
            v-for="(item,index) in parent.pics" 
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
      <span class="replys" @click="sendreplys(parent.account.nickname,parent.id)">
        <a href="javascript:void(0)">回复</a>
      </span>
    </div>
  </div>
</template>

<script>
import moment from "moment"
export default {
    name:"mycomment",
     data () {
    return {
      // 默认状态不显示
      dialogVisible: false ,
      // 展示图片路径
      dialogImageUrl:"", 
    }
  },
    props:{
       parent:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
      // 组件递归回复事件
      sendreplys(name,id){
        console.log(222);
        
        this.$emit("reply" ,name,id)
      },
    // 展示图片
    fanDa(src){
      this.dialogVisible = true
      this.dialogImageUrl = src
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
.bor {
  border: 1px solid #ddd;
  background: #f9f9f9;
  .item {
    padding: 10px 10px 5px;
    vertical-align: top;
  }
  .info {
    margin-bottom: 10px;
    font-size: 12px;
    color: #666;
    span {
      float: right;
    }
  }
//   .content {
//     padding: 0 0 0 10px;
//   }
  .replys {
    float: right;
    font-size: 12px;
    :hover {
      text-decoration: underline;
      color: blue;
    }
  }
}
.clearfix:after {
  /*伪元素是行内元素 正常浏览器清除浮动方法*/
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *zoom: 1; /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}
</style>