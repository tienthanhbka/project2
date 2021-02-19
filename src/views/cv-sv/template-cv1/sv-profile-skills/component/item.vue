<template>
  <div class="block-body">
    <div class="skill">
      <div>
        <contenteditable
          tag="span"
          :contenteditable="isEditable"
          v-model="value.Skills"
          class="t-hover skill-group"
          t-placeholder="Nhóm kỹ năng"
        />
      </div>
      <div>
        <contenteditable
          tag="span"
          :contenteditable="isEditable"
          v-model="value.Detail"
          class="t-hover skill-detail"
          t-placeholder="Mô tả từng kỹ năng"
        />
      </div>
      <div style="clear:both;"></div>
    </div>
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
  width: 100%;
  margin: 0 auto;
  .skill {
    .skill-group {
      width: 5cm;
      color: #000;
      font-weight: 700;
      float: left;
      padding-right: 2mm;
    }
    .skill-detail {
      width: 11cm;
      float: left;
    }
  }
}
</style>
