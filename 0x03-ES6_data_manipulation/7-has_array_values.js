export default function hasValuesFromArray(Se, Arr) {
  return Arr.every((ele) => Se.has(ele));
}
