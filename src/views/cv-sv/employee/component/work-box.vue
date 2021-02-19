<template>
  <div class="box-work">
    <div class="work-search">
      <span class="title"
        >Các bạn có thể tìm kiếm các thông tin việc làm tại đây
      </span>
      <el-select
        style="width:100%;padding:10px"
        size="small"
        v-model="value"
        placeholder="Lựa chọn ngành nghề"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select
        style="width:100%;padding:10px"
        size="small"
        v-model="value"
        placeholder="Lựa chọn nơi làm việc"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select
        style="width:100%;padding:10px;"
        size="small"
        v-model="value"
        placeholder="Loại công việc"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <div style="width:100%;text-align:center;margin-top:10px">
        <a href="#" class="btn-primary">
          <i class="fas fa-search"></i>
          <span>Tìm kiếm</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box-work {
  width: 100%;
  .work-search {
    background-color: #eee;
    padding: 20px;
    width: 100%;
    height: 269px;
    background-image: linear-gradient(45deg, #d2cbcb8c, transparent);
    .title {
      font-size: 16px;
      font-style: italic;
      display: block;
    }
  }
}
.btn-primary {
  background-color: #00b14f;
  color: #fff;
  padding: 10px 15px;
  line-height: 1.5;
  font-weight: 700;
  border-radius: 3px;
  &:after {
    clear: both;
    content: "";
  }
}
</style>
