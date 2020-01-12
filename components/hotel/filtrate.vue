<template>
  <div class="container">
    <el-row type="flex" class="filtrate">
      <el-col :span="8">
        <div class="adjacency">
          <div class="price">
            <div>价格</div>
            <div>0-4000</div>
          </div>
          <div>
            <el-slider v-model="value1" :max="4000"></el-slider>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="adjacency">
          <div>
            <div>住宿等级</div>
          </div>
          <div class="pull-down">
            <el-dropdown>
              <span class="el-dropdown-link">
                  <span class="right">
                      不限
                  </span>
                  <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><el-radio v-model="radio" label="1">备选项</el-radio></el-dropdown-item>
                <el-dropdown-item><el-radio v-model="radio" label="2">备选项</el-radio></el-dropdown-item>
                <el-dropdown-item><el-radio v-model="radio" label="3">备选项</el-radio></el-dropdown-item>
                <el-dropdown-item><el-radio v-model="radio" label="4">备选项</el-radio></el-dropdown-item>
                <el-dropdown-item><el-radio v-model="radio" label="5">备选项</el-radio></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
         <div class="adjacency">
          <div>
            <div>住宿等级</div>
          </div>
          <div class="pull-down">
            <el-dropdown>
              <span class="el-dropdown-link">
                  <span class="right">
                      不限
                  </span>
                  <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                 <el-dropdown-item><el-radio v-model="radio" label="1">备选项</el-radio></el-dropdown-item>
                <el-dropdown-item><el-radio v-model="radio" label="2">备选项</el-radio></el-dropdown-item>
                <el-dropdown-item><el-radio v-model="radio" label="3">备选项</el-radio></el-dropdown-item>
                <el-dropdown-item><el-radio v-model="radio" label="4">备选项</el-radio></el-dropdown-item>
                <el-dropdown-item><el-radio v-model="radio" label="5">备选项</el-radio></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
             <div class="adjacency">
          <div>
            <div>住宿等级</div>
          </div>
          <div class="pull-down">
            <el-dropdown>
              <span class="el-dropdown-link">
                  <span class="right">
                      不限
                  </span>
                  <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
               <el-dropdown-item><el-radio v-model="radio" label="1">备选项</el-radio></el-dropdown-item>
                <el-dropdown-item><el-radio v-model="radio" label="2">备选项</el-radio></el-dropdown-item>
                <el-dropdown-item><el-radio v-model="radio" label="3">备选项</el-radio></el-dropdown-item>
                <el-dropdown-item><el-radio v-model="radio" label="4">备选项</el-radio></el-dropdown-item>
                <el-dropdown-item><el-radio v-model="radio" label="5">备选项</el-radio></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
             <div class="adjacency">
          <div>
            <div>住宿等级</div>
          </div>
          <div class="pull-down">
            <el-dropdown>
              <span class="el-dropdown-link">
                  <span class="right">
                      不限
                  </span>
                  <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><el-radio v-model="radio" label="1">备选项</el-radio></el-dropdown-item>
                <el-dropdown-item><el-radio v-model="radio" label="2">备选项</el-radio></el-dropdown-item>
                <el-dropdown-item><el-radio v-model="radio" label="3">备选项</el-radio></el-dropdown-item>
                <el-dropdown-item><el-radio v-model="radio" label="4">备选项</el-radio></el-dropdown-item>
                <el-dropdown-item><el-radio v-model="radio" label="5">备选项</el-radio></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 4000,
       radio: '1'
    };
  }
};
</script>

<style lang="less" scoped>
.container {
  border: 1px solid #ddd;
  font-size: 14px;
  color: #666;
  .filtrate {
    .price {
      display: flex;
      justify-content: space-between;
    }
  }
  .adjacency {
    height: 59px;
    border-right: 1px solid #ddd;
    padding: 15px 20px;
  }
  .pull-down {
    margin-top: 15px;
  }
  .right {
    margin-right: 88px;
  }
}
</style>