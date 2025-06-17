const getRandom = (upper) => {
  const randomNumber = Math.floor(Math.random() * upper) + 1
  return randomNumber
}

console.log(getRandom(6))
console.log(getRandom(100))
console.log(getRandom(1000))
console.log(getRandom(20))
