<template>
  <div class="single--template--cv">
    <div class="image">
      <router-link :to="'tao-cv/id'">
        <a href="#" class="image-box">
          <img
            style="item-image"
            width="100%"
            src="https://i.pinimg.com/originals/11/56/59/115659073ed0ba40104e4dd05f6d570b.jpg"
            alt="Tìm  việc nhanh chóng "
        /></a>
        <div class="cv-overlay">
          <a href="#">
            <span> <i class="fas fa-check"></i> Dùng mẫu này </span>
            <p>Mẫu CV tiêu chuẩn phù hợp với nhiều ngành nghề, dễ sử dụng</p>
          </a>
        </div>
      </router-link>
    </div>
    <p class="title">
      <a href="#">Mẫu tiêu chuẩn</a>
      <span class="label-info">CTSV</span>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.single--template--cv {
  width: 100%;
  height: 150px;
  padding: 0 5px;
  //background-color: #fff;
  .cv-overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    -moz-transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    a {
      width: 100%;
      height: 100%;
      vertical-align: middle;
      display: inline-block;
      color: #fff;
      text-align: center;
      padding-top: 48%;
      font-size: 18px;
      text-decoration: none;
      span {
        display: inline-block;
        padding: 10px 20px;
        background-color: #00b14f;
        color: #fff;
        border-radius: 30px;
      }
      p {
        margin: 10px;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      }
    }
  }
  .image {
    position: relative;
    margin: 0 20px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 1px;
    -moz-border-radius: 1px;
    -webkit-border-radius: 1px;
    .image-box {
      width: 100%;
      height: auto;
      display: block;
      cursor: pointer;
      .item-image {
        max-width: 100%;
        display: inline-block;
      }
    }
    &:hover {
      .cv-overlay {
        opacity: 1;
        box-shadow: 0 0 2px #000;
        -moz-box-shadow: 0 0 2px #000;
        -webkit-box-shadow: 0 0 2px #000;
      }
    }
  }
  .title {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 30px;
    text-align: center;
    a {
      color: #555;
      &:hover {
        text-decoration: underline;
      }
    }
    .label-info {
      font-size: 9px;
      font-weight: 400;
      border-radius: 8px;
      padding: 4px 10px;
      text-transform: uppercase;
      vertical-align: middle;
      color: #fff;
      background-color: #5bc0de;
    }
  }
}
</style>
