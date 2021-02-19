<template>
  <div class="container-body-cv">
    <div class="container-body">
      <div class="container">
        <div class="cv-content">
          <div class="cv-header-title" contenteditable t-placeholder="Tiêu đề">
            United CV
          </div>
          <div class="cv-document-root">
            <div id="cv-document" :style="'font-size:' + size + 'pt'">
              <div class="cv-page" id="content">
                <div class="sub-page">
                  <cv1
                    :MenuItemLst="SelectLst"
                    @selectRow="SelectRow"
                    id="print"
                  ></cv1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cv-suggestion">
        <div class="unikey">
          <a href=""
            ><i class="fas fa-keyboard"></i> Hướng dẫn sửa lỗi gõ tiếng Việt</a
          >
        </div>
        <div id="cv-suggestion-inner">
          <div class="cv-suggestion-default">
            <div v-if="Item == null">
              <h4>
                <i class="fas fa-info-circle"></i>
                Hướng dẫn
              </h4>
              <ol>
                <li>Điền đầy đủ các thông tin hiển thị trong CV</li>
                <li>Bấm nút <b>Lưu CV</b></li>
                <li>Xem & Tải CV về máy</li>
              </ol>
              <p style="line-height: 20px; margin-bottom: 10px;">
                Một số lưu ý chung:
              </p>
              <ul>
                <li>Sắp xếp thời gian theo thứ tự mới -> cũ.</li>
                <li>
                  Ưu tiên những gì quan trọng, có liên quan đến vị trí ứng tuyển
                  lên đầu.
                </li>
                <li>Ngày tháng nên dùng: 01/2020, 01-2020 hoặc Jan 2020</li>
              </ul>
            </div>
            <div v-else>
              <h4>
                <i :class="Item.icon"></i>
                {{ Item.label }}
              </h4>
              <component :is="'suggestion' + Item.index"></component>
            </div>
          </div>
          <div class="cv-suggestion-footer">
            Mọi chi tiết vui lòng liên hệ:
            <br />
            Email: ctsv@hust.edu.vn
          </div>
        </div>
      </div>
    </div>
    <div id="container-edit" style="display:none;">
      <div class="layout-edit">
        <ul class="guide">
          <li>Tích chọn mục bạn muốn hiển thị ra CV.</li>
          <li>Giữ chuột tại một mục và kéo thả để thay đổi thứ tự các mục.</li>
        </ul>
        <div class="menu-edit">
          <div class="item info">
            Thông tin liên hệ
          </div>
        </div>
        <div class="menu-edit">
          <div
            class="item info sortable-handle"
            v-for="(item, index) in MenuItemLst"
            :key="index"
          >
            <div
              class="selector"
              :class="!item.active ? '' : 'active'"
              :key="index"
              @click="SelectItem(index)"
            >
              <i class="fas fa-check"></i>
            </div>
            <span>
              {{ item.label }}
            </span>
            <i class="fas fa-bars icon"></i>
          </div>
        </div>
        <div class="action-bars">
          <div class="actions">
            <a href="#" @click="selectAll">
              <i class="fas fa-bars"></i>
              Bố cục mặc định
            </a>
            <a href="#" @click="selectAll">
              <i class="el-icon-circle-check"></i>
              Chọn hết
            </a>
            <a href="#" @click="clearSelect">
              <i class="el-icon-remove-outline"></i>
              Bỏ chọn hết
            </a>
          </div>
          <button class="btn-ctsv btn-finish" @click="updateCV">
            Cập nhật
          </button>
          <button class="btn-ctsv btn-cancel" @click="Cancel">Hủy</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Cv1 from "../template-cv1/index";
import html2PDF from "html-pdf-adaptive";

import suggestion from "../template-cv1/sv-profile-infomation/component/suggestion";
import suggestion1 from "../template-cv1/sv-profile-objective/component/suggestion";
import suggestion2 from "../template-cv1/sv-profile-education/component/suggestion";
import suggestion3 from "../template-cv1/sv-profile-exp/component/suggestion";
import suggestion4 from "../template-cv1/sv-profile-activity/component/suggestion";
import suggestion5 from "../template-cv1/sv-profile-certification/component/suggestion";
import suggestion6 from "../template-cv1/sv-profile-award/component/suggestion";
import suggestion7 from "../template-cv1/sv-profile-additional/component/suggestion";
import suggestion8 from "../template-cv1/sv-profile-reference/component/suggestion";
import suggestion9 from "../template-cv1/sv-profile-skills/component/suggestion";
import suggestion10 from "../template-cv1/sv-profile-interest/component/suggestion";

import suggestion11 from "../template-cv1/sv-profile-project/component/suggestion";

export default {
  props: {
    size: {
      type: Number,
      required: true
    }
  },
  watch: {
    size() {
      console.log(this.size);
    }
  },
  components: {
    Cv1,
    suggestion1,
    suggestion2,
    suggestion3,
    suggestion4,
    suggestion5,
    suggestion6,
    suggestion7,
    suggestion8,
    suggestion9,
    suggestion10,
    suggestion11,
    suggestion
  },
  data() {
    return {
      value: false,
      check: 0,

      Item: null,
      MenuItemLst: [
        {
          value: 1,
          label: "Mục tiêu nghề nghiệp",
          icon: "fas fa-check-circle",
          active: false
        },
        {
          value: 2,
          label: "Học vấn",
          icon: "fas fa-graduation-cap",
          active: false
        },
        {
          value: 3,
          label: "Kinh nghiệm làm việc",
          icon: "fas fa-briefcase",
          active: false
        },
        {
          value: 4,
          label: "Hoạt động",
          icon: "fas fa-users",
          active: false
        },
        {
          value: 5,
          label: "Chứng chỉ",
          icon: "fas fa-trophy",
          active: false
        },
        {
          value: 6,
          label: "Giải thưởng",
          icon: "fas fa-trophy",
          active: false
        },
        {
          value: 7,
          label: "Thông tin thêm",
          icon: "fas fa-pencil-alt",
          active: false
        },
        {
          value: 8,
          label: "Người tham chiếu",
          icon: "fas fa-bookmark",
          active: false
        },
        {
          value: 9,
          label: "Các kĩ năng",
          icon: "fas fa-magic",
          active: false
        },
        {
          value: 10,
          label: "Sở thích",
          icon: "fas fa-heart",
          active: false
        },
        {
          value: 11,
          label: "Dự án",
          icon: "fas fa-project-diagram",
          active: false
        }
      ],
      SelectLst: []
    };
  },
  methods: {
    SelectItem(index) {
      console.log(index);
      let item = this.MenuItemLst[index];
      item.active = !item.active;
      this.$set(this.MenuItemLst, index, item);
    },
    updateCV() {
      this.SelectLst = [];
      this.MenuItemLst.forEach(item => {
        if (item.active) {
          this.SelectLst.push(item);
        }
      });
      this.Cancel();
      console.log(this.SelectLst);
    },
    Cancel() {
      let x = document.getElementById("container-edit");
      if (x.style.display == "block") {
        x.style.display = "none";
      }
    },
    SelectRow(row) {
      this.Item = row;
    },
    selectAll() {
      let _this = this;
      _this.MenuItemLst.forEach(function(item, index, arr) {
        if (item.active === false) {
          let item = _this.MenuItemLst[index];
          item.active = true;
          _this.$set(_this.MenuItemLst, index, item);
        }
      });
    },
    clearSelect() {
      let _this = this;
      _this.MenuItemLst.forEach(function(item, index, arr) {
        if (item.active === true) {
          let item = _this.MenuItemLst[index];
          item.active = false;
          _this.$set(_this.MenuItemLst, index, item);
        }
      });
    },
    // print() {
    // var headstr = "<html><head><title></title></head><body>";
    // var footstr = "</body>";
    // var newstr = document.all.item("print").innerHTML;
    // var oldstr = document.body.innerHTML;
    // document.body.innerHTML = newstr;
    // window.print();
    // document.body.innerHTML = oldstr;
    // return false;
    // html2canvas(this.$refs.content).then(canvas => {
    //   var imgData = canvas.toDataURL("image/png");
    //   var margin = -2;
    //   //var scale = 1.5
    //   if (screen.width == 1366) {
    //     var imgWidth = 210;
    //   } else if (screen.width == 1920) {
    //     var imgWidth = 210;
    //   }
    //   //210
    //   //var imgWidth = 210;
    //   var pageHeight = 295; //295;
    //   var imgHeight = (canvas.height * imgWidth) / canvas.width;
    //   var heightLeft = imgHeight;
    //   var doc = new jsPDF("p", "mm", "letter");
    //   var position = 0;
    //   doc.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
    //   heightLeft -= pageHeight;
    //   while (heightLeft >= 0) {
    //     position = heightLeft - imgHeight;
    //     doc.addPage();
    //     doc.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
    //     heightLeft -= pageHeight;
    //   }
    //   doc.addPage();
    //   doc.save("file.pdf");
    // });
    //var doc = new jsPDF("p", "mm", "a4");
    // doc.html(document.querySelector("#print"), {
    //   callback: function(doc) {
    //     doc.setFont("'Trebuchet MS', Arial, Helvetica, sans-serif");
    //     doc.setTextColor("#02bc77");
    //     doc.save("MLB World Series Winners.pdf");
    //   }
    // });
    //},
    print() {
      const el = document.getElementById("content");
      //html2PDF(el);
      html2PDF(el, {
        // split PDF into several pages
        pagesplit: true,

        // p = portrait
        // l = for landscape
        orientation: "p",

        // unit
        unit: "mm",

        // PDF size: A1, A3, B1, Letter, Legal, ...
        format: "a4",

        // x/y offsets
        offset: {},

        // save, bloburl, file
        outputType: "save",

        // custom header/footer
        // header: createHeaderAndFooterElement,
        // footer: createHeaderAndFooterElement,

        useDefaultFoot: false,

        // or 'fixed'
        mode: "adaptive",

        // file name
        filename: "demo",

        // toggle CSS styles
        isToggleStyle: true,

        // attempt to load images from a server using CORS
        useCORS: true
      });
    },
    editLayout() {
      let x = document.getElementById("container-edit");
      if (x.style.display == "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
  },
  mounted() {
    this.SelectLst = this.MenuItemLst;
  }
};
</script>
<style lang="scss" scoped>
.container-body-cv {
  padding-bottom: 100px;
  position: relative;
  .container-body {
    width: 1170px;
    margin: 0 auto;
    .container {
      width: 210mm;
      float: left;
      margin-top: 10px;
      .cv-content {
        width: 210mm;
        min-height: 290mm;
        .cv-header-title {
          padding: 5px 0px;
          width: 100%;
          margin: 0 auto;
          text-align: center;
          margin-bottom: 8px;
          font-size: 20px;
          outline: 1px dashed #ccc;
          &:empty:before {
            content: attr(t-placeholder);
            color: #9197a3;
            font-weight: 100;
            padding: 3px;
          }
        }
        .cv-document-root {
          padding: 0;
          margin: 0 auto;
          font-size: 12pt;
          position: relative;
          #cv-document {
            color: #000;
            font-family: arial, sans-serif, tahoma;
            font-size: 10pt;
            width: 100%;

            .cv-page {
              padding: 15mm;
              margin: 0 auto;
              background-color: #fff;
              box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
              width: 210mm;
              min-height: 295mm;
              .sub-page {
                padding: 5mm;
                min-height: 200mm;
              }
            }
          }
        }
      }
      &:after {
        clear: both;
        content: "";
      }
    }
    .cv-suggestion {
      float: right;
      padding: 0 0 10px 10px;
      width: 374px;
      color: #555;
      line-height: 1.4em;
      font-size: 14px;
      overflow-y: auto;
      overflow-x: hidden;
      height: auto;
      .unikey {
        padding: 5px 0;
        padding-left: 5px;
        border: 1px dashed #ccc;
        a {
          color: #0da171;
          font-weight: 500;
        }
      }
      #cv-suggestion-inner {
        margin-top: 0;
        width: 374px;
        padding-right: 10px;
        .cv-suggestion-default {
          h4 {
            font-size: 22px;
            font-weight: inherit;
            padding-bottom: 5px;
            margin-top: 5px;
            margin-bottom: 5px;
            border-bottom: 1px solid #ddd;
          }
          ol {
            list-style: decimal;
            padding-left: 16px;
            margin: 0 0 8px;
          }
          ul {
            list-style: disc;
            padding-left: 16px;
            margin: 0 0 8px;
          }
        }
        .cv-suggestion-footer {
          border-top: 1px solid #ddd;
          padding-top: 5px;
        }
      }
    }
    &:after {
      display: block;
      height: 0;
      width: 0;
      content: " ";
      clear: both;
    }
  }
  // #container-edit {
  //   display: none;
  // }
  #container-edit {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 1100;
    .layout-edit {
      width: 450px;
      margin: 30px auto 0;
      background-color: #fff;
      font-size: 14px;
      .guide {
        border: 1px dashed #fcfcfc;

        line-height: 20px;
        padding-left: 36px;
        margin-bottom: 15px;
        li {
          list-style: circle;
          &::marker {
            unicode-bidi: isolate;
            font-variant-numeric: tabular-nums;
            text-transform: none;
            text-indent: 0px !important;
            text-align: start !important;
            text-align-last: start !important;
          }
        }
      }
      .menu-edit {
        background-color: #efefef;
        padding: 10px 15px 1px 14px;
        margin-bottom: 10px;
        border-radius: 3px;
        .item {
          background-color: #ccc;
          padding: 10px 40px;
          margin-bottom: 10px;
          font-weight: 500;
          border-radius: 3px;
          position: relative;
          .selector {
            position: absolute;
            left: 8px;
            top: 7px;
            font-size: 18px;
            color: #666;
            height: 20px;
            width: 20px;
            background-color: #fff;
            border-radius: 3px;
            cursor: pointer;
            text-align: center;
            line-height: 20px;
            i {
              display: none;
            }
          }
          .active {
            i {
              display: block;
            }
          }
          .icon {
            position: absolute;
            right: 8px;
            top: 5px;
            font-size: 28px;
            color: #666;
            cursor: pointer;
          }
        }
        .sortable-handle {
          cursor: move;
          &:hover {
            background-color: #aaa;
          }
        }
      }
      .action-bars {
        position: fixed;
        bottom: 8px;
        background-color: #efefef;
        width: 450px;
        padding: 8px 0;
        border: 1px solid #ccc;
        text-align: center;
        .actions {
          margin-bottom: 15px;
          a {
            display: inline-block;
            margin-right: 10px;
            &:hover {
              color: #0277bc;
            }
          }
        }
        .btn-ctsv {
          display: inline-block;
          padding: 10px 25px;
          background-color: #ddd;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
          border: none;
          font-weight: 500;
          color: #555;
          margin: 0 5px;
          transition: all 0.1s;
          &:focus {
            outline: 0;
          }
        }
        .btn-finish {
          color: #fff;
          background-color: #337ab7;
          border-color: #2e6da4;
        }
      }
    }
  }
}
.sticky-suggestion {
  position: fixed;
  top: 90px;
  transition: 0.5s;
}
</style>
