<template>
  <div class="main-content">
    <div class="content">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="16">
          <group-cv></group-cv>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <work-box></work-box>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import JobsTab from "../../../public-zone/featured-page/layout/jobs-tab.vue";
import GroupCv from "./group-cv.vue";
import WorkBox from "./work-box.vue";
export default {
  components: { GroupCv, WorkBox, JobsTab }
};
</script>

<style lang="scss" scoped>
.main-content {
  width: 100%;
  height: auto;
  .content {
    max-width: 1100px;
    margin: 0 auto;
    height: 1000px;
    font-size: 10pt;
    .box1 {
      background-color: orange;
      width: 100%;
      height: 300px;
    }
    .box2 {
      background-color: green;
      width: 100%;
      height: 300px;
    }
  }
}
</style>
