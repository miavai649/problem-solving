//  Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people = [
  { name: 'Alice', age: 25, gender: 'female' },
  { name: 'Bob', age: 30, gender: 'male' },
  { name: 'Charlie', age: 28, gender: 'male' }
]

function updatePersonAgeByName(peopleArray, name, newAge) {
  const findSpecificPoeple = peopleArray.find((item) => item.name === name)
  if (findSpecificPoeple) {
    findSpecificPoeple.age = newAge
  }
  return peopleArray
}

const updatedPeople = updatePersonAgeByName(people, 'Bob', 35)
console.log(updatedPeople)
