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


candy.favoriteToys = [
    'tennis ball',
    'stick'
]



const pets = [];
pets.push(rey);
pets.push(candy);
pets.unshift(dolly);

console.log(pets[1]);


console.log(pets[2].favoriteToys[1]);



function doDogStuff(myPets) {
    for (const petIndex in myPets) {
        const pet = myPets[petIndex]
        console.log(pet.favoriteToys)
    }
}


rey.favoriteToys = ['rock'];
doDogStuff(pets);


rey.sit = function () {
    console.log('rey sits');
}
rey.sit()


function sit() {
    console.log('the dog sits')
}

rey.sit = sit

rey.sit()


