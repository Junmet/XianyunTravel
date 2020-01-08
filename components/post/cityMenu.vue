<template>
  <div class="contianer" @mouseleave="isShowMenu=false">
    <div class="bor">
      <div
        class="menu-item"
        @mouseenter="Dynamics(index)"
        v-for="(item,index) in data"
        :key="index"
      >
        <span class="hov">{{item.type}}</span>
        <i class="el-icon-arrow-right ico"></i>
      </div>
    </div>
    <div class="city-menu" v-if="isShowMenu">
      <ul>
        <li class="sitelist" v-for="(item,index) in data[cityIndex].children" :key="index">
          <span class="italic">{{index+1}}</span>
          <span class="site">
            <el-link class="link" :underline="false" @click="examine(item.city)">
              <strong class="city">{{item.city}}</strong>
              <span class="desc">{{item.desc}}</span>
            </el-link>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      //  @mouseleave="isShowMenu=false" 移出隐藏
      isShowMenu: false,
      // 每个栏目推荐的城市的城市数据渲染页
      cityIndex:0
    };
  },
  methods: {
    // 鼠标移入
    Dynamics(index){
      this.cityIndex =index
      this.isShowMenu=true
    },
    examine(data){
      this.$emit("examineCity",data)
    }
  }
};
</script>

<style lang="less" scoped>
.contianer {
  position: relative;
}
.bor {
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
}
.menu-item {
  position: relative;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  padding: 0 20px;
  font-size: 14px;
  z-index: 2;
  &:hover {
    color: orange;
  }
  .ico {
    position: absolute;
    right: 0;
    top: 12px;
    font-size: 20px;
    color: #999;
  }
}
.city-menu {
  width: 350px;
  height: 200px;
  left: 259px;
  top: 0px;
  z-index: 4;
  background-color: #fff;
  position: absolute;
  border: 1px solid #ddd;
  .sitelist {
    // line-height: 40px;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .italic {
    display: inline-block;
    color: orange;
    font-style: italic;
    font-weight: 400;
    padding: 5px 3px 3px 14px;
    font-size: 24px;
    .site {
      display: block;
      margin-left: 130px;
    }
  }
  .link {
    color: orange;
    .city {
      padding-left: 15px;
      font-size: 14px;
      font-weight: 400;
    }
    :hover{
    text-decoration:underline;
    color: #999
  }
    .desc {
      padding-left: 15px;
      font-size: 14px;
      //   font-weight: 400;
      color: #999;
    }
    :hover{
    text-decoration:underline;
    color: #999
  }
  }
  
}
</style>