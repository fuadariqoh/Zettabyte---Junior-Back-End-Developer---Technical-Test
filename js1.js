let numbers = {
  a: 2,
  b: 4,
};

function result(numbers) {
  // Your Code Here
  return { ...numbers, a: numbers.b, b: numbers.a };
}

console.log(result(numbers));
