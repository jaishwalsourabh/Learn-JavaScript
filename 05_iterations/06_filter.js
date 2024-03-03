/*
// ForEach loop doesn't return the value

const coding = ["js", "python", "ruby", "java", "golang", "rust"]

const values = coding.forEach( (item) => {
    // console.log(item);
    return item;
} )

console.log(values);
*/


// Filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books  = [
    {
        title: 'Book one', genre: 'History', publish: '1985', edition: '2004'
    },
    {
        title: 'Book two', genre: 'Non-Fiction', publish: '1999', edition: '2007'
    },
    {
        title: 'Book three', genre: 'Fiction', publish: '1988', edition: '2010'
    },
    {
        title: 'Book four', genre: 'Science', publish: '1994', edition: '2003'
    },
    {
        title: 'Book five', genre: 'Non-Fiction', publish: '1992', edition: '2008'
    }
]

// let userBooks = books.filter( (bk) => {
//     return bk.genre === 'Non-Fiction';
// } )

const userBooks = books.filter( (bk) => {
    return bk.publish >= 1985 && bk.genre === 'History';
})

console.log(userBooks);