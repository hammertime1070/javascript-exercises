const findTheOldest = function(array) {
    // My way looks way more complicated than the proposed solution
    let currentYear = new Date().getFullYear()
    ages = array.map((people) => {if (people.yearOfDeath){return people.yearOfDeath - people.yearOfBirth} else {return currentYear - people.yearOfBirth}})
    return array[ages.indexOf(Math.max(...ages))]
};

// Do not edit below this line
module.exports = findTheOldest;
