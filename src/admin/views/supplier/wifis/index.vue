<template>
  <div>
    <header class="header clearfix">
      <span>index</span>
      <div class="header-actions">
        <el-button size="small" type="warning">新建</el-button>
      </div>
    </header>
    <el-card shadow="never" body-style="padding: 0;">
      <div slot="header" class="clearfix" layout="rows" layout-align="space-between center">
        <filter-form />
      </div>
      <list-table />
    </el-card>
  </div>
</template>

<script>
import FilterForm from './components/FilterForm'
import ListTable from './components/ListTable'
export default {
  components: { FilterForm, ListTable },
  data () {
    return {}
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "./index.scss";
</style>