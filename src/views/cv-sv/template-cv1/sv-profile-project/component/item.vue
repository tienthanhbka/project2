<template>
  <div class="block-body">
    <div class="project">
      <div class="project-title">
        <contenteditable
          tag="h4"
          :contenteditable="isEditable"
          v-model="value.NameProject"
          class="t-hover project-name"
          t-placeholder="Tên dự án"
        />
        <div class="time">
          (
          <contenteditable
            tag="span"
            :contenteditable="isEditable"
            v-model="value.TimeStart"
            class="t-hover time-start"
            t-placeholder="Bắt đầu"
          />
          -
          <contenteditable
            tag="span"
            :contenteditable="isEditable"
            v-model="value.TimeEnd"
            class="t-hover time-end"
            t-placeholder="Kết thúc"
          />)
        </div>
      </div>
      <div class="project-detail">
        <table border="1">
          <tbody>
            <tr>
              <th>Khách hàng</th>
              <contenteditable
                tag="td"
                :contenteditable="isEditable"
                v-model="value.Customer"
                class="t-hover customer"
                t-placeholder="Khách hàng"
              />
            </tr>
            <tr>
              <th>Mô tả dự án</th>
              <contenteditable
                tag="td"
                :contenteditable="isEditable"
                v-model="value.Description"
                class="t-hover description"
                t-placeholder="Mô tả dự án"
              />
            </tr>
            <tr>
              <th>Số lượng thành viên</th>
              <contenteditable
                tag="td"
                :contenteditable="isEditable"
                v-model="value.TeamSize"
                class="t-hover team-size"
                t-placeholder="Số lượng thành viên"
              />
            </tr>
            <tr>
              <th>Vị trí công việc</th>
              <contenteditable
                tag="td"
                :contenteditable="isEditable"
                v-model="value.MyPosition"
                class="t-hover my-position"
                t-placeholder="Vị trí công việc"
              />
            </tr>
            <tr>
              <th>Vai trò trong dự án</th>
              <contenteditable
                tag="td"
                :contenteditable="isEditable"
                v-model="value.MyResponsibility"
                class="t-hover my-responsibility"
                t-placeholder="Vai trò trong dự án"
              />
            </tr>
            <tr>
              <th>Công nghệ sử dụng</th>
              <contenteditable
                tag="td"
                :contenteditable="isEditable"
                v-model="value.TechnologyUsed"
                class="t-hover technology-used"
                t-placeholder="Công nghệ sử dụng trong dự án"
              />
            </tr>
          </tbody>
        </table>
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
  margin-top: 0.2cm;

  .project {
    h4 {
      margin: 0;
      padding: 0;
    }

    .project-title {
      padding: 10px 0;

      .project-name {
        font-size: 12pt;
        line-height: 16pt;
        font-weight: 700;
        color: #000;
        width: 100%;
        margin-bottom: 1px;
      }
      .time {
        .time-start .time-end {
          min-width: 70px;
          text-align: center;
          display: inline-block;
        }
      }
    }
    .project-detail {
      table,
      th,
      td {
        border: 1px solid #999;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        th,
        td {
          padding: 3pt;
        }
        th {
          width: 24%;
          font-weight: 700;
          text-align: left;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
