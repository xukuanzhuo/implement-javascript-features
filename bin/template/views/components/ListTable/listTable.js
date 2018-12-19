module.exports = function(filename){
  return `<template>\n  <el-table\n    border\n    :data="${filename}List"\n    style="width: 100%">\n    <el-table-column prop="id" label="ID" width="80" />\n    <el-table-column label="操作" />\n  </el-table>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      ${filename}List: []\n    }\n  }\n}\n</script>`
}

