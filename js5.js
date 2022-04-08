/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 *
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
const students = [
  { firstName: "Kai", lastName: "Lyons" },
  { firstName: "Belle", lastName: "Norton" },
  { firstName: "Finnley", lastName: "Rennie" },
  { firstName: "Tatiana", lastName: "Dickerson" },
  { firstName: "Peyton", lastName: "Gardner" },
];
const groups = 3;

function result(students, groups) {
  // your code here
  const sortedStudent = students.sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  );
  const elementPerGroup = Math.ceil(students.length / groups);
  const split = (sortedStudent, elementPerGroup) => {
    let temporaryArray = [];

    while (sortedStudent.length > 0) {
      temporaryArray.push(sortedStudent.splice(0, elementPerGroup));
    }
    return temporaryArray;
  };
  return split(sortedStudent, elementPerGroup);
}

console.log(result(students, groups));
