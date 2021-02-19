<template>
  <div class="profile-info" @click="selectItem">
    <div class="cv-controls">
      <div class="group-button">
        <span
          class="item menu"
          title="Chỉnh sửa bố cục trang"
          @click="editLayout"
          ><i class="fas fa-bars" style="font-size:14px;"></i
        ></span>
      </div>
    </div>
    <div class="infomation cv-block">
      <table class="info-table" cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <td class="sv-avatar" rowspan="9">
              <img
                class="t-hover profile-field"
                src="/img/appicon.png"
                width="116"
                height="116"
                alt=""
              />
            </td>
            <td>
              <span
                class="sv-namestudent t-hover profile-field"
                contenteditable
                t-placeholder="Họ Tên"
              >
                Nguyễn Tiến Thành
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span
                class="position t-hover profile-field"
                contenteditable
                t-placeholder="Vị trí công việc bạn muốn ứng tuyển"
              ></span>
            </td>
          </tr>
          <tr>
            <td>
              <span class=" profile-label">Ngày sinh:</span>
              <span
                class="t-hover profile-field"
                contenteditable
                t-placeholder="Ngày sinh"
                >20/11/1999</span
              >
            </td>
          </tr>
          <tr>
            <td>
              <span class=" profile-label">Giới tính:</span>
              <span
                class="t-hover profile-field"
                contenteditable
                t-placeholder="Giới tính"
                >Nam</span
              >
            </td>
          </tr>
          <tr>
            <td>
              <span class=" profile-label">Điện thoại:</span>
              <span
                class="t-hover profile-field"
                contenteditable
                t-placeholder="Điện thoại"
                >0972671120</span
              >
            </td>
          </tr>
          <tr>
            <td>
              <span class=" profile-label">Email:</span>
              <span
                class="t-hover profile-field"
                contenteditable
                t-placeholder="Email"
                >tienthanh20172827@gmail.com</span
              >
            </td>
          </tr>
          <tr>
            <td>
              <span class=" profile-label">Địa chỉ:</span>
              <span
                class="t-hover profile-field"
                contenteditable
                t-placeholder="Địa chỉ"
                >Nam Định</span
              >
            </td>
          </tr>
          <tr>
            <td>
              <span class=" profile-label">Website:</span>
              <span
                class="t-hover profile-field"
                contenteditable
                t-placeholder="Website, facebook, blog..."
                >https://facebook.com/</span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    editLayout() {
      let x = document.getElementById("container-edit");
      if (x.style.display == "none") {
        x.style.display = "block";

        this.active = true;
      } else {
        x.style.display = "none";
      }
    },
    selectItem() {
      this.$emit("select");
    }
  }
};
</script>
<style lang="scss" scoped>
/* style for t-hover profile-field in /public/app.css*/
.profile-info {
  .cv-controls {
    display: none;
  }
  .infomation {
    padding-top: 3mm;
    .info-table {
      .sv-avatar {
        width: 4.2cm;
        min-height: 4.2cm;
        vertical-align: top;
        img {
          border: 0;
          width: 3cm;
          height: auto;
          margin: 0 auto;
        }
      }
      .sv-namestudent {
        display: block;
        font-size: 24pt;
        line-height: 24pt;
        font-weight: 700;
        color: #0e2452;
        text-transform: capitalize;
      }
      .position {
        display: block;
        font-size: 11pt;
        line-height: 12pt;
        color: #000050;
        vertical-align: top;
      }
      td {
        padding: 0.1cm;
        line-height: 14pt;
        vertical-align: middle;
      }
      .profile-label {
        display: inline-block;
        width: 2.8cm;
        font-weight: 700;
        font-style: normal;
        vertical-align: top;
      }
    }
  }

  &:hover {
    .infomation {
      position: relative;
      box-shadow: 0 0 0 2px #ccc inset;
      border-radius: 0 4px 4px 4px;
      -moz-border-radius: 0 4px 4px 4px;
      -webkit-border-radius: 0 4px 4px 4px;
    }
    .cv-controls {
      display: inline-block;
      background-color: #ccc;
      height: 34px;
      margin-top: -34px;
      position: absolute;
      border-radius: 4px 4px 0 0;
      padding: 8px 10px;
      .group-button {
        .item {
          display: inline-block;
          padding: 3px;
          width: 30px;
          border-radius: 4px;
          text-align: center;
          background-color: #fff;
          &:hover {
            color: #02bc77;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
