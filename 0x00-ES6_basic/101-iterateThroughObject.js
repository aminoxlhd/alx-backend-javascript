export default function iterateThroughObject(reportWithIterator) {
  let retstring = '';
  for (const employee of reportWithIterator) {
    retstring += `${employee} | `;
  }
  retstring = retstring.slice(0, -3);
  return retstring;
}
