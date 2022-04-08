/**
 * Direction:
 * Find all fields that have different value & must can detect all field dynamically
 *
 * Expected Result:
 * ['firstName', 'lastName']
 *
 */
const data = [
  { firstName: "Adi", lastName: "Nugroho", age: 25 },
  { firstName: "Deddy", lastName: "Dores", age: 25 },
];

function result(data) {
  // your code here

  let result = [];
  const keys = Object.keys(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < keys.length; j++) {
      if (data[i][keys[j]] !== data[i + 1][keys[j]]) {
        result.push(keys[j]);
      }
    }
  }
  return result;
}

console.log(result(data));
