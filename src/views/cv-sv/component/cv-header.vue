<template>
  <div class="container-header">
    <div class="header-top">
      <div class="header">
        <ul>
          <li class="item-header">
            <div class="title">Ngôn ngữ</div>
            <div class="icon">
              <span style="display:inline;    margin: 0 3px;">
                <img src="https://www.topcv.vn/images/en.png" />
              </span>
              <span style="display:inline;    margin: 0 3px;">
                <img src="https://www.topcv.vn/images/vi.png" />
              </span>
            </div>
          </li>
          <li class="item-header" style="min-width:100px;">
            <div class="title">Tông màu</div>
            <div class="icon">
              <span class="border-icon">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </li>
          <li class="item-header">
            <div class="title">Font-chữ</div>
            <div class="icon">
              <el-select
                v-model="FontFamily"
                @change="changeSelect"
                size="mini"
                class="el-select-custom"
              >
                <el-option
                  v-for="item in FontFamilyLst"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </li>
          <li class="item-header">
            <div class="title">Cỡ chữ</div>
            <div class="icon">
              <span
                class="group"
                v-for="(item, index) in FontSizeLst"
                :key="index"
                :class="!item.active ? '' : 'active'"
                @click="SelectItemFont(index)"
              >
                <i
                  class="fas fa-font"
                  :style="'font-size:' + item.size + 'px'"
                ></i>
              </span>
            </div>
          </li>
          <li class="item-header">
            <div class="title">Cách dòng</div>
            <div class="icon">
              <span
                class="group"
                v-for="(item, index) in MarginLst"
                :key="index"
                :class="!item.active ? '' : 'active'"
                @click="SelectItemMargin(index)"
              >
                <i
                  class="fas fa-arrows-alt-v"
                  :style="'font-size:' + item.size + 'px'"
                ></i>
              </span>
            </div>
          </li>
          <li class="item-header button" @click="editLayout">
            <div class="title">Thêm mục</div>
            <div class="icon">
              <span><i class="fas fa-plus-circle"></i></span>
            </div>
          </li>
          <li class="item-header button">
            <div class="title">Đỗi mẫu CV</div>
            <div class="icon">
              <span><i class="far fa-copy"></i></span>
            </div>
          </li>
          <li
            class="item-header button"
            style="background-color:#00b14f;color:#fff;min-width:100px;"
            @click="saveCV()"
          >
            <div>Lưu lại</div>
            <div class="icon">
              <span><i class="far fa-save" style="color:#fff;"></i></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="header-bottom">
      <div class="bottom">
        <div class="editer-controls">
          <span class="item" title="Chữ đậm">
            <i class="fas fa-bold"></i>
          </span>
          <span class="item" title="Chữ in nghiêng">
            <i class="fas fa-italic"></i>
          </span>
          <span title="Chữ gạch chân" class="item">
            <i class="fas fa-underline"></i>
          </span>
        </div>
        <div class="editer-controls">
          <span class="item" title="Can lề trái">
            <i class="fas fa-align-left"></i>
          </span>
          <span class="item" title="Căn lề phải">
            <i class="fas fa-align-right"></i>
          </span>
          <span title="Căn lề giữa" class="item">
            <i class="fas fa-align-center"></i>
          </span>
          <span title="Can lề hai bên" class="item">
            <i class="fas fa-align-justify"></i>
          </span>
        </div>
        <div class="editer-controls">
          <span class="item" title="Lùi trước">
            <i class="fas fa-undo"></i>
          </span>
          <span class="item" title="Kế tiếp">
            <i class="fas fa-redo"></i>
          </span>
          <span title="Xóa" class="item">
            <i class="fas fa-eraser"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false,
      FontFamily: "arial,sans-serif,tahoma",
      FontFamilyLst: [
        {
          label: "Arial",
          value: "arial,sans-serif,tahoma"
        },
        {
          label: "Times New Roman",
          value: "times new roman,serif"
        },
        {
          label: "Sans-serif",
          value: "sans-serif,arial,tahoma"
        },
        {
          label: "Tahoma",
          value: "tahoma,sans-serif,arial,tahoma"
        }
      ],
      FontSizeLst: [
        {
          label: "small",
          value: 9,
          active: false,
          size: 10
        },
        {
          label: "medium",
          value: 10,
          active: true,
          size: 14
        },
        {
          label: "large",
          value: 11,
          active: false,
          size: 18
        }
      ],
      MarginLst: [
        {
          label: "small",
          value: 0.3,
          active: false,
          size: 10
        },
        {
          label: "medium",
          value: 0.7,
          active: true,
          size: 14
        },
        {
          label: "large",
          value: 0.8,
          active: false,
          size: 18
        }
      ]
    };
  },
  methods: {
    editLayout() {
      let btns = document.getElementsByClassName("button");
      for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          if (document.getElementsByClassName("active")) {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
          }
        });
      }
      this.$emit("editLayout");
    },
    changeSelect(val) {
      let x = document.getElementById("cv-document");
      x.style.fontFamily = val;
    },
    SelectItemFont(index) {
      //console.log(index);
      let _this = this;
      _this.FontSizeLst.forEach(function(item2, index2, arr) {
        if (index === index2 && item2.active === false) {
          item2.active = !item2.active;
          _this.$set(_this.FontSizeLst, index2, item2);
          _this.$emit("ChangeFontSize", item2);
        } else {
          item2.active = false;
        }
      });
    },
    SelectItemMargin(index) {
      //console.log(index);
      let _this = this;
      _this.MarginLst.forEach(function(item2, index2, arr) {
        if (index === index2 && item2.active === false) {
          item2.active = !item2.active;
          _this.$set(_this.MarginLst, index2, item2);
          let blocks = document.getElementsByClassName("cv-block");
          console.log(blocks);
          for (let i = 0; i < blocks.length; i++) {
            console.log(blocks[i].style.padding);
          }
          // if (x.style.display == "block") {
          //   x.style.display = "none";
          // }
        } else {
          item2.active = false;
        }
      });
    },
    saveCV() {
      this.$emit("saveCV");
    }
  },
  watch: {}
};
</script>
<style lang="scss" scoped>
.container-header {
  width: 100%;
  margin-bottom: 3px;

  .header-top {
    height: 76px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 #ccc;
    border-top: 1px solid #e5e5e5;
    .header {
      width: 1170px;
      margin: 0 auto;
      ul {
        list-style-type: none;
        line-height: 20px;
        margin: 0;
        padding: 0;
        li {
          float: left;
          font-size: 14px;
          padding: 10px;
          text-align: center;
          border-right: 1px solid #eee;

          .title {
            color: #666;
          }
          .icon {
            margin: 7px 0 0;
            text-align: center;
            cursor: pointer;
            img {
              height: 22px;
              border: 1px solid #eee;
              border-radius: 3px;
            }
            i {
              color: #666;
            }
            .border-icon {
              height: 22px;
              width: 22px;
              display: inline-block;
              border-radius: 50%;
              margin: 0 3px;

              border: 1px solid transparent;
              text-align: center;
              vertical-align: middle;
              background-color: #666;
              i {
                color: #fff;
              }
            }
            // .font-family {
            //   border: 1px solid #eee;
            //   font-size: 10pt;
            //   width: 120px;
            //   padding: 5px 3px;
            //   color: #444;
            //   -webkit-appearance: none;
            //   -moz-appearance: none;
            //   appearance: none;
            //   background: url(https://cdn.iconscout.com/icon/free/png-256/down-arrow-16-460295.png)
            //     96% / 15% no-repeat #fff;
            //   &:focus {
            //     outline: none;
            //   }
            // }
          }
          .group {
            display: block;
            float: left;
            margin: 0 2px;
            border-radius: 50%;
            height: 24px;
            width: 24px;
            line-height: 23px;
            &:hover {
              margin: 0 3px;
              line-height: 20px;
              border: 1px solid transparent;
              text-align: center;
              vertical-align: middle;
              background-color: #666;
              i {
                color: #fff;
              }
            }
          }
          .active {
            display: block;
            float: left;
            margin: 0 2px;
            border-radius: 50%;
            height: 24px;
            width: 24px;
            line-height: 20px;
            border: 1px solid transparent;
            text-align: center;
            background-color: #666;
            i {
              color: #fff;
            }
          }
        }
        .active {
          background-color: #eee;
        }
      }
      .button {
        padding: 10px 25px;
        cursor: pointer;
        span {
          margin: 0 2px;
          width: 24px;
          height: 24px;
          i {
            font-size: 26px;
          }
        }
      }
    }
  }
}
.header-bottom {
  width: 1170px;
  margin: 0 auto;
  .bottom {
    box-shadow: 0 1px 2px 0 #ccc;
    color: #333;
    background-color: #fff;
    width: 210mm;
    padding: 5px;
    padding-left: 25px;
    text-align: center;
    .editer-controls {
      display: inline-block;
      margin-right: 20px;
      border-radius: 3px;
      .item {
        display: inline-block;
        float: left;
        cursor: pointer;
        min-width: 30px;
        height: 28px;
        padding: 5px 12px;
        border: 1px solid #efefef;
        border-right: 0;

        i {
          color: #888;
          cursor: not-allowed;
          font-size: 14px;
          border-right: 0 !important;
        }
        &:hover {
          background-color: #929493;
          i {
            color: #fff;
          }
        }
      }
      :last-child {
        border-right: 1px solid #efefef;
      }
    }
  }
}
</style>
