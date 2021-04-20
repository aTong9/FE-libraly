class Person {
  constructor(name, souce) {
    this.name = name
    this.souce = souce
  }
  introduce() {
    console.log(`我是${this.name},考了${this.souce}`)
  }
}

class Student extends Person {
  constructor(name, souce, age) {
    super(name, souce)
    this.age = age
  }
  speak() {
    console.log(`我是${this.name},今年${this.age}岁考了${this.souce}`)
  }
}
const person = new Person('李四', '60',)
const student = new Student('张三', '99', '18')
console.log(person)
console.log(student)
student.introduce()
student.speak()