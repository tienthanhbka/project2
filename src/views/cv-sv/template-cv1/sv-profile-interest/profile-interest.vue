<template>
  <div class="profile-interest" @click="selectItem">
    <div class="interest cv-block">
      <h3
        class="t-hover block-title"
        contenteditable
        t-placeholder="Tiêu đề mục lớn"
      >
        Sở thích
      </h3>
      <div class="block-body">
        <contenteditable
          tag="div"
          :contenteditable="isEditable"
          v-model="Interest"
          class="t-hover interest-detail"
          t-placeholder="Nói ngắn gọn về các sở thích cá nhân"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditable: true,
      Interest: ""
    };
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
.profile-interest {
  .interest {
    display: block;
    h3 {
      margin: 0;
      padding: 0;
    }
    .block-body {
      padding-top: 0.2cm;
      .interest-detail {
        display: block;
        line-height: 15pt;
        min-width: 12cm;
        text-align: justify;
      }
    }
  }
}
</style>
