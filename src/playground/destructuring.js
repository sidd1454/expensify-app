//Object Destructuring

// const person = {
//     name: 'Siddharth',
//     age: '25',
//     location: {
//         city: 'Tomball',
//         temp: '70'
//     }
// };

// const {name: firstname = 'Anonymous', age} = person;
// console.log(`${firstname} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature){
//     console.log(`It's ${temperature} in ${city}.`);
// }

//Array destruction
// const address = ['10 Devon Dale Drive', 'Tomball', 'Texas', '77375'];
// const [street, city, state = 'New York', zip] = address;
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [item1, , medium, ] = item;
console.log(`A medium ${item1} costs ${medium}`);