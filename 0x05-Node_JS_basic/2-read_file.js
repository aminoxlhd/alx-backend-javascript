const fs = require('fs');

function countStudents (filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8').split('\n');
    const students = [];
    const fields = {};

    data.shift();

    for (const line of data) {
      if (line.trim() === '') continue;
      const [firstName, , , field] = line.split(',');
      students.push(firstName);
      fields[field] = (fields[field] || 0) + 1;
    }

    console.log(`Number of students: ${students.length}`);

    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field]}. List: ${students.filter((name) => line.includes(`${name},${field}`)).join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
