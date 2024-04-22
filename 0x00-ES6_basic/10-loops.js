export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const idx in array) {
    arr.push(appendString + idx);
  }

  return arr;
}
