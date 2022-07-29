const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
]

// 1. FILTER
// Get all the item that are less than or equal to 100

const filteredItems = items.filter((item) => {
  return item.price <= 100
})

// console.log(filteredItems)
// Output:
// 0: {name: 'Bike', price: 100}
// 1: {name: 'Album', price: 10}
// 2: {name: 'Book', price: 5}
// 4: {name: 'Keyboard', price: 25}


// 2. MAP
// Allows you to take array and and convert it to new array

const itemNames = items.map((item) => {
  return item.name
})

// console.log(itemNames)
// Output:
// ['Bike', 'TV', 'Album', 'Book', 'Phone', 'Computer', 'Keyboard']


// 3. FIND
// Allows you to find single object in array

const foundItem = items.find((item) => {
  return item.name === 'Book'
})

// console.log(foundItem)
// Output:
// {name: 'Book', prcie: 5}



// 4. FOR EACH

items.forEach((item) => {
  // console.log(item.name)
})
// Output: 
// Bike
// TV 
// Album
// Book
// Phone
// Computer
// Keyboard


// 5. SOME
// Returns true or false
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100
})
// console.log(hasInexpensiveItems)

// Output: true


// 6. EVERY
const theInexpensiveItems = items.every((item) => {
  return item.price <= 100
})
console.log(theInexpensiveItems) 
// Output: false


// 7. REDUCE
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal
}, 0)
console.log(total)
// Output: 1840


// 8. INCLUDES
const numArr = [1,2,3,4,5]

const includesTwo = items.includes(7)
// console.log(includesTwo)
// Output: true


// 9. SORT
const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male'
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male'
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '136',
    eye_color: 'blue',
    gender: 'female'
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male'
  },
]

// A. Sort by mass
const byMass = characters.sort((a,b) => {
  return a.mass - b.mass
})
console.log('By mass:', byMass)

// B. Sort by weight
const byHeight = characters.sort((a,b) => a.height - b.height)
console.log('By height:', byHeight)

// C. Sort by name
const byName = characters.sort((a,b) => {
  if (a.name < b.name) return -1;
  return 1;

})
console.log('By name:', byName)

// D. Sort by gender
const byGender = characters.sort((a,b) => {
  if (a.gender === 'female') return -1
  return 1
})
console.log('By gender:', byGender)