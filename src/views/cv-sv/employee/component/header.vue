<template>
  <div class="header--manage">
    <div class="menu">
      <ul>
        <li v-for="(item, index) in menuItemLst" :key="index">
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItemLst: [
        {
          label: "Quản lý CV",
          value: 1,
          active: false
        },
        {
          label: "Tạo CV",
          value: 2,
          active: false
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.header--manage {
  width: 100%;
  min-height: 50px;
  border: 1px solid transparent;
  border-color: #e7e7e7;

  margin-bottom: 10px;

  .menu {
    width: 1100px;
    margin: 0 auto;
    min-height: 60px;
    ul {
      list-style-type: none;
      float: right;
      margin: 0;
      padding: 0;
      li {
        height: 60px;
        float: left;
        font-size: 14px;
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 20px;
        cursor: pointer;
        text-align: center;
        &:hover {
          border-bottom: 1px solid #777;
          color: #777;
        }
      }
      &:after {
        clear: both;
        content: "";
      }
    }
    &:after {
      clear: both;
      content: "";
    }
  }
}
</style>
