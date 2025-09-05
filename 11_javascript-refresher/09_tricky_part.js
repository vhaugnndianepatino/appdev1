console.log("5 == '5' ->", 5 == "5")
console.log("5 === '5' ->", 5 === "5")

let a
let b = null
console.log("a (undefined):", a)
console.log("b (null):", b)

let obj = {
  regularFunc: function() {
    console.log("regularFunc this:", this)
  },
  arrowFunc: () => {
    console.log("arrowFunc this:", this)
  }
}
obj.regularFunc()
obj.arrowFunc()

let arr1 = [1, 2, 3]
let arr2 = arr1
arr2.push(4)
console.log("arr1 after modifying arr2:", arr1)
console.log("arr2:", arr2)

let arr3 = [1, 2, 3]
let arr4 = [...arr3]
arr4.push(4)
console.log("arr3 after modifying arr4:", arr3)
console.log("arr4:", arr4)