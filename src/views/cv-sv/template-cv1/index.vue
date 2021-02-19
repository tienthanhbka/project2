<template>
  <div class="template-cv1">
    <profile-info />
    <div :key="acc">
      <div v-for="(item, index) in lines" :key="index" id="row">
        <div class="tooltip">
          <div class="group-button">
            <span
              class="item menu"
              title="Chỉnh sửa bố cục trang"
              @click="editLayout(index)"
              ><i class="fas fa-bars" style="font-size:14px;"></i
            ></span>
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
            <span class="item hide" @click="hideItem(index)"
              ><i class="fas fa-minus"></i> Ẩn mục</span
            >
          </div>
        </div>
        <component
          :data="index"
          :is="item.value"
          :class="item.active ? '' : 'active'"
          @select="selectRow(item)"
        ></component>
      </div>
    </div>
  </div>
</template>
<script>
import ProfileInfo from "./sv-profile-infomation/profile-info";
import Item1 from "./sv-profile-objective/profile-objective";
import Item2 from "./sv-profile-education/profile-education";
import Item3 from "./sv-profile-exp/profile-exp";
import Item4 from "./sv-profile-activity/profile-activity";
import Item5 from "./sv-profile-certification/profile-certification.vue";
import Item6 from "./sv-profile-award/profile-award.vue";
import Item7 from "./sv-profile-additional/profile-additional.vue";
import Item8 from "./sv-profile-reference/profile-reference.vue";
import Item9 from "./sv-profile-skills/profile-skill.vue";
import Item10 from "./sv-profile-interest/profile-interest";
import Item11 from "./sv-profile-project/profile-project.vue";

export default {
  props: ["MenuItemLst"],
  components: {
    ProfileInfo,
    Item1,
    Item2,
    Item3,
    Item4,
    Item5,
    Item6,
    Item7,
    Item8,
    Item9,
    Item10,
    Item11
  },
  data() {
    return {
      lines: [],
      acc: 0
    };
  },
  methods: {
    /*Thêm các mục vào bố cục */
    addItemCV() {
      let _this = this;
      _this.lines = [];
      _this.MenuItemLst.forEach(element => {
        _this.lines.push({
          value: "item" + element.value,
          active: true,
          index: element.value,
          label: element.label,
          icon: element.icon
        });
      });
      console.log(_this.lines);
    },
    /*Ẩn mục*/
    hideItem(index) {
      let item = this.lines[index];
      item.active = !item.active;
      this.$set(this.lines, index, item);
    },
    /*Hiển thị view chỉnh sửa bố cục*/
    editLayout() {
      let x = document.getElementById("container-edit");
      if (x.style.display == "none") {
        x.style.display = "block";

        this.active = true;
      } else {
        x.style.display = "none";
      }
    },
    /*Chuyển mục lên phía trên*/
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
    /* Khi click -> Hiển thị view suggestion*/
    selectRow(row) {
      this.$emit("selectRow", row);
    }
  },
  mounted() {
    this.addItemCV();
  },
  created() {},
  watch: {
    MenuItemLst() {
      this.lines = [];
      this.addItemCV();
    }
  }
};
</script>
<style lang="scss" scoped>
#row {
  .tooltip {
    display: none;
  }
  &:hover {
    position: relative;
    box-shadow: 0 0 0 2px #ccc inset;
    border-radius: 0 4px 4px 4px;
    -moz-border-radius: 0 4px 4px 4px;
    -webkit-border-radius: 0 4px 4px 4px;
    .tooltip {
      display: inline-block;
      background-color: #ccc;
      height: 36px;
      margin-top: -36px;
      position: absolute;
      border-radius: 4px 4px 0 0;
      padding: 5px;
      .group-button {
        .item {
          display: inline-block;
          padding: 5px 8px;
          width: 30px;
          border-radius: 5px;
          text-align: center;
          background-color: #fff;
          &:hover {
            color: #02bc77;
            cursor: pointer;
          }
        }
        .hide {
          background-color: #f80000;
          opacity: 0.8;
          color: #fff;
          font-weight: 700;
          font-size: 10pt;
          width: auto;
          padding: 5px 10px;
          &:hover {
            opacity: 1;
            color: #fff;
          }
        }
      }
    }
  }
  .active {
    display: none;
  }
}
</style>
