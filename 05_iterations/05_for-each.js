// For-each loop

const coding = ["js", "python", "java", "cpp", "ruby", "rust"]

// using normal function
/*
coding.forEach( function (item){
    console.log(item);
} )
*/


// using arrow function
/*
coding.forEach( (value) => {
    console.log(value);
} )
*/

// another method
/*
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)
*/


coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

// array of objects
// [{}, {}, {}]


const mycoding = [
    {
        languageName: "JavaScript",
        languageFileName: ".js"
    },
    {
        languageName: "Python",
        languageFileName: ".py"
    },
    {
        languageName: "C++",
        languageFileName: ".cpp"
    },
    {
        languageName: "Rust",
        languageFileName: ".r"
    },
    {
        languageName: "Golang",
        languageFileName: ".go"
    }
]

mycoding.forEach( (item) => {

    console.log(`${item.languageFileName} is the file extention for the language ${item.languageName}`);
} )