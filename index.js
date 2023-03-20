// Code your solution in this file!

const returnFirstTwoDrivers = (arr) => arr.slice(0, 2);

const returnLastTwoDrivers = (arr) => arr.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function(fare) {return num * fare};
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arr, cb) {
    return cb(arr);
};
