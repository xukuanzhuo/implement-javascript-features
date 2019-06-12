// 构造函数继承

function Parent () {
  this.a = [1,23,34]
}

function Child () {
  Parent.call(this)
}

// 1. 避免了引用类型的属性被所有实例共享
// 2. 可以向Parent传参



//combination 组合继承(原型链 + 构造函数)
function Parent () {
  this.a = [1,2]
}

Parent.prototype.sayName = function () {

}

function Child () {
  Parent.call(this)
}

Child.prototype = new Parent()
Child.prototype.constructor = Child


// 寄生继承
function createObj (o) {
  var clone = Object.create(o)
  clone.sayName = function () {
      console.log('hi')
  }
  return clone
}
// 跟借用构造函数模式一样，每次创建对象都会创建一遍方法

function Parent (name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child (name, age) {
  Parent.call(this, name);
  this.age = age;
}

// 关键的三步
var F = function () {};

F.prototype = Parent.prototype;

Child.prototype = new F();


var child1 = new Child('kevin', '18');


