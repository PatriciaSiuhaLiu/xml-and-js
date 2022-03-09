/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

function timeout(ms) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}


const generateRandomNumber = () => {
  return Math.floor(Math.random() * 40);
}

const generateData = async () => {
  return new Promise((resolve, reject)=>{
    const data = Array.from({ length: 20 }, generateRandomNumber);
    timeout(1000).then(resolve(data));
  });
  
}

const convertToFeet = async (meters) => {
  
  return new Promise((resolve,reject)=>{
    const feet = meters * 3.2808;
    timeout(3500).then(resolve(feet))
  });
}
 const processData= async (data)  => {
  return new Promise((resolve)=>{
    data.map(async (value)=> {
     
      let feet = await convertToFeet(value);
      logResult(value, feet)

  });
  resolve("Finish");
  })
  
}


function logResult(meters, feet) {
  console.log(`Converted ${meters}m to ${feet}ft`);
}

async function  main() {
  console.log("Start");
  const data = await generateData();
  const processedData = await processData(data);

  console.log("Finish");

}

main();
