// For-in loop
const myObject = {
    js : 'javascript',
    rb : 'ruby',
    py : 'python',
    swift : 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Note:- For-in loop provide you only keys while accessing the default values


const program = ["js", "java", "py", "rust", "kotlin"]

for (const key in program) {
    // console.log(program[key]);
}

/*
// trying for-in loop on map - can't iterate on map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FRN', "France")
map.set('GER', "Germany")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}

*/

// Object = for-in
// Array = for-of and so on
