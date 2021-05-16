// * a==1&&a==2&&a==3

class A {
  state = 1
  valueOf() {
    return this.state++
  }
}

var a = new A()

console.log(a == 1 && a == 2 && a == 3)
