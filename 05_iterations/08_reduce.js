// reduce function

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc; ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
// console.log(myTotal);


// shopping cart

const shoppingCart = [
    {
        courseName: 'js course',
        price: 2999
    },
    {
        courseName: 'python course',
        price: 999
    },
    {
        courseName: 'app dev course',
        price: 5999
    },
    {
        courseName: 'data science course',
        price: 12999
    }
]


const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalPrice);