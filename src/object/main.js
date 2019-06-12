import { parseAsync } from "@babel/core";

// `var`, `let`, `const`
// 全局未使用 'use strict'

var a = 1 //  window.a = 1
let b = 2 //  window.b = undefined
const c = 3 // window.c = undefined

// var 未使用 'use strict' 也会造成内存泄漏
// var 声明的变量会出现变量提升，let、const不会，var变量提升其实是js编译过程，var是先声明，再赋值。
