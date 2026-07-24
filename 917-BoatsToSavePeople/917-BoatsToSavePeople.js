// Last updated: 24/07/2026, 23:50:10
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    people = people.sort((a, b) => a - b);
    let i = 0
    let j = people.length - 1
    let boat = 0

    while (i <= j) {
        if (people[j] + people[j - 1] <= limit) {
            j--
        } else if (people[j] + people[i] <= limit){
            i++
        }
        j--
        boat++
    }

    return boat
};