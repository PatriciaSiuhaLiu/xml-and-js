
const { getAll } = require("./api/card.js");
const renderTable = (data)=>{
const tbody = document.getElementById("table-body");
if(!tbody)
{
    throw new Error('Table body not found');
}
const rows = data.reduce(
    (acc,{credit_card_no,credit_card_type,country_code,country})=>{
    return acc + `<tr id="table-row-${credit_card_no}"><td>${credit_card_no}</td><td>${credit_card_type}</td>
    <td>${country_code}</td><td>${country}</td></tr>`}
    ,``
);


tbody.innerHTML = rows;

}


getAll().then(({ data }) => renderTable(data));
//As not being able to picked by html after browserify, exposing it using window.
window.onSubmit = (event) => {
  event.preventDefault();
  const cardNo = event.target.cardNo.value;
  const cardType = event.target.cardType.value;
  const countryCode = event.target.countryCode.value;
  const country = event.target.country.value;
  const obj ={credit_card_no:cardNo,credit_card_type:cardType,country_code:countryCode,country:country}
  getAll(obj).then(({ data }) => renderTable(data));
};

window.onReset = () => {
  getAll().then(({ data }) => renderTable(data));
};

