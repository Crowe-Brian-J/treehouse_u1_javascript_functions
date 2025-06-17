/* 
Try to keep the number of arguments limited to what's necessary. 
Too many can make it hard to read.
*/

const getArea = (width, length, unit) => {
  const area = width * length
  return `${area} ${unit}`
}
