<template>
  <div class="container">
    <!-- 小标题 -->
    <div class="hotel">
      <div class="el-breadcrumb">
        <span class="el-breadcrumb__item">
          <span>酒店</span>
          <i class="el-icon-arrow-right ico"></i>
        </span>
        <span class="el-breadcrumb__item">南京市酒店预订</span>
      </div>
    </div>
    <!-- 酒店搜索 -->
    <el-form ref="numberValidateForm" class="form">
      <el-row type="flex" :gutter="10">
        <el-col>
          <el-input placeholder="请输入内容"></el-input>
        </el-col>
        <el-col>
          <el-date-picker type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </el-col>
        <el-col>
          <el-input placeholder="人数未定" suffix-icon="el-icon-user" @focus="isShowSelect=true"></el-input>
        </el-col>
        <el-col>
          <el-button type="primary">查看价格</el-button>
        </el-col>
      </el-row>
    </el-form>
    <!-- 地图 -->
  
        <Map></Map>
    
    
    <!-- 筛选 -->
    
      <Filtrate></Filtrate>
    
    <!-- 酒店列表 -->
      <TheMirage></TheMirage>
  </div>
</template>

<script>
import Filtrate from "@/components/hotel/filtrate"
import Map from "@/components/hotel/map"
import TheMirage from "@/components/hotel/theMirage"
export default {
    components: {
        Map,
        Filtrate,
        TheMirage
    },
    data () {
      return {
      }
    }
}
</script>

<style scoped lang="less">
.container {
  width: 1000px;
  margin: 0 auto;
  .form {
    margin-bottom: 20px;
  }
  .hotel {
    overflow: hidden;
    padding: 20px 0;
  }
  .el-breadcrumb {
    font-size: 14px;
    color: #606266;
    .el-breadcrumb__item {
      display: flex;
      justify-content: space-between;
    }
    .ico {
      vertical-align: top;
      margin: 0 6px;
      color: #c0c4cc;
    }
  }
  /deep/ .demo-ruleForm {
    line-height: 62px;
  }
}
</style>