const people= require("../data/people.json");

const getAll = ({id,first_name,last_name,email,gender,ip_address}={})=>{ //empty object is default value if no parameter is passed to it
   return new Promise((resolve) => {
    //console.log(people);
    let results = Array.from(people);
   // console.log(results);
if(id){
    results = results.filter((p)=>p.id===id)
}
if(first_name){
    results = results.filter((p)=>p.first_name===first_name)
}
if(last_name){
    results = results.filter((p)=>p.last_name===last_name)
}
if(email){
    results = results.filter((p)=>p.email===email)
}
if(gender){
    results = results.filter((p)=>p.gender===gender)
}
if(ip_address){
    results = results.filter((p)=>p.ip_address===ip_address)
}
resolve({statusCode:200,data:results})
 } );
}
const getById = (id)=>{
const person = people.find((p)=>p.id==id)
if(person){
    resolve({statusCode:200, data:person});
}
else{
    resolve({
        statusCode:404,
        data: {message:`Person not found`}
    })
}
}
module.exports = {
    getAll,
    getById
};