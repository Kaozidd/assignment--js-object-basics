/**
 * createCarRecord()
 *
 * Write a function called `createCarRecord` that takes 4 arguments
 * and returns a new object in the following format.
 *
 * {make: ... , model: ... , year: ... , license: }
 *
 * + The 1st parameter should be a string value for the car make (e.g. ford)
 * + The 2nd parameter should be a string value for the car model (e.g. pinto)
 * + The 3rd parameter should be a number value for the car year.
 * + The 4th parameter should be a string value for the car license plate.
 *
 * you will need to do some type checking on the inputs with the `typeof`
 * perator (see assertions 3 - 4) to make sure that the function is
 * used properly. if the user did not provide the correct the correct inputs,
 * to the function, the function should return a string.
 *  ( see GROUP2 - GROUP4 console.assert() )
**/

function createCarRecord(makeP, modelP, yearP, licenseP) {
	let err1 = 'new record must have make, model, year, and license values';
	let err2 = '1st, 2nd, and 4th arguments must be String';
	let err3 = '3rd argument must be a Number';
	const resObj = {};
	if (typeof makeP === "string") {
		resObj.make = makeP;
	} else if (typeof makeP === "undefined") {
		return err1;
	} else if (typeof makeP === "number") {
		return err2;
	} else if (typeof makeP === "boolean") {
		return err2;
	}

	if (typeof modelP === "string") {
		resObj.model = modelP;
	} else if (typeof modelP === "undefined") {
		return err1;
	} else if (typeof modelP === "number") {
		return err2;
	} else if (typeof modelP === "boolean") {
		return err2;
	}

	if (typeof yearP === "number") {
		resObj.year = yearP;
	} else if (typeof yearP === "undefined") {
		return err1;
	} else if (typeof yearP === "string") {
		return err3;
	} else if (typeof yearP === "boolean") {
		return err3;
	}

	if (typeof licenseP === "string") {
		resObj.license = licenseP;
	} else if (typeof licenseP === "undefined") {
		return err1;
	} else if (typeof licenseP === "number") {
		return err2;
	} else if (typeof licenseP === "boolean") {
		return err2;
	}
	
	return resObj;	
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var newCar1 = createCarRecord('Ford', 'Pinto', 1969, 'IOU7S2')
var newCar2 = createCarRecord('Pontiac', 'Azteca', 2001, '48NLL1' )
var newCar3 = createCarRecord('Jeep', 'Wrangler', 1987, '8HPN02' )
// ---------------------------
// Test for incomplete arguments to function.
var newCar4 = createCarRecord()
var newCar5 = createCarRecord('Volkswagen', 'Beatle')
// ---------------------------
// Test for invalid input types
var newCar6 = createCarRecord('Ferrari', true, 2015, 'K9KPL2' )
var newCar7 = createCarRecord( true, 'Spider', 2012, 93933)
// ---------------------------
var newCar8 = createCarRecord( 'Ferrari', 'Spider', '2013', '8IOL32')


console.assert( typeof newCar1 === 'object')
console.assert( newCar1.make === "Ford" && newCar1.model === "Pinto")
console.assert( newCar2.make === "Pontiac" && newCar2.year === 2001)
console.assert( newCar3.model === "Wrangler" && newCar3.license === '8HPN02')
// ---------------------------
//GROUP2
console.assert( typeof newCar4 === 'string')
console.assert( newCar4 === 'new record must have make, model, year, and license values')
console.assert( newCar5 === 'new record must have make, model, year, and license values')
// ---------------------------
//GROUP3
console.assert( typeof newCar6 === 'string')
console.assert( newCar6 === '1st, 2nd, and 4th arguments must be String')
console.assert( newCar7 === '1st, 2nd, and 4th arguments must be String')
// ---------------------------
//GROUP4
console.assert( typeof newCar8 === 'string')
console.assert( newCar8 === '3rd argument must be a Number')
