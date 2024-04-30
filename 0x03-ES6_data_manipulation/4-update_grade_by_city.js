export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGradeObj = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
      const grade = newGradeObj ? newGradeObj.grade : 'N/A';
      return { ...student, grade };
    });
}
