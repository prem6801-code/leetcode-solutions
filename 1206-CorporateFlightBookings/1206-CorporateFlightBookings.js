// Last updated: 24/07/2026, 23:49:44
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
    let arr = Array(n).fill(0);
    for (let bk of bookings) {
        let i = bk[0]
        while (i <= bk[1]) {
            arr[i-1] += bk[2];
            i++;
        }
    }

    return arr;
};