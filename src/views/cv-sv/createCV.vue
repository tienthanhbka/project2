<template>
  <div class="layout--cv__create">
    <div class="create--cv">
      <div class="heading">
        <h1 class="suggest-title">
          Danh sách mẫu CV xin việc tiếng Anh / Việt
        </h1>
        <p class="detail-header">
          Các mẫu CV được thiết kế theo chuẩn, theo các ngành nghề. Phù hợp với
          sinh viên và người đi làm.
        </p>
        <div class="heading-btn">
          <router-link :to="'/tao-cv'" target="_blank">
            <a class="btn-primary">
              <i class="fas fa-sliders-h"></i>
              <span> Đổi ngôn ngữ / tiêu chí gợi ý mẫu cv</span>
            </a>
          </router-link>
        </div>
      </div>
      <div class="template-cv">
        <el-row>
          <el-col
            v-for="item in 3"
            :key="item"
            :xs="24"
            :sm="12"
            :lg="8"
            @click="selectCV"
          >
            <cv-template></cv-template>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import cvTemplate from "./component/cv-template.vue";
export default {
  components: { cvTemplate },
  methods: {
    // selectCV() {
    //   this.$router.push({ path: `/tao-cv/id` });
    // }
  }
};
</script>

<style lang="scss" scoped>
$bg--layout: #fafafa;
.layout--cv__create {
  width: 100%;
  background-color: $bg--layout;
  .create--cv {
    width: 1100px;
    margin: 0 auto;
    .heading {
      min-height: 110px;
      text-align: center;
      color: #666;
      .suggest-title {
        font-size: 26px;
        line-height: 30px;
        font-weight: 700;
        color: #00b714;
      }
      .detail-header {
        font-size: 15px;
      }
      .heading-btn {
        .btn-primary {
          background-color: #00b14f;
          color: #fff;
          padding: 10px 20px;
          line-height: 1.5;
          font-weight: 700;
          border-radius: 3px;
        }
      }
    }
    .template-cv {
      width: 100%;
      margin: 30px auto;
    }
  }
}
</style>
