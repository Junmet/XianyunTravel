<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <div></div>

        <!-- 航班头部布局 -->
        <FlightsListHead></FlightsListHead>

        <!-- 航班信息 -->
        <!-- 把获取到的数据传给子组件 :data="item"-->
        <FlightsItem v-for="(item,index) in pagingList" :key="index" :data="item"></FlightsItem>

        <!-- 分页 -->
        <!-- size-change：切换条数时候触发 -->
        <!-- current-change：选择页数时候触发 -->
        <!-- current-page: 当前页数 -->
        <!-- page-size：当前条数 -->
        <!-- total：总条数 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
      </div>
    </el-row>
  </section>
</template>

<script>
import moment from "moment";
// 机票列表页头部组件的引入
import FlightsListHead from "@/components/air/flightsListHead";
// 机票列表组件的引入
import FlightsItem from "@/components/air/flightsItem";
export default {
  data() {
    return {
      // 所有航班的总数据
      flightsData: {},
    //航班列表数据 用来实现分页
      dataList:[],
      pageIndex:1, //当前多少页
      pageSize:5,  //多少条数据
      total:0 //总页数
    };
  },
  // 注册
  components: {
    FlightsListHead,
    FlightsItem
  },
  mounted() {
    // console.log( this.$route); 拿到url地址栏的数据
    this.$axios({
      url: "/airs",
      params: this.$route.query
    }).then(res => {
    //   console.log(res);
      // 所有航班的总数据
      this.flightsData = res.data;
      //航班列表数据 用来实现分页
      this.dataList = this.flightsData.flights
        // 获取总页数
      this.total = this.flightsData.total
    });
  },
//   使用计算属性 计算分页数据
computed: {
  pagingList(){
    //   当没有数据的时候返回空数组
      if(!this.dataList) return []

    return  this.dataList.slice((this.pageIndex-1) * this.pageSize,this.pageIndex * this.pageSize)
  }  
},
  methods:{
      handleSizeChange(value){
        //   console.log(value);
          this.pageSize = value
          
      },
      handleCurrentChange(value){
        //   console.log(value);
          this.pageIndex =  value
      }
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>