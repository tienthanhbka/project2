<template>
  <div class="group-cv">
    <div class="image">
      <!-- <a href="#">
        <img
          width="100%"
          src="https://sv-ctt.hust.edu.vn/static/img/top-banner.6c097d38.jpg"
          alt="Tìm  việc nhanh chóng "
        />
      </a> -->
      <el-carousel indicator-position="outside" height="269px">
        <el-carousel-item v-for="item in imageLst" :key="item.ID">
          <img width="100%" :src="item.Link" alt="Tìm  việc nhanh chóng " />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="header-group">
      <div class="row">
        <el-row :gutter="10">
          <el-col :xs="18" :sm="18" :lg="18" style="padding:0 15px;">
            <a href="#" class="title">Danh sách</a>
          </el-col>
          <el-col :xs="6" :sm="6" :lg="6" style="padding:0 15px;">
            <router-link :to="'/tao-cv'" target="_blank">
              <a class="btn-primary">
                <i class="fas fa-plus-circle"></i>
                <span>Tạo mới</span>
              </a>
            </router-link>
          </el-col>
        </el-row>
      </div>
      <div style="clear:both;"></div>
    </div>
    <div class="blank-table">
      Bạn chưa có CV nào cả !
      <router-link :to="'/tao-cv'" target="_blank">
        <a class="btn-primary">
          <i class="fas fa-plus-circle"></i>
          <span>Tạo mới</span>
        </a>
      </router-link>
    </div>
    <div class="work">
      <jobs-tab></jobs-tab>
    </div>
  </div>
</template>

<script>
import JobsTab from "../../../public-zone/featured-page/layout/jobs-tab.vue";
import CvItem from "./cv-item.vue";
export default {
  components: { CvItem, JobsTab },
  data() {
    return {
      imageLst: [
        {
          ID: 1,
          Link: "https://sv-ctt.hust.edu.vn/static/img/top-banner.6c097d38.jpg"
        },
        {
          ID: 2,
          Link:
            "https://miro.medium.com/max/11060/1*-Az7OcxNpaO8S4RtM-yozg.jpeg"
        },
        {
          ID: 3,
          Link: "https://ak.picdn.net/shutterstock/videos/8895268/thumb/1.jpg"
        },
        {
          ID: 4,
          Link:
            "https://i.graphicmama.com/blog/wp-content/uploads/2020/05/13143856/bg-7.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.group-cv {
  .header-group {
    padding: 15px 0;
    .row {
      .title {
        font-size: 18px;
        color: #666;
        line-height: 24px;
      }
      .btn-primary {
        background-color: #00b14f;
        color: #fff;
        padding: 5px 10px;
        line-height: 1.5;
        font-weight: 700;
        border-radius: 3px;
        float: right;
        &:after {
          clear: both;
          content: "";
        }
      }
    }
  }
  .group-content {
    .item {
      width: 100%;
      height: 200px;
    }
  }
  .blank-table {
    .btn-primary {
      background-color: #00b14f;
      color: #fff;
      padding: 5px 10px;
      line-height: 1.5;
      font-weight: 700;
      border-radius: 3px;
      &:after {
        clear: both;
        content: "";
      }
    }
  }
}
</style>
