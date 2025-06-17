const getRandom = () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1
  return randomNumber
}

console.log(getRandom())
