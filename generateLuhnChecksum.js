const generateChecksum = (number) => {
  const length = number.length

  const splitNumber = number.split("")

  let sum = 0
  let flip = 1

  const sumTable = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
  ]

  for(let i = length -1; i >= 0; i--) {
    let flipIndex = flip++ % 2
    sum += sumTable[flipIndex][splitNumber[i]]
  }

  let result = sum.toString()
  
  return result.substring(result.length-1)
}

module.exports = generateChecksum