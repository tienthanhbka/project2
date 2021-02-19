<template>
  <div class="block-body">
    <contenteditable
      tag="div"
      :contenteditable="isEditable"
      v-model="value.Detail"
      class="t-hover reference-detail"
      t-placeholder="Mục tiêu nghề nghiệp: ngắn hạn, dài hạn."
    />
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
.block-body {
  padding-top: 0.2cm;
  .reference-detail {
    display: block;
    line-height: 15pt;
    min-width: 12cm;
    text-align: justify;
  }
}
</style>
