var str = 'img/tao/tao_1.jpg'
var reg = /\/(.*)\./
reg.test(str)
// console.log(RegExp.$1.split('/')[1].split('_'));


/*
var arr = [5,4,4,2,1]

var flag = true

for (var i = 0; i < arr.length; i++) {
  if(i+1===arr.length){
    break
  }
  if(arr[i]!==arr[i+1]+1){
    flag = false
    break
  }
}
*/

var flag = true

var infos = [
  {color: 'red', index:5},
  {color: 'red', index:4},
  {color: 'black', index:3},
  {color: 'black', index:2},
]

for (var i = 0; i < infos.length; i++) {
  if(i+1===infos.length){
    break
  }
  if(infos[i].index!==infos[i+1].index+1||
    infos[i].color===infos[i+1].color){
    flag = false
    break
  }
}
console.log(flag);