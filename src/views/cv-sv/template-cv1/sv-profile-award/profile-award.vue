<template>
  <div class="profile-award" @click="selectItem">
    <div class="cv-controls"></div>

    <div class="award cv-block">
      <h3
        class="t-hover block-title"
        contenteditable
        t-placeholder="Tiêu đề mục lớn"
      >
        Giải thưởng
      </h3>
      <div class="award-table">
        <div :key="acc">
          <div v-for="(item, index) in lines" :key="index" class="row-item">
            <div class="group-button">
              <span
                class="item up"
                title="Chuyển mục này lên trên"
                @click="upItem(index)"
                ><i class="fas fa-caret-up"></i
              ></span>
              <span
                class="item down"
                title="Chuyển mục này xuống dưới"
                @click="downItem(index)"
                ><i class="fas fa-sort-down"></i
              ></span>
              <span class="item plus" @click="addItem(index)"
                ><i class="fas fa-plus" style="font-size:10px"></i> Thêm</span
              >
              <span
                class="item minus"
                @click="removeItem(index)"
                v-if="index > 0 || lines.length > 1"
                ><i class="fas fa-minus" style="font-size:10px"></i> Xóa</span
              >
            </div>
            <item v-model="item.value"></item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import item from "./component/item";

export default {
  components: { item },
  data() {
    return {
      lines: [],
      acc: 0,
      AwardInfo: {
        TimeReach: "12/2020",
        NameAward: "Sinh viên 5 tốt năm 2020"
      }
    };
  },
  methods: {
    addItem(index) {
      //   let checkEmptyLines = this.lines.filter(line => line.Data === null);
      //   console.log(checkEmptyLines);
      //   if (checkEmptyLines.length >= 1 && this.lines.length > 0) return;
      this.lines.push({
        Data: null,
        ID: this.lines.length + 1,
        value: {
          TimeReach: this.AwardInfo.TimeReach,
          NameAward: this.AwardInfo.NameAward
        }
      });
      console.log(this.lines);
    },
    removeItem(index) {
      console.log(index);
      this.lines.splice(index, 1);
    },
    upItem(index) {
      if (index > 0 && this.lines.length > 1) {
        let a = this.lines[index];
        this.lines[index] = this.lines[index - 1];
        this.lines[index - 1] = a;
        this.acc++;
      }
    },
    /*Chuyển mục xuống phía dưới*/
    downItem(index) {
      if (index < this.lines.length - 1) {
        let a = this.lines[index];
        this.lines[index] = this.lines[index + 1];
        this.lines[index + 1] = a;
        this.acc++;
      }
    },
    selectItem() {
      this.$emit("select");
    }
  },
  mounted() {
    this.addItem();
  }
};
</script>

<style lang="scss" scoped>
.profile-award {
  .award {
    h3 {
      margin: 0;
      padding: 0;
    }

    .award-table {
      width: 100%;
      margin: 0 auto;
      margin-top: 0.2cm;
      .row-item {
        border-bottom: 0.05cm solid #eee;
        line-height: 15pt;
        padding: 0.15cm 0;
        .group-button {
          display: none;
        }
        &:hover {
          position: relative;
          box-shadow: 0 0 1px #999;
          .group-button {
            display: inline-block;
            position: absolute;
            height: 24px;
            margin-top: -26px;
            right: 0;
            .item {
              border: 1px solid #ccc;
              padding: 5px 8px;
              border-radius: 6px;
              background: #fff;
              &:hover {
                color: #02bc77;
                border-color: #02bc77;
                cursor: pointer;
              }
            }
            .plus {
              padding: 5px;
              background-color: #06a56b;
              border: none;
              border-radius: 5px;

              opacity: 0.8;
              color: #fff;
              font-weight: 700;
              font-size: 10pt;
              &:hover {
                opacity: 1;
                color: #fff;
              }
            }
            .minus {
              padding: 5px;
              background-color: #f21b1b;
              border: none;
              border-radius: 5px;

              opacity: 0.8;
              color: #fff;
              font-weight: 700;
              font-size: 10pt;
              &:hover {
                opacity: 1;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
