const comparisson = function(p1, p2) {
    let yearOfDeath1 = "yearOfDeath" in p1 ? p1.yearOfDeath : 2024;
    let yearOfDeath2 = "yearOfDeath" in p2 ? p2.yearOfDeath : 2024;
    return (yearOfDeath1 - p1.yearOfBirth) > (yearOfDeath2 - p2.yearOfBirth);
}

const findTheOldest = function(people) {
    return people.reduce((max, x) => max = comparisson(x, max) ? x : max);
}

const comparissonOld = function(p1, p2) {
    let yearOfDeath1 = "yearOfDeath" in p1 ? p1.yearOfDeath : 2024;
    let yearOfDeath2 = "yearOfDeath" in p2 ? p2.yearOfDeath : 2024;
    return (yearOfDeath2 - p2.yearOfBirth) - (yearOfDeath1 - p1.yearOfBirth);
}

const findTheOldestOld = function(people) {
    let new_arr = people.slice().sort(comparisson);
    return new_arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
