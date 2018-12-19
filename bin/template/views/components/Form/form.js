module.exports = function(filename){
  return `<template>\n  <el-form :model="${filename}Form" ref="${filename}Form" :rules="rules" label-width="80px">\n    <el-form-item label="id" prop="id" required>\n      <el-input v-model="${filename}Form.id"  placeholder="填写id" />\n    </el-form-item>\n    <el-form-item layout="row" layout-align="end end">\n      <el-button type="primary" size="small" @click="submitForm('${filename}Form')" :loading="requestLoading"      >保存</el-button>\n      <el-button size="small">取消</el-button>\n    </el-form-item>\n  </el-form>\n</template>\n\n<script>\nimport { mapGetters } from 'vuex'\n\nexport default {\n  computed: {\n    ...mapGetters([\n      '${filename}Meta'    ])\n  },\n  data () {\n    return {\n      ${filename}Form: {\n        id: ''\n      },\n      requestLoading: false\n    }\n  },\n  methods: {\n    submitForm (formName) {\n    }\n  }\n}\n</script>\n\n<style rel="stylesheet/scss" lang="scss" scoped>\n</style>`
}



