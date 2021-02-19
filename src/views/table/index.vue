<template>
  <div>
    <el-button @click="exportPdf">Xuất file</el-button>
    <el-table
      id="app-container"
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="Status"
        width="110"
        align="center"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{
            scope.row.status
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="created_at"
        label="Display_time"
        width="200"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from "@/api/table";
import html2PDF from "html-pdf-adaptive";
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList().then(response => {
        this.list = response.data.items;
        this.listLoading = false;
      });
    },
    exportPdf() {
      const el = document.getElementById("app-container");
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
        useDefaultFoot: true,

        // or 'fixed'
        mode: "adaptive",

        // file name
        filename: "demo",

        // toggle CSS styles
        isToggleStyle: true,

        // attempt to load images from a server using CORS
        useCORS: true
      });
    }
  }
};
</script>
