'use strict'

function Person () {
  this.a = [1,2,3]
}


Person.prototype.sayName = function () {
  console.log(this.a)
}

function Child () {}

Child.prototype = new Person()

// 1.引用类型的属性被所有实例共享
// 2.在创建 Child 的实例时，不能向Parent传参