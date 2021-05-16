function multiRequest(urls, maxNum) {
  const result = new Arrary(urls.length)
  let num = 0

  for (let i = 0; i < maxNum; i++) {
    const callback = (res) => {
      result
      num--
      if (num < maxNum && urls.length) {
        request(urls.shift(), callback)
      }
    }
    request(urls.shift())
  }
}

function request(url, callBack) {
  fetch(url).then((res) => {
    callBack(res)
  })
}
