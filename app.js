let getAverage = (arr) => {

  let getSum = () => {
    let sum = 0
    arr.map(item => sum += item)
    let averaged = sum / arr.length

    return averaged
  }

  return getSum()
}
