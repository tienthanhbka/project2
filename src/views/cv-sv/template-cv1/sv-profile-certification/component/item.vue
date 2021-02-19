<template>
  <div class="block-body">
    <div class="certification">
      <div class="award-time-wraper">
        <contenteditable
          tag="span"
          :contenteditable="isEditable"
          v-model="value.TimeReach"
          class="t-hover award-time"
          t-placeholder="Thời gian"
        />
      </div>
      <div class="certification-detail">
        <contenteditable
          tag="span"
          :contenteditable="isEditable"
          v-model="value.NameCertification"
          class="t-hover award-detail"
          t-placeholder="Tên chứng chỉ"
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
  .certification {
    line-height: 15pt;
    padding-top: 0.15cm;
    .award-time-wraper {
      padding: 1mm 0;
      width: 5cm;
      float: left;
      .award-time {
        min-width: 2cm;
      }
    }
    .certification-detail {
      width: 11cm;
      float: left;
      .award-detail {
        padding: 1mm;
        font-size: 10pt;
        min-width: 5cm;
        display: block;
      }
    }
  }
}
</style>
