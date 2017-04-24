var arr = [[1,2,3,4,5,6],[1,2,3,4,5,6],[1,2,3,4,5,6]]
var url = ['a','b','c','d','e','f','g']
var arr2 = arr.map(smallArr => {
  return smallArr.map(num=>{
    return url[num]
  })
})
console.log(arr2);