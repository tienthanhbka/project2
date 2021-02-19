<template>
  <div class="content">
    <p>
      Liệt kê một số sở thích cá nhân để giúp nhà tuyển dụng hiểu hơn về con
      người bạn.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  watch: {
    value() {
      this.$emit("input", this.value);
    }
  },
  data() {
    return {
      isEditable: true
    };
  }
};
</script>

<style lang="scss" scoped>
.content {
  p {
    line-height: 20px;
    margin-bottom: 10px;
  }
}
</style>
