let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};

Object.keys(person).forEach(key => {
    console.log(`${key}: ${person[key]}`);
});

Object.values(person).forEach(value => {
    console.log(`${value}`);
});
