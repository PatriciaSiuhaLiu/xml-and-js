const cards= require("../data/card.json");

const getAll = ({credit_card_no,credit_card_type,country_code,country}={})=>{ //empty object is default value if no parameter is passed to it
   return new Promise((resolve) => {
    //console.log(people);
    let results = Array.from(cards);
   // console.log(results);
if(credit_card_no){
    results = results.filter((p)=>p.credit_card_no==credit_card_no)
}
if(credit_card_type){
    results = results.filter((p)=>p.credit_card_type===credit_card_type)
}
if(country_code){
    results = results.filter((p)=>p.country_code===country_code)
}
if(country){
    results = results.filter((p)=>p.country===country)
}
resolve({statusCode:200,data:results})
 } );
}
const getById = (credit_card_no)=>{
const card = people.find((p)=>p.credit_card_no==credit_card_no)
if(card){
    resolve({statusCode:200, data:card});
}
else{
    resolve({
        statusCode:404,
        data: {message:`Card not found`}
    })
}
}
module.exports = {
    getAll,
    getById
};