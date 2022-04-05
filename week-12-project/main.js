// const loadData = (path)=>
// new Promise((resolve)=>{
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange= ({target})=>{
//         if(target.readyState == 4 && target.status == 200){
//             console.log("22..")
//             resolve(JSON.parse(target.response));
//         }
//     };
    
//     console.log("11..")
//     xhttp.open("GET",path,true);
//     xhttp.send();
// })
const { getAll } = require("./api/people.js");
const renderTable = (data)=>{
const tbody = document.getElementById("table-body");
if(!tbody)
{
    throw new Error('Table body not found');
}
const rows = data.reduce(
    (acc,{id,first_name,last_name,email,gender,ip_address,country,country_code,postal_code,phone})=>{
    return acc + `<tr id="table-row-${id}"><td>${id}</td><td>${first_name}</td>
    <td>${last_name}</td><td>${email}</td><td>${gender}</td><td>${ip_address}</td>
    <td>${country}</td><td>${country_code}</td><td>${postal_code}</td><td>${phone}</td></tr>`}
    ,``
);


tbody.innerHTML = rows;

}

// loadData('./people.json').then((data)=>{
//     renderTable(data);
// });
getAll().then(({ data }) => renderTable(data));
//As not being able to picked by html after browserify, exposing it using window.
window.onSubmit = (event) => {
  event.preventDefault();
  const id = event.target.id.value;
  const firstName = event.target.firstName.value;
  const lastName = event.target.lastName.value;
  const obj ={id:id,first_name:firstName,last_name:lastName}
  getAll(obj).then(({ data }) => renderTable(data));
};

window.onReset = () => {
  getAll().then(({ data }) => renderTable(data));
};

