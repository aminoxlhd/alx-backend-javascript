export default function appendToEachArrayValue(array, appendString) {
  const returnarr = [];
  for (const idx of array) {
    returnarr.push(appendString + idx);
  }

  return returnarr;
}
