<template>
  <div>
      <!-- 单封面文章 -->
      <el-row type="flex" justify="space-between">
          <el-col>
              <div class="img">12313213213213213213132</div>
          </el-col>
      <!-- 右边文章 -->
      <el-col :span="16">
        <div class="item-text">
          <h4>"远东行：用好奇心打量这座城 —— 最值得收藏的海参崴出行攻略"</h4>
          <p class="post-desc">
            <a href="#">
              想象一下一个距离 北京 只有2.5小时飞行距离的城市：身处 亚洲 却能感受到十足的欧陆风情——欧式建筑和街道，
              金发碧眼的路人，正宗的西餐外加只有国内一半售价的帝王蟹可以敞开吃——更难能可贵的是，这里对国人（实质）免签，
              有直飞航班，低廉的物价，且尚未有太多的游客涉足还保留着原汁原味的传统风情！
            </a>
          </p>
          <div class="">
              <div>
                  <!-- 位置定位 -->
                  <span>
                      <i></i>
                  </span>
              </div>
              <!-- 点赞 -->
              <span></span>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 多封面文章 -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.img{
    padding: 20px 0;
    width: 220px;
    height: 150px;
    background-color: aquamarine;
}
.img2{
    padding: 20px 0;
    width: 470px;
    height: 143px;
    background-color: yellow;
}
</style>