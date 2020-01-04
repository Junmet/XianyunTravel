<template>
  <div class="contianer">
    <div class="bor">
      <div class="menu-item" @mouseenter="isShowMenu=true" @mouseleave="leave">
        <span class="hov">热门城市</span>
        <i class="el-icon-arrow-right ico"></i>
      </div>
      <div class="menu-item" @mouseenter="isShowMenu=true" @mouseleave="leave">
        <span class="hov">热门城市</span>
        <i class="el-icon-arrow-right ico"></i>
      </div>
      <div class="menu-item" @mouseenter="isShowMenu=true" @mouseleave="leave">
        <span class="hov">热门城市</span>
        <i class="el-icon-arrow-right ico"></i>
      </div>
      <div class="menu-item" @mouseenter="isShowMenu=true" @mouseleave="leave">
        <span class="hov">热门城市</span>
        <i class="el-icon-arrow-right ico"></i>
      </div>
    </div>
    <div class="city-menu" v-if="isShowMenu">
      <ul>
        <li class="sitelist">
          <span class="italic">1</span>
          <span class="site">
            <el-link class="link" :underline="false">
              <strong class="city">北京</strong>
              <span class="desc">实际的身份就拉开建设的发骄傲士大夫</span>
            </el-link>
          </span>
        </li>
        <li class="sitelist">
          <span class="italic">1</span>
          <span class="site">
            <el-link class="link" :underline="false">
              <strong class="city">北京</strong>
              <span class="desc">实际的身份就拉开建设的发骄傲士大夫</span>
            </el-link>
          </span>
        </li>
        <li class="sitelist">
          <span class="italic">1</span>
          <span class="site">
            <el-link class="link" :underline="false">
              <strong class="city">北京</strong>
              <span class="desc">实际的身份就拉开建设的发骄傲士大夫</span>
            </el-link>
          </span>
        </li>
        <li class="sitelist">
          <span class="italic">1</span>
          <span class="site">
            <el-link class="link" :underline="false">
              <strong class="city">北京</strong>
              <span class="desc">实际的身份就拉开建设的发骄傲士大夫</span>
            </el-link>
          </span>
        </li>
        <li class="sitelist">
          <span class="italic">1</span>
          <span class="site">
            <el-link class="link" :underline="false">
              <strong class="city">北京</strong>
              <span class="desc">实际的身份就拉开建设的发骄傲士大夫</span>
            </el-link>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //  @mouseleave="isShowMenu=false"
      isShowMenu: false
    };
  },
  methods: {
    leave() {
      this.isShowMenu = !this.isShowMenu;
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
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-left: 1px solid #ddd;
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
    .desc {
      padding-left: 15px;
      font-size: 14px;
      //   font-weight: 400;
      color: #999;
    }
  }
}
</style>