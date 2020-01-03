<template>
  <div class="filters">
    <el-row type="flex" class="filters-top" justify="space-between" align="middle">
      <el-col :span="8">
        单程：
        {{data.info.departCity}} - {{data.info.destCity}}
        /
        {{data.info.departDate}}
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="airport" placeholder="起飞机场">
          <el-option
            v-for="(item,index) in data.options.airport"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="flightTimes" placeholder="起飞时间">
          <el-option
            v-for="(item,index) in  data.options.flightTimes"
            :key="index"
            :label="`${item.from}:00 - ${item.to}:00`"
            :value="`${item.from},${item.to}`"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="company" placeholder="航空公司">
          <el-option
            v-for="(item,index) in  data.options.company"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="airSize" placeholder="机型">
          <el-option
            v-for="(item,index) in flightSize"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <div class="filter-cancel">
      筛选：
      <el-button type="primary" round plain size="mini" @click="handleFiltersCancel">撤销</el-button>
    </div>
    <!-- 随便调用为了函数可以执行 -->
    <span>{{flightData}}</span>
  </div>
</template>

<script>
export default {
  props: {
    // 数据
    data: {
      // 数据类型是一个对象
      type: Object,
      // 要以函数的形式传一个对象
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      airport: "", // 机场
      flightTimes: "", // 出发时间
      company: "", // 航空公司
      airSize: "", // 机型大小
      flightSize: [
        { label: "大", value: "L" },

        { label: "中", value: "M" },

        { label: "小", value: "S" }
      ]
    };
  },
  // 计算属性
  computed: {
    flightData() {
      const arr = this.data.flights.filter(item => {
        let valid = true;
        // 机场
        if (this.airport && item.org_airport_name !== this.airport) {
          valid = false;
        }
        // 出发时间
        if (this.flightTimes) {
          const [from, to] = this.flightTimes.split(",");
          const start = +item.dep_time.split(":")[0];
            if (start < +from || start >= +to) {
              valid = false;
            }
        }

        // 航空公司
        if (this.company && item.airline_name !== this.company) {
          valid = false;
        }

        //机型
        if (this.airSize && item.plane_size !== this.airSize) {
          valid = false;
        }
        return valid;
        
      });

      this.$emit("setDataList", arr);
      return "";
    }
  },
  methods: {
    // // 选择机场时候触发
    // handleAirport(value) {
    //   const arr = this.data.flights.filter(item => {
    //     return value === item.org_airport_name;
    //   });
    //   this.$emit("setDataList", arr);
    // },

    // // 选择出发时间时候触发
    // handleFlightTimes(value) {
    //   const [from,to] = value.split(",")
    //   const arr = this.data.flights.filter(item => {
    //     //   切割完是数组 所以选择第一项[0] 去做比较
    //       const start = +item.dep_time.split(":")[0]
    //     return start >= +from && start < +to
    //   });
    //   this.$emit("setDataList", arr);
    // },

    // // 选择航空公司时候触发
    // handleCompany(value) {
    //   const arr = this.data.flights.filter(item => {
    //     return value === item.airline_name;
    //   });
    //   this.$emit("setDataList", arr);
    // },

    // // 选择机型时候触发
    // handleAirSize(value) {
    //   const arr = this.data.flights.filter(item => {
    //     return value === item.plane_size;
    //   });
    //   this.$emit("setDataList", arr);
    // },

    // 撤销条件时候触发
    handleFiltersCancel() {
      this.airport = "";
      this.flightTimes = "";
      this.company = "";
      this.airSize = "";
      // this.$emit("setDataList", this.data.flights);
    }
  }
};
</script>

<style scoped lang="less">
.filters {
  margin-bottom: 20px;
}

.filters-top {
  > div {
    /deep/ .el-select {
      margin-left: 10px;
    }
  }
}

.filter-cancel {
  margin-top: 10px;
}
</style>