const findTheOldest = function(people) {
    //Pair the names with their age//
    const nameAndAges = [];
    people.forEach(person => {
        if (person.hasOwnProperty('yearOfDeath'))
            nameAndAges.push({'name':person.name,'age':person.yearOfDeath-person.yearOfBirth});
        else{
            var dt = new Date();
            nameAndAges.push({'name':person.name,'age':dt.getFullYear()-person.yearOfBirth});
        }
    });

    //Find the oldest person//
    let oldest = nameAndAges[0];
    nameAndAges.forEach(person => {
        if (person.age > oldest.age){
            oldest = person;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
