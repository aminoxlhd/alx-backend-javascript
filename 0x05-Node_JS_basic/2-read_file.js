const fs = require('fs').promises;

function countStudents (path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const students = [];
      const fields = {};

      const lines = data.split('\n').slice(1);

      for (const line of lines) {
        if (line.trim() === '') continue;
        const [firstName, , , field] = line.split(',');
        students.push(firstName);
        fields[field] = (fields[field] || 0) + 1;
      }

      console.log(`Number of students: ${students.length}`);

      for (const field in fields) {
        const filteredStudents = students.filter((name) => line.includes(`${name},${field}`));
        console.log(`Number of students in ${field}: ${fields[field]}. List: ${filteredStudents.join(', ')}`);
      }
    })
    .catch((error) => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
