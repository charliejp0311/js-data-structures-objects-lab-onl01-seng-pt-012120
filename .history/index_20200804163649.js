// Write your solution in this file!
let driver = {};

let updateDriverWithKeyAndValue = (driver,key,value) => {
    const newDriver = Object.assign({},driver);
    newDriver[key] = value; 
    return newDriver;
};

let destructivelyUpdateDriverWithKeyAndValue = (driver,key,value) =>{
    driver[key] = value;
    return driver;
};

let deleteFromDriverByKey = (driver,key,value) => {

};

let destructivelyDeleteFromDriverByKey = (driver,key,value) => {

};