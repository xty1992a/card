(function (w) {
  var urlList = ["img/tao/tao_1.jpg", "img/tao/tao_2.jpg", "img/tao/tao_3.jpg", "img/tao/tao_4.jpg", "img/tao/tao_5.jpg", "img/tao/tao_6.jpg", "img/tao/tao_7.jpg", "img/tao/tao_8.jpg", "img/tao/tao_9.jpg", "img/tao/tao_10.jpg", "img/tao/tao_11.jpg", "img/tao/tao_12.jpg", "img/tao/tao_13.jpg", "img/hua/hua_1.jpg", "img/hua/hua_2.jpg", "img/hua/hua_3.jpg", "img/hua/hua_4.jpg", "img/hua/hua_5.jpg", "img/hua/hua_6.jpg", "img/hua/hua_7.jpg", "img/hua/hua_8.jpg", "img/hua/hua_9.jpg", "img/hua/hua_10.jpg", "img/hua/hua_11.jpg", "img/hua/hua_12.jpg", "img/hua/hua_13.jpg", "img/xin/xin_1.jpg", "img/xin/xin_2.jpg", "img/xin/xin_3.jpg", "img/xin/xin_4.jpg", "img/xin/xin_5.jpg", "img/xin/xin_6.jpg", "img/xin/xin_7.jpg", "img/xin/xin_8.jpg", "img/xin/xin_9.jpg", "img/xin/xin_10.jpg", "img/xin/xin_11.jpg", "img/xin/xin_12.jpg", "img/xin/xin_13.jpg", "img/fang/fang_1.jpg", "img/fang/fang_2.jpg", "img/fang/fang_3.jpg", "img/fang/fang_4.jpg", "img/fang/fang_5.jpg", "img/fang/fang_6.jpg", "img/fang/fang_7.jpg", "img/fang/fang_8.jpg", "img/fang/fang_9.jpg", "img/fang/fang_10.jpg", "img/fang/fang_11.jpg", "img/fang/fang_12.jpg", "img/fang/fang_13.jpg"]

    // 用于获取一个打乱的数组的下标数组
  function getIndex(arr) {
    arr = typeof arr === 'undefined' ? [] : arr
    function getNum(arr) {
      var num = Math.round(Math.random() * 51)
      return arr.indexOf(num) === -1 ? num : getNum(arr)
    }
    arr.push(getNum(arr))
    return arr.length === 52 ? arr : getIndex(arr)
  }

    // 用于将上述数组拆分为8个小数组
  function getArrs(list, start, end, result) {
    result = typeof result === 'undefined' ? [] : result
    var child = list.slice(start, end)
    // console.log(child)
    result.push(child)
    var nextStart = end
    var nextEnd = nextStart >= 28 ? nextStart + 6 : nextStart + 7
    return nextStart >= list.length ? result : getArrs(list, nextStart, nextEnd, result)
  }



  w.init = function (wraps) {
    var chaosArr = getIndex()
    var bigArr = getArrs(chaosArr, 0, 7)
    console.log(bigArr)
    for (var i = 0; i < wraps.length; i++) {
      let fragment = document.createDocumentFragment()
      var table = document.createElement('div')
          table.setAttribute('class', 'table')
          // fragment.appendChild(table)
      for (var j = 0; j < bigArr[i].length; j++) {
        var card = document.createElement('div')
        card.setAttribute('class', 'card')
        card.setAttribute('draggable', 'true')
        card.style.backgroundImage = 'url(' + urlList[bigArr[i][j]] + ')'
        fragment.appendChild(card)
      }
      wraps[i].innerHTML = ''
      wraps[i].appendChild(fragment)
    }
  }
})(window)

