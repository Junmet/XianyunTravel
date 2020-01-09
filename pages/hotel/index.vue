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
    <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
    <el-autocomplete placeholder="请输入目的地"></el-autocomplete>
     <el-date-picker type="daterange" start-placeholder="开始日期" end-placeholder="结束日期">
    </el-date-picker>
      <el-form-item>
        <!-- <el-button type="primary">提交</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberValidateForm: {}
    };
  }
};
</script>

<style scoped lang="less">
.container {
  width: 1000px;
  margin: 0 auto;
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