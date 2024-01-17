// Arrays

// Creating 2 arrays and add/concat
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// Using spread operator for concatinating
const all_new_heros = [...marvel_heros, ...dc_heros]    // spread operator concat 2 arrays and gives a new array

// console.log(all_new_heros);

// Example:- Nesting of arrays
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// We can use flat method to convert into simple array, or remove nesting array
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// Convert string to array methods
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))

// Object to array conversion
console.log(Array.from({name: "hitesh"})) // interesting

// Taking three variables and converting into an array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
