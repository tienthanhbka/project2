<template>
  <div class="profile-objective" @click="selectItem">
    <div class="objective cv-block">
      <h3
        class="t-hover block-title"
        contenteditable
        t-placeholder="Tiêu đề mục lớn"
      >
        Mục tiêu nghề nghiệp
      </h3>
      <div class="block-body">
        <div
          class="t-hover objective-detail"
          contenteditable
          t-placeholder="Mục tiêu nghề nghiệp: ngắn hạn, dài hạn."
        >
          Áp dụng những kinh nghiệm về kỹ năng bán hàng và sự hiểu biết về thị
          trường để trở thành một nhân viên bán hàng chuyên nghiệp, mang đến
          nhiều giá trị cho khách hàng. Từ đó giúp Công ty tăng số lượng khách
          hàng và mở rộng tập khách hàng.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    selectItem() {
      this.$emit("select");
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.profile-objective {
  .objective {
    display: block;
    h3 {
      margin: 0;
      padding: 0;
    }
    .block-body {
      padding-top: 0.2cm;
      .objective-detail {
        display: block;
        line-height: 15pt;
        min-width: 12cm;
        text-align: justify;
      }
    }
  }
}
</style>
