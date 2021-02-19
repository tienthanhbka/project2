<template>
  <div class="dashboard-container">
    <div class="dashboard-text">Độ ẩm đất</div>
    <div class="dashboard-body">
      <!-- <div class="dashboard-body-header">
        Thiết bị
      </div>
      <el-divider></el-divider> -->
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="6">
          <div class="list-device">
            <div
              class="device-item"
              style="background-image: linear-gradient(45deg, #58a6da, #6dd5fa);color:#fff"
            >
              <span>Device #1</span>
              <el-button
                type="text"
                size="small"
                style="float:right;margin:0;padding:0;color:#fff"
                >Chi tiết</el-button
              >
            </div>
            <div class="device-item">
              <span>Device #2</span>
              <el-button
                type="text"
                size="small"
                style="float:right;margin:0;padding:0"
                >Chi tiết</el-button
              >
            </div>
            <div class="device-item">
              <span>Device #3</span>
              <el-button
                type="text"
                size="small"
                style="float:right;margin:0;padding:0"
                >Chi tiết</el-button
              >
            </div>
            <div class="device-item">
              <span>Device #4</span>
              <el-button
                type="text"
                size="small"
                style="float:right;margin:0;padding:0"
                >Chi tiết</el-button
              >
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="18">
          <line-chart></line-chart>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import LineChart from "./component/LineChart.vue";
export default {
  components: { LineChart },
  data() {
    return {};
  },

  mounted() {}
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 10px;
  }
  &-text {
    font-size: 18px;
    line-height: 46px;
  }
  &-body {
    width: 100%;
    height: 500px;
    position: relative;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #eee;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    &-header {
      font-weight: 700;
      font-size: 10pt;
      color: rgba(24, 14, 14, 0.74);
    }
    &-map {
      width: 100%;
      height: auto;
      margin-bottom: 30px;
      position: relative;
      .list-device {
        width: 100%;
        padding: 5px;
        .device-item {
          font-size: 10pt;
          border-radius: 5px;
          padding: 10px;
          border: 1px solid #eee;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
            rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        }
      }
      .map {
        width: 100%;
        .gg-map {
          width: 100%;
          height: 400px;
        }
      }
    }
  }
}
.list-device {
  width: 100%;
  padding: 5px;
  .device-item {
    font-size: 10pt;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #eee;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }
}
.chart-item {
  margin-top: 20px;
  border-radius: 5px;
  padding: 20px;
  border: 1px solid #eee;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}
</style>
