<template>
  <div class="row">
    <div class="education-time">
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
    <div class="school">
      <contenteditable
        tag="span"
        :contenteditable="isEditable"
        v-model="value.NameSchool"
        class="t-hover profile-field education-nameschool"
        t-placeholder="Tên trường học"
      />
      <contenteditable
        tag="span"
        :contenteditable="isEditable"
        v-model="value.Course"
        class="t-hover profile-field education-title"
        t-placeholder="Ngành học/môn học"
      />
      <contenteditable
        tag="div"
        :contenteditable="isEditable"
        :noHTML="false"
        v-model="value.Detail"
        class="t-hover profile-field education-detail"
        t-placeholder="Mô tả chi tiết."
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

  .education-time {
    padding: 1mm 0;
    width: 5cm;
    float: left;
  }
  .school {
    width: 11cm;
    padding: 1pt;
    float: left;
    .education-nameschool {
      font-weight: 700;
      min-width: 5cm;
      display: block;
    }
  }
}
</style>
