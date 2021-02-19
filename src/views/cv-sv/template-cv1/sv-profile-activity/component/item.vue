<template>
  <div class="row">
    <div class="activity-time">
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
    <div class="activity">
      <contenteditable
        tag="span"
        :contenteditable="isEditable"
        v-model="value.NameOrganization"
        class="t-hover profile-field activity-nameorganization"
        t-placeholder="Tên tổ chức"
      />
      <contenteditable
        tag="span"
        :contenteditable="isEditable"
        v-model="value.Position"
        class="t-hover profile-field activity-title"
        t-placeholder="Vị trí tham gia"
      />
      <contenteditable
        tag="div"
        :contenteditable="isEditable"
        v-model="value.Detail"
        class="t-hover profile-field activity-detail"
        t-placeholder="Mô tả chi tiết các hoạt động đã tham gia."
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
  padding-top: 0.15cm;
  line-height: 15pt;
  //   &:hover {
  //     border: 1px solid #eee;
  //   }
  .activity-time {
    padding: 1mm 0;
    width: 5cm;
    float: left;
  }
  .activity {
    width: 11cm;
    padding: 1pt;
    float: left;
    .activity-nameorganization {
      font-weight: 700;
      min-width: 5cm;
      display: block;
    }
  }
}
</style>
