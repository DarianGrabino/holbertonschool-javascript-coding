const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n');
    const students = {};

    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');

      if (firstname && lastname && age && (field === 'CS' || field === 'SWE')) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(`${firstname}`);
      }
    });

    console.log(`Number of students: ${lines.length - 1}`);

    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        const studentList = students[field].join(', ');
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${studentList}`);
      }
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}
module.exports = countStudents;
