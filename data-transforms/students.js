// Generate some students
var students = genStudents();

// Create student.avgScore for each student
setAvgScores(students);

console.log('students: ', students);

// Find the top student
var topStudent = students.sort((a,b) => b.avgScore-a.avgScore)[0];
console.log('topStudent: %j', topStudent.name);

grades = groupByGrade(students);
grades.forEach(grade => {
	grade.avgScore = grade.students.map(s => s.avgScore).reduce((a,b) => a+b) / grade.students.length;
});

// Find the grade with the highest avgScores
var topGrade = grades.sort((a,b) => b.avgScore-a.avgScore)[0];
console.log(topGrade.grade);



function groupByGrade(students) {
	var groups = [];		// {grade, students[]}
	students.forEach(student => {
		var group = groups.find(g => g.grade===student.grade);
		if(!group) {
			group = {
				grade: student.grade,
				students: []
			};
			groups.push(group);
		}
		group.students.push(student);
	});
	return groups;
}


// Generates an array of {name, grade, scores[]}
function genStudents() {
	var students = [];
	return Array.from({length:10}).map((u,i) => {
		var grade = 8 + Math.round(Math.random()*2);
		var scores = Array.from({length:10}).map(() => 60 + Math.floor(Math.random()*40));

		return {
			name: 'Student ' + (i+1),
			grade,
			scores
		};
	});
}

function setAvgScores(students) {
	students.forEach(student => {
		var total = student.scores.reduce((a,b) => a+b, 0);		// sum all the values in student.scores
		student.avgScore = total / student.scores.length;
	});
}
