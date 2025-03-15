let students = [];

let courses = [
  {
    courseName: "Node.js",
    duration: "60H",
    dateOfStarting: "12-12-2025",
  },
  {
    courseName: "React",
    duration: "45H",
    dateOfStarting: "01-15-2026",
  },
  {
    courseName: "Python",
    duration: "75H",
    dateOfStarting: "03-01-2026",
  },
];

function getCourseInfo(courseName) {
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].courseName.toLowerCase() === courseName.toLowerCase()) {
      return courses[i];
    }
  }
  return null;
}

function addCourse(courseName, duration, dateOfStarting) {
  const newCourse = {
    courseName: courseName,
    duration: duration,
    dateOfStarting: dateOfStarting,
  };
  courses.push(newCourse);
  console.log(`Course "${courseName}" added successfully.`);
}

function RequestCourse(studentName, courseName) {
  const courseInfo = getCourseInfo(courseName);

  if (courseInfo) {
    console.log(`Dear ${studentName},`);
    console.log(`Here is the information for the "${courseName}" course:`);
    console.log(`- Duration: ${courseInfo.duration}`);
    console.log(`- Start Date: ${courseInfo.dateOfStarting}`);
  } else {
    console.log(
      `Sorry, ${studentName}, the course "${courseName}" was not found.`
    );
  }
}

const nodeCourse = getCourseInfo("Node.js");
if (nodeCourse) {
  console.log("Node.js Course Info:", nodeCourse);
} else {
  console.log("Node.js course not found.");
}

addCourse("JavaScript", "50H", "02-10-2026");
console.log("Updated Course List:", courses);

RequestCourse("Alice", "React");
RequestCourse("Bob", "Java");
RequestCourse("Charlie", "JavaScript");
