// * Write a function that given a list of countries, returns the country(s) that occur the least/min times
// i.e - ["Argentina", "Cuba", "Chile", "Argentina"] -> ["Cuba", "Chile"] 

const countries = ["Argentina", "Cuba", "Chile", "Argentina"]
const filteredCountries = []

for (var i = 0; i < countries.length; i++) {
    for (var j = 0; j < countries.length; j++) {
      if (countries[i] == countries[j] && i != j) break;
      else if (j == countries.length - 1) filteredCountries.push(countries[i])
    }
  }

console.log(filteredCountries)

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// * Find the 2nd largest and 2nd smallest number in two arrays of numbers combined
// I.e. - [10,5,7,2,4,1,24] & [8,23,29,25,40,0,24] -> 2nd Largest : 29 , 2nd Smallest: 1

const list1 = [10,5,7,2,4,1,24]
const list2 = [8,23,29,25,40,0,24]
//combines
const CombList = list1.concat(list2)
//2ndlargest
console.log(CombList.sort(function(a, b){return b-a})[1])
//2ndsmallest
console.log(CombList.sort(function(a, b){return a-b})[1])

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// * Write a program to find the index of a value in a sorted array. If the value does not find 
//      return the index where it would be if it were inserted in order.
// Example: 
// [1, 2, 4, 5, 6] 5(target) -> 3(index)
// [1, 2, 4, 5, 6] 0(target) -> 0(index)
// [1, 2, 4, 5, 6] 7(target) -> 5(index)

const listOfNums = [1, 2, 4, 5, 6]

console.log(listOfNums.indexOf(5))
console.log(listOfNums.indexOf(0))
console.log(listOfNums.indexOf(7))