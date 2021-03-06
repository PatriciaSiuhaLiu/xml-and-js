(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"../data/card.json":2}],2:[function(require,module,exports){
module.exports=[{"credit_card_no":"4041371883851","credit_card_type":"visa","country_code":"KZ","country":"Kazakhstan"},
{"credit_card_no":"4017952094389330","credit_card_type":"visa","country_code":"NG","country":"Nigeria"},
{"credit_card_no":"4017959347600","credit_card_type":"visa","country_code":"PL","country":"Poland"},
{"credit_card_no":"4017958938797604","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017958693916233","credit_card_type":"visa","country_code":"MA","country":"Morocco"},
{"credit_card_no":"4041376988069","credit_card_type":"visa","country_code":"YE","country":"Yemen"},
{"credit_card_no":"4017950287144","credit_card_type":"visa","country_code":"RU","country":"Russia"},
{"credit_card_no":"4017955249311562","credit_card_type":"visa","country_code":"RU","country":"Russia"},
{"credit_card_no":"4041373314988","credit_card_type":"visa","country_code":"US","country":"United States"},
{"credit_card_no":"4041373375046210","credit_card_type":"visa","country_code":"NG","country":"Nigeria"},
{"credit_card_no":"4017957762955700","credit_card_type":"visa","country_code":"DO","country":"Dominican Republic"},
{"credit_card_no":"4041372016071","credit_card_type":"visa","country_code":"AM","country":"Armenia"},
{"credit_card_no":"4041376322454130","credit_card_type":"visa","country_code":"PH","country":"Philippines"},
{"credit_card_no":"4041377405097","credit_card_type":"visa","country_code":"FR","country":"France"},
{"credit_card_no":"4041373101370967","credit_card_type":"visa","country_code":"PH","country":"Philippines"},
{"credit_card_no":"4017950022081060","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017958211138","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017957256340","credit_card_type":"visa","country_code":"TH","country":"Thailand"},
{"credit_card_no":"4017958014212957","credit_card_type":"visa","country_code":"JP","country":"Japan"},
{"credit_card_no":"4041375191210","credit_card_type":"visa","country_code":"RU","country":"Russia"},
{"credit_card_no":"4041375016151","credit_card_type":"visa","country_code":"BR","country":"Brazil"},
{"credit_card_no":"4017956723950123","credit_card_type":"visa","country_code":"PH","country":"Philippines"},
{"credit_card_no":"4041374676054","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4041371373881299","credit_card_type":"visa","country_code":"NG","country":"Nigeria"},
{"credit_card_no":"4041371694225614","credit_card_type":"visa","country_code":"PH","country":"Philippines"},
{"credit_card_no":"4041373013978","credit_card_type":"visa","country_code":"LS","country":"Lesotho"},
{"credit_card_no":"4041375272564","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017952153674135","credit_card_type":"visa","country_code":"FR","country":"France"},
{"credit_card_no":"4017956571127030","credit_card_type":"visa","country_code":"AL","country":"Albania"},
{"credit_card_no":"4017951268358204","credit_card_type":"visa","country_code":"CO","country":"Colombia"},
{"credit_card_no":"4017957635969227","credit_card_type":"visa","country_code":"PH","country":"Philippines"},
{"credit_card_no":"4017955893615","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4041370325515831","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4041370078495","credit_card_type":"visa","country_code":"FR","country":"France"},
{"credit_card_no":"4041376138044042","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4041370993297","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017959972019","credit_card_type":"visa","country_code":"DE","country":"Germany"},
{"credit_card_no":"4017955127618","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017957886773","credit_card_type":"visa","country_code":"RS","country":"Serbia"},
{"credit_card_no":"4017952016667078","credit_card_type":"visa","country_code":"PK","country":"Pakistan"},
{"credit_card_no":"4017950904563508","credit_card_type":"visa","country_code":"US","country":"United States"},
{"credit_card_no":"4041372680145378","credit_card_type":"visa","country_code":"ZA","country":"South Africa"},
{"credit_card_no":"4017958730575158","credit_card_type":"visa","country_code":"NG","country":"Nigeria"},
{"credit_card_no":"4017950750080854","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017956548937","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017953499069915","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017952621104681","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017959972597","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017958031957","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017951862655","credit_card_type":"visa","country_code":"JP","country":"Japan"},
{"credit_card_no":"4017959926451303","credit_card_type":"visa","country_code":"FR","country":"France"},
{"credit_card_no":"4041379177249","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4041377469382738","credit_card_type":"visa","country_code":"HT","country":"Haiti"},
{"credit_card_no":"4041370883076","credit_card_type":"visa","country_code":"PT","country":"Portugal"},
{"credit_card_no":"4017956086367","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017957167950","credit_card_type":"visa","country_code":"AZ","country":"Azerbaijan"},
{"credit_card_no":"4017958068967","credit_card_type":"visa","country_code":"CZ","country":"Czech Republic"},
{"credit_card_no":"4041374868676653","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017955142666","credit_card_type":"visa","country_code":"HR","country":"Croatia"},
{"credit_card_no":"4041378190155120","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017951385879058","credit_card_type":"visa","country_code":"AF","country":"Afghanistan"},
{"credit_card_no":"4041379140908220","credit_card_type":"visa","country_code":"GT","country":"Guatemala"},
{"credit_card_no":"4017954187782876","credit_card_type":"visa","country_code":"EC","country":"Ecuador"},
{"credit_card_no":"4041376738407","credit_card_type":"visa","country_code":"RU","country":"Russia"},
{"credit_card_no":"4017951582478399","credit_card_type":"visa","country_code":"PY","country":"Paraguay"},
{"credit_card_no":"4041370073164949","credit_card_type":"visa","country_code":"JP","country":"Japan"},
{"credit_card_no":"4017955433940200","credit_card_type":"visa","country_code":"CZ","country":"Czech Republic"},
{"credit_card_no":"4041379030687","credit_card_type":"visa","country_code":"NG","country":"Nigeria"},
{"credit_card_no":"4017955238910","credit_card_type":"visa","country_code":"JP","country":"Japan"},
{"credit_card_no":"4017952682417","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017959443714","credit_card_type":"visa","country_code":"PH","country":"Philippines"},
{"credit_card_no":"4017959651019","credit_card_type":"visa","country_code":"NP","country":"Nepal"},
{"credit_card_no":"4017956360414904","credit_card_type":"visa","country_code":"KR","country":"South Korea"},
{"credit_card_no":"4017959574820973","credit_card_type":"visa","country_code":"US","country":"United States"},
{"credit_card_no":"4041372194018301","credit_card_type":"visa","country_code":"BA","country":"Bosnia and Herzegovina"},
{"credit_card_no":"4017954292280","credit_card_type":"visa","country_code":"BR","country":"Brazil"},
{"credit_card_no":"4041374163869045","credit_card_type":"visa","country_code":"NE","country":"Niger"},
{"credit_card_no":"4017955158779","credit_card_type":"visa","country_code":"UG","country":"Uganda"},
{"credit_card_no":"4017954500674","credit_card_type":"visa","country_code":"DE","country":"Germany"},
{"credit_card_no":"4017952116785317","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017953782052065","credit_card_type":"visa","country_code":"PL","country":"Poland"},
{"credit_card_no":"4041378387302","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4041377605670","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017954677076","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4041372130708","credit_card_type":"visa","country_code":"FR","country":"France"},
{"credit_card_no":"4041376658944","credit_card_type":"visa","country_code":"US","country":"United States"},
{"credit_card_no":"4017953452847505","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017951033894517","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4041378853351941","credit_card_type":"visa","country_code":"BR","country":"Brazil"},
{"credit_card_no":"4017952567752196","credit_card_type":"visa","country_code":"AL","country":"Albania"},
{"credit_card_no":"4041379408932383","credit_card_type":"visa","country_code":"RU","country":"Russia"},
{"credit_card_no":"4041374981256","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017956466069685","credit_card_type":"visa","country_code":"PL","country":"Poland"},
{"credit_card_no":"4041374395812","credit_card_type":"visa","country_code":"RU","country":"Russia"},
{"credit_card_no":"4017957366990","credit_card_type":"visa","country_code":"VN","country":"Vietnam"},
{"credit_card_no":"4017951179423","credit_card_type":"visa","country_code":"TH","country":"Thailand"},
{"credit_card_no":"4017955272858083","credit_card_type":"visa","country_code":"RU","country":"Russia"},
{"credit_card_no":"4017954765737706","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017958347122","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017950936202240","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4041376205825810","credit_card_type":"visa","country_code":"AR","country":"Argentina"},
{"credit_card_no":"4017958804155","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017955161764178","credit_card_type":"visa","country_code":"PE","country":"Peru"},
{"credit_card_no":"4041374535342","credit_card_type":"visa","country_code":"ZA","country":"South Africa"},
{"credit_card_no":"4041379182627092","credit_card_type":"visa","country_code":"PL","country":"Poland"},
{"credit_card_no":"4041370853624","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4041377966277480","credit_card_type":"visa","country_code":"PL","country":"Poland"},
{"credit_card_no":"4017950539056001","credit_card_type":"visa","country_code":"MY","country":"Malaysia"},
{"credit_card_no":"4041375165016","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017957910656","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017952979938","credit_card_type":"visa","country_code":"BG","country":"Bulgaria"},
{"credit_card_no":"4017951696293","credit_card_type":"visa","country_code":"BR","country":"Brazil"},
{"credit_card_no":"4017958794580979","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4041378850350136","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017957414451","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017951789767","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4041375438561","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4041370806879","credit_card_type":"visa","country_code":"UA","country":"Ukraine"},
{"credit_card_no":"4041372098823566","credit_card_type":"visa","country_code":"RU","country":"Russia"},
{"credit_card_no":"4017951314632","credit_card_type":"visa","country_code":"SE","country":"Sweden"},
{"credit_card_no":"4041377092929","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4041375384096","credit_card_type":"visa","country_code":"UA","country":"Ukraine"},
{"credit_card_no":"4041375080322","credit_card_type":"visa","country_code":"MN","country":"Mongolia"},
{"credit_card_no":"4041372163121805","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4041373691996544","credit_card_type":"visa","country_code":"TZ","country":"Tanzania"},
{"credit_card_no":"4041371984324424","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017952462603544","credit_card_type":"visa","country_code":"RU","country":"Russia"},
{"credit_card_no":"4017953497351","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4041375375870648","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4041375952202934","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017951293547","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4041374305672273","credit_card_type":"visa","country_code":"KR","country":"South Korea"},
{"credit_card_no":"4017952509495","credit_card_type":"visa","country_code":"FR","country":"France"},
{"credit_card_no":"4017952492586511","credit_card_type":"visa","country_code":"VN","country":"Vietnam"},
{"credit_card_no":"4041370403180","credit_card_type":"visa","country_code":"RU","country":"Russia"},
{"credit_card_no":"4017959545625","credit_card_type":"visa","country_code":"IE","country":"Ireland"},
{"credit_card_no":"4017952575064006","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017954078135","credit_card_type":"visa","country_code":"PE","country":"Peru"},
{"credit_card_no":"4041370965405863","credit_card_type":"visa","country_code":"CA","country":"Canada"},
{"credit_card_no":"4041370783411382","credit_card_type":"visa","country_code":"PH","country":"Philippines"},
{"credit_card_no":"4041376180642","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4041374803112","credit_card_type":"visa","country_code":"TZ","country":"Tanzania"},
{"credit_card_no":"4041378524417","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017953312518213","credit_card_type":"visa","country_code":"PK","country":"Pakistan"},
{"credit_card_no":"4041374262889","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4041376385027","credit_card_type":"visa","country_code":"UA","country":"Ukraine"},
{"credit_card_no":"4017959621368","credit_card_type":"visa","country_code":"CM","country":"Cameroon"},
{"credit_card_no":"4017959253543","credit_card_type":"visa","country_code":"SE","country":"Sweden"},
{"credit_card_no":"4017950904698","credit_card_type":"visa","country_code":"PH","country":"Philippines"},
{"credit_card_no":"4041379296044291","credit_card_type":"visa","country_code":"SE","country":"Sweden"},
{"credit_card_no":"4041372208934","credit_card_type":"visa","country_code":"US","country":"United States"},
{"credit_card_no":"4041373616166900","credit_card_type":"visa","country_code":"PH","country":"Philippines"},
{"credit_card_no":"4017951063379","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017955546787670","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4041377714737884","credit_card_type":"visa","country_code":"CR","country":"Costa Rica"},
{"credit_card_no":"4041379006539","credit_card_type":"visa","country_code":"PT","country":"Portugal"},
{"credit_card_no":"4041379167455089","credit_card_type":"visa","country_code":"SA","country":"Saudi Arabia"},
{"credit_card_no":"4017952828580","credit_card_type":"visa","country_code":"FR","country":"France"},
{"credit_card_no":"4041371617327109","credit_card_type":"visa","country_code":"DE","country":"Germany"},
{"credit_card_no":"4017953571314197","credit_card_type":"visa","country_code":"EC","country":"Ecuador"},
{"credit_card_no":"4017953831427","credit_card_type":"visa","country_code":"JP","country":"Japan"},
{"credit_card_no":"4017951464320","credit_card_type":"visa","country_code":"BR","country":"Brazil"},
{"credit_card_no":"4041374963731429","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4041379595588329","credit_card_type":"visa","country_code":"AM","country":"Armenia"},
{"credit_card_no":"4017955359641","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017958253692","credit_card_type":"visa","country_code":"SE","country":"Sweden"},
{"credit_card_no":"4041371596676948","credit_card_type":"visa","country_code":"CD","country":"Democratic Republic of the Congo"},
{"credit_card_no":"4041378936108219","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4041372858993","credit_card_type":"visa","country_code":"ML","country":"Mali"},
{"credit_card_no":"4041379862265718","credit_card_type":"visa","country_code":"PL","country":"Poland"},
{"credit_card_no":"4041371177643929","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017950259912938","credit_card_type":"visa","country_code":"UA","country":"Ukraine"},
{"credit_card_no":"4041377327372327","credit_card_type":"visa","country_code":"AR","country":"Argentina"},
{"credit_card_no":"4017956881973","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4041375157138","credit_card_type":"visa","country_code":"AF","country":"Afghanistan"},
{"credit_card_no":"4017959437634678","credit_card_type":"visa","country_code":"TN","country":"Tunisia"},
{"credit_card_no":"4017958198399133","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017951516856165","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4041375243044012","credit_card_type":"visa","country_code":"IE","country":"Ireland"},
{"credit_card_no":"4041372426989121","credit_card_type":"visa","country_code":"PH","country":"Philippines"},
{"credit_card_no":"4041376254421","credit_card_type":"visa","country_code":"FI","country":"Finland"},
{"credit_card_no":"4041371583772957","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017950795527356","credit_card_type":"visa","country_code":"PT","country":"Portugal"},
{"credit_card_no":"4041373417591","credit_card_type":"visa","country_code":"PT","country":"Portugal"},
{"credit_card_no":"4017959009697","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4041371491705644","credit_card_type":"visa","country_code":"CU","country":"Cuba"},
{"credit_card_no":"4041371265596849","credit_card_type":"visa","country_code":"BD","country":"Bangladesh"},
{"credit_card_no":"4041372983700","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017959843178","credit_card_type":"visa","country_code":"BR","country":"Brazil"},
{"credit_card_no":"4041371689838660","credit_card_type":"visa","country_code":"PH","country":"Philippines"},
{"credit_card_no":"4041372319590","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017957756400127","credit_card_type":"visa","country_code":"ID","country":"Indonesia"},
{"credit_card_no":"4017958230442735","credit_card_type":"visa","country_code":"MD","country":"Moldova"},
{"credit_card_no":"4041372339432","credit_card_type":"visa","country_code":"BR","country":"Brazil"},
{"credit_card_no":"4041376512974426","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4041379357549246","credit_card_type":"visa","country_code":"SE","country":"Sweden"},
{"credit_card_no":"4041372706622","credit_card_type":"visa","country_code":"CN","country":"China"},
{"credit_card_no":"4017957942493","credit_card_type":"visa","country_code":"VN","country":"Vietnam"},
{"credit_card_no":"4017959533316","credit_card_type":"visa","country_code":"CO","country":"Colombia"},
{"credit_card_no":"4041371042268","credit_card_type":"visa","country_code":"US","country":"United States"}]
},{}],3:[function(require,module,exports){

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


},{"./api/card.js":1}]},{},[3]);
