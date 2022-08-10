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
// const byMass = characters.sort((a,b) => {
//   return a.mass - b.mass
// })
// console.log('By mass:', byMass)

// B. Sort by weight
// const byHeight = characters.sort((a,b) => a.height - b.height)
// console.log('By height:', byHeight)

// C. Sort by name
const byName = characters.sort((a,b) => {



  if (a.name.includes('Skywalker') < b.name) 
  return -1;
  return 1;

})
console.log('By name:', byName)

// D. Sort by gender
// const byGender = characters.sort((a,b) => {
//   if (a.gender === 'female') return -1
//   return 1
// })
// console.log('By gender:', byGender)