<template>
    <div class="container">
        <!-- 幻灯片 -->
         <!-- 服务器和终端打开的地址不一样 所以要拼接一个基地址 -->
        <el-carousel 
        :interval="5000" 
        arrow="always">
            <el-carousel-item 
            v-for="(item, index) in banners" 
            :key="index">
                <div class="banner-image" 
                :style="`
                background:url(${$axios.defaults.baseURL +item.url}) center center no-repeat;
                background-size:contain contain;
                `">
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 轮播图数据
            banners: []
        }
    },
    mounted(){
      this.$axios({
        url:"/scenics/banners"
      }).then(res =>{
        // console.log(res);
        // res返回的数据中 res.data是一个对象 下面有一个data数组用解构的方法分解出来
        const {data} = res.data
        // console.log(data);
        this.banners = data
      })
    }
}
</script>

<style scoped lang="less">
.container{
    min-width:1000px;
    margin:0 auto;
    position:relative;
    /deep/ .el-carousel__container{
        height:700px;
    }
    .banner-image{
        width:100%;
        height:100%;
    }
}
</style>