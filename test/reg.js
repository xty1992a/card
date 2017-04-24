var url = 'img/tao/tao_1.jpg'
var reg = /\/(.*)\./
reg.test(url)
console.log(RegExp.$1)