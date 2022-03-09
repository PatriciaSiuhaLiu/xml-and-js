/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

// function timeout(ms, callback) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve();
//       callback();
//     }, ms);
//   });
// }
function timeout(ms/*, callback*/) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
      //callback();
    }, ms);
  });
}

// function generateRandomNumber() {
//   return Math.floor(Math.random() * 40);
// }
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 40);
}

// function generateData(callback) {
//   timeout(1000, function () {
//     const data = Array.from({ length: 20 }, generateRandomNumber);
//     callback(data);
//   });
// }
const generateData = async () => {
  return new Promise((resolve, reject)=>{
    const data = Array.from({ length: 20 }, generateRandomNumber);
    timeout(1000).then(resolve(data));
  });
  
}

// function convertToFeet(meters, callback) {
//   const feet = meters * 3.2808;
//   timeout(3500, function () {
//     callback(feet);
//   });
// }

const convertToFeet = async (meters) => {
  
  return new Promise((resolve,reject)=>{
    const feet = meters * 3.2808;
    timeout(3500).then(resolve(feet))
  });
}
 const processData= async (data)  => {
  return new Promise((resolve)=>{
    data.map(async function (value) {
     
      let feet = await convertToFeet(value);
      logResult(value, feet)

  });
  resolve("Finish");
  })
  
}

// const processData =  async (data) => {
//   return new Promise(()=>{
//     data.map(function (value) {
//       resolve(value);
//     });

//   });
 
// }

// function processData(data, callback) {
//   data.map(function (value) {
//     callback(value);
//   });
// }
function logResult(meters, feet) {
  console.log(`Converted ${meters}m to ${feet}ft`);
}

async function  main() {
  console.log("Start");
  const data = await generateData();
 // console.log(data);
  const processedData = await processData(data);



  // generateData(function (data) {
  //   processData(data, function (value) {
  //     convertToFeet(value, function (result) {
  //       logResult(value, result);
  //     });
  //   });
  // });
  //console.log(processedData);
  console.log("Finish");

  //can use then also
  // person.split().then((data)=>{
  //   console.log
  //     })
}

main();
