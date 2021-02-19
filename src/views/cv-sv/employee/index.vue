<template>
  <div class="container--employee">
    <header-em class="header--employee"></header-em>
    <!-- <main-body class="main--employee"></main-body> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderEm from "./component/header.vue";
import MainBody from "./component/main-body.vue";
export default {
  components: { HeaderEm, MainBody }
};
</script>

<style lang="scss" scoped>
$bg-manage: #fafafa;
$bg-header: #fff;
.container--employee {
  position: relative;
  background-color: $bg-manage;
  width: 100%;
  height: 1000px;
  z-index: 1;
  .header--employee {
    background-color: $bg-header;
    position: relative;
    z-index: 2;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  }
}
</style>
