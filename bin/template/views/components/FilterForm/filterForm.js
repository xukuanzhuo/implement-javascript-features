module.exports = function(filename){
  return `<template>\n  <div class="${filename}-filter-container" layout="rows">\n    <el-form :model="${filename}FilterForm" layout="rows" layout-wrap>\n      <el-form-item label="id">\n        <el-input clearable v-model="${filename}FilterForm.id" placeholder="请输入id" size="small" />\n      </el-form-item>\n    </el-form>\n    <el-button class="search-btn" icon="el-icon-search" size="small" type="primary">筛选</el-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      ${filename}FilterForm: {}\n    }\n  }\n}\n</script>\n\n<style rel="stylesheet/scss" lang="scss" scoped>\n</style>`
}

