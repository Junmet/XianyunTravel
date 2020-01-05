<template>
    <div class="container">
        <el-row type="flex" justify="space-between">
            <!-- 订单表单 -->
            <div class="main">
                <OrderForm :data="airTicketParticulars"></OrderForm>
            </div>

            <!-- 侧边栏 -->
            <div class="aside">
                    <OrderAside :data="airTicketParticulars"></OrderAside>     
            </div>
        </el-row>
    </div>
</template>

<script>
import OrderForm from "@/components/air/orderForm"
import OrderAside from "@/components/air/orderAside"
export default {
    data () {
        return {
            airTicketParticulars:{
                // 保险列表
                insurances:[],
                // 座位的列表
                seat_infos: {}
            }      
        }
    },
    components:{
        OrderForm,
        OrderAside
    },
    mounted(){
        // console.log(this.$route.query);
        
        this.$axios({
            url:`/airs/${this.$route.query.id}`,
            params:{
                seat_xid:this.$route.query.seat_xid
            }
        }).then(res=>{
            // console.log(res.data);
            this.airTicketParticulars = res.data
        })
    },
}
</script>

<style lang="less" scoped>
    .container{
        width:1000px;
        margin:20px auto;
    }
    
    /*aside*/
    .aside{
        width: 350px;
        height: fit-content;
        border:1px #ddd solid;
    }
</style>