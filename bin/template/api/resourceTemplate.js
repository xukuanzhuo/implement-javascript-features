function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}
module.exports = function(moduleName, filename){
  return `import request from '@/admin/utils/request'\n\nexport function get${firstUpperCase(filename)}s (filterQuery) {\n  return request({\n    url: 'api/${moduleName}/${filename}s',\n    method: 'get',\n    params: filterQuery\n  })\n}\n\nexport function create${firstUpperCase(filename)} (${filename}Params) {\n  return request({\n    url: 'api/${moduleName}/${filename}s',\n    method: 'post',\n    params: ${filename}Params\n  })\n}\n\nexport function update${firstUpperCase(filename)} (${filename}Params) {\n  return request({\n    url: 'api/${moduleName}/${filename}s/`+'${'+`${filename}Params`+".id}'"+ `,\n    method: 'put',\n    params: ${filename}Params\n  })\n}\n\nexport function delete${firstUpperCase(filename)} (id) {\n  return request({\n    url: 'api/${moduleName}/${filename}s/`+'${'+'id'+"}'"+`,\n    method: 'delete'\n  })\n}`
}
