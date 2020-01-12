<template>
  <div class="container">
    <div class="hotel">
      <div class="hotel_left">
        <div class="area bootom">
          <el-row type="flex">
            <el-col :span="3">
              <div>区域：</div>
            </el-col>
            <el-col :span="21">
              <div class="location-budget active">
                <a href="#">全部</a>
                <a href="#">镇兴路沿线</a>
                <a href="#">视觉艺术学院</a>
                <a href="#">大成名店</a>
                <a href="#">南京西站</a>
                <a href="#">铜山镇</a>
                <a href="#">大桥南路</a>
                <a href="#">宝塔路沿线</a>
                <a href="#">宝塔路/万辰苏果</a>
                <a href="#">珠江路沿线</a>
                <a href="#">华侨城</a>
                <a href="#">江浦</a>
              </div>
              <a href="#">
                <i class="el-icon-d-arrow-right icon"></i>
                等43个区域
              </a>
            </el-col>
          </el-row>
        </div>
        <div class="strategy bootom">
          <el-row type="flex">
            <el-col :span="3">
              <div>攻略：</div>
            </el-col>
            <el-col :span="21">
              <div>
                北京，你想要的都能在这找到。博古通今，兼容并蓄，天下一城，如是帝都。
                景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。
                由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿。
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="average bootom">
          <el-row type="flex">
            <el-col :span="3">
              <div>
                攻略
                <span class="issue">?</span>：
              </div>
            </el-col>
            <el-col :span="21">
              <div>
                <el-row type="flex">
                  <el-col :span="6">
                    <span class="org">
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <span style="color:#000">¥332</span>
                    </span>
                  </el-col>
                  <el-col :span="6">
                    <span class="org">
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <span style="color:#000">¥332</span>
                    </span>
                  </el-col>
                  <el-col :span="12">
                    <span class="org">
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <i class="iconfont iconhuangguan"></i>
                      <span style="color:#000">¥332</span>
                    </span>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div id="map_rigth">
       <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=ccfbe1e30130566ce849229397e2d301"></script> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.onLoad = function() {
      var map = new AMap.Map("map_rigth");
    };
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=ccfbe1e30130566ce849229397e2d301值&callback=onLoad";
    var jsapi =document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>

<style lang="less" scoped>
.container {
  .hotel {
    display: flex;
    justify-content: space-between;
    min-height: 260px;
    margin-bottom: 20px;

    .hotel_left {
      width: 583px;
      height: 260px;
      // background-color: yellow;
      .bootom {
        margin-bottom: 20px;
        color: #666;
        font-size: 14px;
      }
      .location-budget {
        // max-height: 3em;
        // overflow: hidden;
        a {
          margin-right: 1em;
          padding: 0 2px;
          border-radius: 4px;
          display: inline-block;
          cursor: pointer;
        }
      }
      .icon {
        color: orange;
        transform: rotate(90deg);
      }
      .issue {
        background-color: #ccc;
        color: #fff;
        display: inline-block;
        width: 1.2em;
        height: 1.2em;
        text-align: center;
        border-radius: 100%;
      }
    }
    .org {
      color: orange;
    }
  }
  #map_rigth {
    width: 420px;
    height: 260px;
    // background-color: aqua;
  }
}
</style>