var fs = require('fs')

var list = []

for (var i = 0; i < 13; i++) {
  list.push('img/xin/xin ('+(i+1)+').jpg')
}
console.log(list)


// reWrite(0)

function reWrite(n) {
  fs.readFile(list[n], (err, data) => {
    if(err) throw err
    fs.writeFile('img/xin/xin_'+n+'.jpg', data, err => {
      if(err) throw err
      console.log('write done!')
    })
  })
  n++
  if (n<list.length){
    reWrite(n)
  }
}
