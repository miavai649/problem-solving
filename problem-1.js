// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: 'John', age: 25, gender: 'male' },
  { name: 'Sarah', age: 30, gender: 'female' },
  { name: 'Mike', age: 22, gender: 'male' },
  { name: 'Anna', age: 28, gender: 'female' },
  { name: 'Tom', age: 35, gender: 'male' }
]

function filterOutFemalesAndMapToNames(peopleArray) {
  return peopleArray
    .filter((person) => person.gender !== 'female')
    .map((person) => person.name)
}

const result = filterOutFemalesAndMapToNames(people)
console.log(result)
