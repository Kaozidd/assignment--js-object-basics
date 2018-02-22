/**
 * makeNamesObject()
 *
 * Create a function that accepts 3 strings with first + last names as arguments
 * The function should return an object with 3 properties:
 * The first name will be a property-name and the last name will be the value
 *
 * EXAMPLE:
 * makeNamesObject("George Washington", "John Adams", "Kanye West")
 *   =>
 *   {
 *      George: "Washington",
 *      John: "Adams",
 *      Kanye: "West"
 *   }
 *
 * HINT: You may need to review `object bracket notation` to dynamically
 *       set an object's property name.
 *
*/

function makeNamesObject(str0, str1, str2) {
	let initArr = [str0, str1, str2]
	const resObj = {};
	console.log(initArr);
	for (let i=0; i<initArr.length; i++) {
		let tempArr = initArr[i].split(" ");
		console.log(tempArr);
		resObj[tempArr[0]] = tempArr[1];
	console.log(resObj);
	}
	return resObj;
}


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
// var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

// console.assert(greatMenObj.George === "Washington")
// console.assert(greatMenObj['Abe'] === "Lincoln")
// console.assert(greatMenObj.Kanye === "West")
// //-------------------
// console.assert(greatWomenObj.Rosa === "Parks")
// console.assert(greatWomenObj.Charlotte === "Webb")
