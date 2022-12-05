const rey = Object();



rey.petType = "dog";
rey.breed = "german shepherd";
console.log(rey);
rey.name = 'Rey';
console.log(rey.breed);


const dolly = {
    name: "Dolly",
    gender: "female",
    breed: "american bulldog"
}


console.log(dolly)


const candy = {
    name: 'Candy',
    petType: 'dog',
    gender: 'female',
    breed: 'pug',
    age: '2',
    owner: {
        name: {
            firstName: 'Joe',
            lastName: 'Schmoe'
        },
        address: '555 Sesame Street',
        Phone: '2105555555'

    }
}
console.log(candy.owner.name);


const pets = [];
pets.push(rey);
pets.push(candy);
pets.unshift(dolly);

console.log(pets[1]);
