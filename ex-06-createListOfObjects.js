/**
 * createListOfObjects()
 *
 * Write a function called createListOfObjects that accepts an
 * an array of strings with first and last names and returns
 * an array of objects that each have the property `firstName`
 * and `lastName` and first name and last name values
 * corresponding value
 *
 * var namesList = ['Cameron Betts', 'Shana Lopez', 'Angela Li']
 *
 * createListOfObjects(namesList)
 *  =>
 *  [
 *     { firstName: 'Cameron', lastName: 'Betts'},
 *     { firstName: 'Shana', lastName: 'Lopez'},
 *     { firstName: 'Angela', lastName: 'Li'}
 *  ]
 *
 * HINT: You might be able to reuse some of the logic from createNameObject()
*/

function createListOfObjects(array) {
  const resArray = [];
  for (let i=0; i<array.length; i++) {
    let obj = {};
    let tempArray = array[i].split(" ");
    obj.firstName = tempArray[0];
    obj.lastName = tempArray[1];
    resArray.push(obj);
  }
  return resArray;
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var realNinjas = [
  'Chuck Norris',
  'Jackie Chan',
  'Lucy Liu',
  'Billy Blanks',
  'Michelle Yeoh',
  'Jet Li'
]

var realSportsStars = [
	'Kenny Powers',
	'Ricky Vaughn',
	'Dottie Hinson',
	'Jesus Shuttlesworth',
	'Scotty Smalls'
]



var ninjaListOfObjects = createListOfObjects(realNinjas)

console.assert(typeof ninjaListOfObjects[0] === "object")
console.assert(ninjaListOfObjects[0].firstName === "Chuck")
console.assert(ninjaListOfObjects[0].lastName === "Norris")
console.assert(ninjaListOfObjects[1].firstName === "Jackie")
console.assert(ninjaListOfObjects[1].lastName === "Chan")
console.assert(ninjaListOfObjects[3].firstName === "Billy")
console.assert(ninjaListOfObjects[3].lastName === "Blanks")

//------------------------------
var sportStarsListOfObjects = createListOfObjects(realSportsStars)
console.assert(typeof sportStarsListOfObjects === "object")
console.assert(sportStarsListOfObjects[1].firstName === "Ricky")
console.assert(sportStarsListOfObjects[1].lastName === "Vaughn")
console.assert(sportStarsListOfObjects[3].firstName === "Jesus")
console.assert(sportStarsListOfObjects[3].lastName === "Shuttlesworth")
