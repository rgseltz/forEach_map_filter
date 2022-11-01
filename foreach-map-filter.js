const arr = [1,2,3,4,5,6];
/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    let doubles = arr.map(function(num) {
       return num * 2;
    })
    return doubles;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    
    const evens = arr.filter(function(num){
         if(num % 2 === 0){
             return num;
         }
    });
    return evens;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    const firstAndLast = arr.map(function(char){
        return char[0] + char[char.length-1];
    })
    return firstAndLast;
};

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    const newArray = arr.map(function(obj, i,) {
         obj[key] = value;
         return obj;
    })
    return newArray;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
// function vowelCount(str){
//     let obj = {};   
//     let countA = 0;
//     let countE = 0;
//     let countI = 0;
//     let countO = 0;
//     let countU = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "a"){
//             countA ++;
//             obj[str[i]] = countA;
//         } else if (str[i] === "e"){
//             obj[str[i]];
//             countE ++;
//             obj[str[i]] = countE;
//         } else if (str[i] === "i"){
//             // let count = 0;
//             obj[str[i]];
//             countI ++;
//             obj[str[i]] = countI;
//         } else if (str[i] === "o"){
//             // let count = 0;
//             obj[str[i]];
//             countO ++;
//             obj[str[i]] = countO;
//         } else if (str[i] === "u"){
//             // let count = 0;
//             obj[str[i]];
//             countU ++;
//             obj[str[i]] = countU;
//         }
//     }
//     return obj;
//    }
// function vowelCount(str) {
//     let arr = Array.from(str);
//     vowels = arr.filter(function(char) {
//         if (char === 'a' | char === 'e' | char === 'i' | char === 'o' | char === 'u')
//         return char;
//     })
//     let objKeys = {};
//     vowels.map(function(val) {
//         val[vowels] = objKeys;
//         return objKeys;
//     })
//     return vowels;
// }
//    function vowelCount(str){
//     let strLower = str.toLowerCase();
//     const vowels = 'aeiou'
//     let obj = {};   
//     let arr= Array.from(strLower);
//     let filteredArr = [];
//     filteredArr = arr.filter(function(val) {
//         vowels.indexOf(val === -1)
//             return val;
//         });
//         console.log(filteredArr);
        
//         map(function(val) {
//             if(!obj[val]){
//                 return obj[val] = 1;
//             }
//             else {
//                 return obj[val]++;
//             }
//         })
//    };

function vowelCount(str) {
    let obj = {};
    for(i = 0; i < str.length; i++) {
        // let lowerCasedStr = str.toLowerCase();
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        if (obj.hasOwnProperty(str[i])) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
            }
        }
    }
    return obj;
}

// function eCount(str) {
//     let resObj = {};
//     for (i=0; i < )
// }

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    let newArray = [];
    newArray = arr.map(function(val) {
        return val * 2;
    });
    return newArray;
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    let newArray = [];
    newArray = arr.map(function(val, i, arr){
        return val * i;
    })
    return newArray;
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    let newArray = arr.map(function(val){ 
        return val[key]
    });
    return newArray;
};

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    let fullName = arr.map(function(val){
        return val.first + " " +val.last;
    })
    return fullName
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    return arr.filter(function(val) {
        return val[key]
    })
};

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    const findValue = arr.filter(function(val){
       return val === searchValue
    })[0];
    return findValue;
};

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    filtered = arr.filter(function(val) {
        return val[key] === searchValue;
    })
    return filtered;
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    const isVowels = function(char) {
        'aeiou'.indexOf(char) !== -1;
    }
    const arr = Array.from(str);
    let filteredArr = arr.filter(function(char) {
         if (isVowels);
        });
        console.log(filteredArr);
    return filteredArr;
};

       

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    return arr.filter((num => num % 2 !== 0)).map(num => num * 2); 
    };
