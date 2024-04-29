export default function getListStudentIds(arg) {
  return Array.isArray(arg) ? arg.map(({ id }) => id) : [];
}
