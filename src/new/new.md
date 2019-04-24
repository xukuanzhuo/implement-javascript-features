> ## `new` 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例

### `new` 关键字会进行如下操作:

- 创建一个空的简单JavaScript对象（即{}）；
- 链接该对象（即设置该对象的构造函数）到另一个对象 ；
- 将步骤1新创建的对象作为this的上下文 ；
- 如果该函数没有返回对象，则返回this。

```
function Car (make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}
```
`const myCar =  new Car('toyta', 'AE86', 1987)`

![myCar](https://i.loli.net/2019/04/24/5cbfd0854fdae.png)

### 按照 `new` 关键字操作过程实现一个 `newObject ` 函数

```
function newObject () {
  const obj = Object.create(null)                // 创建一个空obj
  const constructor = [].shift.apply(arguments)  // 取出第一个参数(构造器函数)
  obj.__proto__ = constructor.prototype          // 将 obj 的原型指向构造函数
  constructor.apply(obj, arguments)              // 更改构造函数this指向到obj
  return obj
}
```
`const myCar2 = newObject(Car, 'nissan', 'civic hatchback', 2019)`

![myCar2](https://i.loli.net/2019/04/24/5cbfd09a61817.png)

#### hmmmmm `myCar`和`myCar2` 看起来有些不一样, 使用原型链的方法校验一下:
```
Object.getPrototypeOf(myCar) === Car.prototype  // true
myCar.__proto__ === Car.prototype               // true
myCar instanceof Car                            // true

Object.getPrototypeOf(myCar2) === Car.prototype  // false
myCar2.__proto__ === Car.prototype               // false
myCar2 instanceof Car                            // false
```
> `myCar2` 没有在`Car`的原型链上, 更换创建空`obj`的实现方式为:  
  ```
  const obj = new Object()
  ```

> 原因是 `Object.create(null)` 创建的是一个没有原型链链接的空对象，`new Object()` 类似于 `Object.create(Object.prototype)` 创建的是有原型链链接的空对象，

```
var a = Object.create(null)
var b = new Object()
```

- `Object.getPrototypeOf(a)  // null`

  ![a](https://i.loli.net/2019/04/24/5cbfc71547e67.png)

  `Object.getPrototypeOf(b) === Object.prototype // false`
- `Object.getPrototypeOf(b)`

  ![b](https://i.loli.net/2019/04/24/5cbfc74aaeb5a.png)

  `Object.getPrototypeOf(b) === Object.prototype // true`

> `a`是没有原型链链接的空对象，自然访问不到`__proto__` 属性，没有在原型链上，所以也可以用来做字典，不会有原型链上属性影响。

### 考虑`Car`函数有返回值的情况
  
  我们需要`newObject`返回的是一个对象，所以对构造函数返回值进行判定

  ```
  const ret = constructor.apply(obj, arguments)
  return typeof ret === 'Object' ? ret || obj : obj
  ```

  最终版本`newObject`:
  ```
  function newObject () {
    const obj = new Object()
    const constructor = [].shift.apply(arguments)
    obj.__proto__ = constructor.prototype
    const ret = constructor.apply(obj, arguments)
    return typeof ret === 'Object' ? ret || obj : obj
  }

  const car1 = new Car('toyta', 'AE86', 1987)
  const car2 = newObject(Car, 'toyta', 'AE86', 1987)

  Car.prototype.wheels = 4

  car1.wheels = 4                                                // true
  car2.wheels = 4                                                // true
  car1 instanceof Car                                            // true
  car2 instanceof Car                                            // true
  Object.getPrototypeOf(car1) === Object.getPrototypeOf(car2)    // true
  ```
 
 referrece: 
  - [MDN new operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
  - [You Don't Know JS Object.create](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md#createing-links)