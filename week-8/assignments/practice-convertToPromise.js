function timeout(ms) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, ms);
    });
  }
  
  async function inc(a) {
    // await timeout(2000);
    // return a + 1;
    return new Promise((resolve,reject)=>{
        timeout(2000).then(
           resolve(a+1)
        )
    }
    );
  }
//   const sum = async function (a, b) {
//     await timeout(2000);
//     return a + b;
//   };
  const sum =  (a, b) => {
    // await timeout(2000);
    // return a + b;
   return new Promise((resolve)=>{
    timeout(2000).then(()=>{
        resolve(a+b);
    });
   })
  
  };

  
//   const max = async (a, b) => {
//     await timeout(2000);
  
//     return a > b ? a : b;
//   };
const max = async (a, b) => {
    // await timeout(2000);
  
    // return a > b ? a : b;
    return new Promise((resolve)=>{
        timeout(2000).then(()=>{
            resolve(a>b?a:b);
        });
       })
  };
  
  const avg =  (a, b) => {
    // await timeout(2000);
    // const s = await sum(a, b);
    // return s / 2;

    return new Promise((resolve, reject)=>{
        timeout(2000).
        then(()=>sum(a,b))
        .then((s)=>resolve(s/2))
    });
    
  };

  //solution 2
  const avg1 = (a,b)=>
  timeout(3000).then(()=>sum(a,b)).then((s)=>{return (s/2)})
  //or remove the return
 // timeout(3000).then(()=>sum(a,b)).then((s)=> (s/2))
  
  const obj = {
    name: "Marcus Aurelius",
    async split(sep = " ") {
      await timeout(2000);
  
      return this.name.split(sep);
    },
  };

  //await Person.of() //this a static sync function
  
  class Person {
    constructor(name) {
      this.name = name;
    }
  
    static async of(name) {
      await timeout(2000);
  
      return new Person(name);
    }
  
    async split(sep = " ") {
    //   await timeout(2000);
  
    //   return this.name.split(sep);
    return new Promise((resolve, reject)=>{
        timeout(2000)
        .then((s)=>resolve(this.name.split(sep)))
    });

    }
  }
  
  const person = new Person("Marcus Aurelius");
  
   (async () => {

    console.log("await inc(5) =",  await inc(5));
    console.log("await sum(1, 3) =", await sum(1, 3));
    console.log("await max(8, 6) =", await max(8, 6));
    console.log("await avg(8, 6) =", await avg(8, 6));
    console.log("await avg1(8, 6) =", await avg1(8, 6));
    console.log("await obj.split() =", await obj.split());
    console.log("await person.split() =", await person.split());
  //can use then also
//     person.split().then((data)=>{
//   console.log
//     })
  })();
  