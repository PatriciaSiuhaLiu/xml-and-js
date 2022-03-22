const people = require('../data/people.json');
const getAll = ({id,first_name,last_name,email,gender,ip_address})=>{
    return new Promise((resolve,reject)=>{
        console.log("prople", people);
        
        let result = Array.from(people);        //craete a copy of people use a let not const as data of result is overwritten
        console.log("Before filter result",result);
        if(first_name)
        result = result.filter(item=>item.first_name===first_name)

        if(last_name)
        result = result.filter(item=>item.last_name===last_name)       

        if(email)
        result = result.filter(item=>item.email===email)

        if(id)
        result = result.filter(item=>item.id===id)

        if(gender)
        result = result.filter(item=>item.gender===gender)

        if(ip_address)
        result = result.filter(item=>item.ip_address===ip_address)
        console.log("prople after filtering", people);
        console.log("result after filtering",result);
        resolve({code:200, data: JSON.stringify(result)});

    });
    
}
const getById = (id)=>{
    return new Promise((resolve, reject)=>{
        let result = Array.from(people);
        //const person = result.find(item=>item.id===id)//this will not work as the id from the url is a strin
        const person = result.find(item=>item.id===Number(id))
        console.log("result after filtering",result);
        console.log("prople after filtering", person);
        // if(person)
        // resolve({code:200, data:JSON.stringify(person)})
        // else
        // resolve({code:404,data: { message:'ID not found' }})

        if (person) {
            resolve({ code: 200, data: JSON.stringify(person) });
          } else {
            resolve({
              code: 404,
              data: JSON.stringify({ message: `No person found for id ${id}` })
            });
          }
    })
}
module.exports = {getAll,getById};