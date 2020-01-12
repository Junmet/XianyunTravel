<template>
  <div class="container">
    <div class="pad">
      <el-row type="flex">
        <el-col :span="8">
          <span class="img_s">
            <a href="#">
              <img
                src="http://qcloud.dpfile.com/pc/wQ2ejOSmhB4OoEq1LYPHp_2RhNciyW026YiQFr_EEZsQrI_ZB6abZPwgKDOmI03U3dWYFEM5hoslgWXTJDjSPA.jpg"
                alt
              />
            </a>
          </span>
        </el-col>
        <el-col :span="10" class="mar">
          <h4>好来阁商务宾馆</h4>
          <div class="hotel-en-name">
            <span>hao lai ge shang wu hotel</span>
            <span title="3星级" class="org">
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
            </span>
            <span>经济型</span>
          </div>
          <div class="evaluate">
            <div class="star">
              <el-rate
                v-model="value5"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              ></el-rate>
            </div>
            <div class="pinglun">
              <span class="org">28</span> 条评论
            </div>
            <div class="travel">
              <span class="org">47</span> 篇游记
            </div>
          </div>
          <div class="positioning">
            <i class="iconfont iconlocation"></i>
            位于: 高淳县淳溪镇镇兴路118号(高淳县委党校对面)
          </div>
        </el-col>
        <el-col :span="6">
          <div class="ctrip">
            <div class="ctrips">携程</div>
            <div>
              <span style="color: orange;">￥125</span> 起
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
          <div class="ctrip">
            <div class="ctrips">携程</div>
            <div>
              <span style="color: orange;">￥125</span> 起
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
          <div class="ctrip">
            <div class="ctrips">携程</div>
            <div>
              <span style="color: orange;">￥125</span> 起
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value5: 3.7
    };
  }
};
</script>

<style scoped lang="less">
.container {
  width: 1000px;
  margin: 0 auto;
  .pad {
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
    h4 {
      font-weight: 400;
      font-size: x-large;
    }
    .hotel-en-name {
      color: #999;
      margin-bottom: 0.5em;
    }
    .org {
      color: orange;
    }
    .mar {
      margin: 0 20px;
    }
  }
  .img_s {
    display: block;
    width: 320px;
    height: 210px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .evaluate {
    display: flex;
    font-size: 16px;
    margin-bottom: 0.5em;
    .star {
      flex: 41.66667%;
      margin-left: -1px;
    }
    .pinglun {
      flex: 29.16667%;
    }
    .travel {
      flex: 29.16667%;
    }
  }
  .positioning {
    font-size: 14px;
    color: #666;
    margin: 1em 0;
  }
  .ctrip {
    display: flex;
    border-bottom: 1px solid #ddd;
    padding-bottom: 18px;
    margin-bottom: 16px;
    font-size: 14px;
    color: #666;
    .ctrips {
      width: 118px;
    }
  }
}
</style>