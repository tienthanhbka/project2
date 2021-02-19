<template>
  <div class="row">
    <div class="exp-time">
      <contenteditable
        tag="span"
        :contenteditable="isEditable"
        v-model="value.TimeStart"
        class="t-hover profile-field-time"
        t-placeholder="Bắt đầu"
      />
      -
      <contenteditable
        tag="span"
        :contenteditable="isEditable"
        v-model="value.TimeEnd"
        class="t-hover profile-field-time"
        t-placeholder="Kết thúc"
      />
    </div>
    <div class="company">
      <contenteditable
        tag="span"
        :contenteditable="isEditable"
        v-model="value.NameCompany"
        class="t-hover profile-field exp-namecompany"
        t-placeholder="Tên công ty"
      />
      <contenteditable
        tag="span"
        :contenteditable="isEditable"
        v-model="value.Position"
        class="t-hover profile-field exp-position"
        t-placeholder="Vị trí công việc"
      />
      <contenteditable
        tag="div"
        :contenteditable="isEditable"
        :noHTML="false"
        v-model="value.Detail"
        class="t-hover profile-field exp-detail"
        t-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
      />
    </div>

    <div style="clear:both;"></div>
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
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.row {
  line-height: 15pt;
  padding-top: 0.15cm;
  //   &:hover {
  //     border: 1px solid #eee;
  //   }
  .exp-time {
    padding: 1mm 0;
    width: 5cm;
    float: left;
  }
  .company {
    width: 11cm;
    padding: 1pt;
    float: left;
    .exp-namecompany {
      font-weight: 700;
      min-width: 5cm;
      display: block;
    }
  }
}
</style>
