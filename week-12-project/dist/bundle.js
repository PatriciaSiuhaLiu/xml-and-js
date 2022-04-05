(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"../data/people.json":2}],2:[function(require,module,exports){
module.exports=[{"id":1,"first_name":"Enos","last_name":"Board","email":"eboard0@state.tx.us","gender":"Male","ip_address":"115.38.243.11","country":"Kazakhstan","country_code":"KZ","phone":"267-582-4258"},
{"id":2,"first_name":"Kylynn","last_name":"Rhys","email":"krhys1@studiopress.com","gender":"Female","ip_address":"218.13.4.196","country":"China","country_code":"CN","phone":"989-233-5812"},
{"id":3,"first_name":"Mareah","last_name":"Trethewey","email":"mtrethewey2@yolasite.com","gender":"Female","ip_address":"102.33.177.171","country":"Portugal","country_code":"PT","postal_code":"2440-356","phone":"716-387-6446"},
{"id":4,"first_name":"Teirtza","last_name":"Dowse","email":"tdowse3@apache.org","gender":"Female","ip_address":"182.109.30.231","country":"Czech Republic","country_code":"CZ","postal_code":"717 00","phone":"302-680-6447"},
{"id":5,"first_name":"Vicky","last_name":"Abdy","email":"vabdy4@techcrunch.com","gender":"Female","ip_address":"232.18.19.96","country":"Australia","country_code":"AU","postal_code":"7904","phone":"953-738-8087"},
{"id":6,"first_name":"Christoffer","last_name":"Antoons","email":"cantoons5@yandex.ru","gender":"Male","ip_address":"255.42.68.164","country":"China","country_code":"CN","phone":"907-731-7265"},
{"id":7,"first_name":"Jarret","last_name":"Beardshaw","email":"jbeardshaw6@unicef.org","gender":"Male","ip_address":"100.42.238.116","country":"China","country_code":"CN","phone":"594-960-9468"},
{"id":8,"first_name":"Arty","last_name":"Brooker","email":"abrooker7@weibo.com","gender":"Male","ip_address":"83.91.127.149","country":"Costa Rica","country_code":"CR","postal_code":"60112","phone":"271-585-0860"},
{"id":9,"first_name":"Kendrick","last_name":"Chimenti","email":"kchimenti8@noaa.gov","gender":"Male","ip_address":"106.33.255.88","country":"Philippines","country_code":"PH","postal_code":"3017","phone":"669-864-2098"},
{"id":10,"first_name":"Stella","last_name":"Jorez","email":"sjorez9@wikipedia.org","gender":"Female","ip_address":"190.22.149.133","country":"Philippines","country_code":"PH","postal_code":"6704","phone":"871-922-6845"},
{"id":11,"first_name":"Gav","last_name":"Dmych","email":"gdmycha@ovh.net","gender":"Male","ip_address":"141.229.107.116","country":"Brazil","country_code":"BR","postal_code":"29190-000","phone":"652-608-0365"},
{"id":12,"first_name":"Reeva","last_name":"Domney","email":"rdomneyb@tripadvisor.com","gender":"Female","ip_address":"51.13.168.218","country":"Peru","country_code":"PE","phone":"981-120-6319"},
{"id":13,"first_name":"Lem","last_name":"Guihen","email":"lguihenc@state.gov","gender":"Male","ip_address":"109.80.16.173","country":"Ukraine","country_code":"UA","phone":"388-761-1178"},
{"id":14,"first_name":"Justis","last_name":"Sarch","email":"jsarchd@usda.gov","gender":"Male","ip_address":"189.206.255.192","country":"China","country_code":"CN","phone":"256-145-3937"},
{"id":15,"first_name":"Allina","last_name":"Gambles","email":"agamblese@dailymail.co.uk","gender":"Female","ip_address":"42.67.224.30","country":"Yemen","country_code":"YE","phone":"974-301-7518"},
{"id":16,"first_name":"Town","last_name":"Houldcroft","email":"thouldcroftf@sbwire.com","gender":"Bigender","ip_address":"79.62.50.79","country":"Kazakhstan","country_code":"KZ","phone":"247-176-8314"},
{"id":17,"first_name":"Cally","last_name":"Willsmore","email":"cwillsmoreg@altervista.org","gender":"Female","ip_address":"60.154.183.155","country":"Peru","country_code":"PE","phone":"316-792-2906"},
{"id":18,"first_name":"Margaux","last_name":"Francesch","email":"mfranceschh@bandcamp.com","gender":"Female","ip_address":"99.81.55.26","country":"Philippines","country_code":"PH","postal_code":"6344","phone":"415-100-6506"},
{"id":19,"first_name":"Bradly","last_name":"Olenichev","email":"bolenichevi@cmu.edu","gender":"Male","ip_address":"27.94.49.87","country":"Portugal","country_code":"PT","postal_code":"9950-325","phone":"633-663-0618"},
{"id":20,"first_name":"Elset","last_name":"Tulip","email":"etulipj@ezinearticles.com","gender":"Female","ip_address":"156.237.219.113","country":"France","country_code":"FR","postal_code":"85923 CEDEX 9","phone":"452-346-1432"},
{"id":21,"first_name":"Tobit","last_name":"Rosedale","email":"trosedalek@com.com","gender":"Male","ip_address":"162.186.130.207","country":"China","country_code":"CN","phone":"333-789-2688"},
{"id":22,"first_name":"Jehanna","last_name":"Lauder","email":"jlauderl@ycombinator.com","gender":"Female","ip_address":"61.129.254.246","country":"Colombia","country_code":"CO","postal_code":"862069","phone":"337-179-7699"},
{"id":23,"first_name":"Noelani","last_name":"Callister","email":"ncallisterm@princeton.edu","gender":"Female","ip_address":"186.248.108.250","country":"Philippines","country_code":"PH","postal_code":"6007","phone":"736-604-8724"},
{"id":24,"first_name":"Reggi","last_name":"Selwyn","email":"rselwynn@java.com","gender":"Bigender","ip_address":"198.1.188.75","country":"Israel","country_code":"IL","phone":"488-228-9081"},
{"id":25,"first_name":"Garrett","last_name":"Westhoff","email":"gwesthoffo@seesaa.net","gender":"Male","ip_address":"209.111.161.116","country":"Czech Republic","country_code":"CZ","postal_code":"398 53","phone":"312-684-6568"},
{"id":26,"first_name":"Hamlen","last_name":"Brogi","email":"hbrogip@nature.com","gender":"Male","ip_address":"212.181.65.65","country":"Canada","country_code":"CA","postal_code":"E4E","phone":"131-990-9955"},
{"id":27,"first_name":"Leeann","last_name":"Strongman","email":"lstrongmanq@bloomberg.com","gender":"Female","ip_address":"199.49.98.122","country":"France","country_code":"FR","postal_code":"53085 CEDEX 9","phone":"200-726-9915"},
{"id":28,"first_name":"Haley","last_name":"Howton","email":"hhowtonr@pinterest.com","gender":"Male","ip_address":"40.134.249.178","country":"China","country_code":"CN","phone":"288-884-4253"},
{"id":29,"first_name":"Rockie","last_name":"Greste","email":"rgrestes@wordpress.org","gender":"Male","ip_address":"137.118.249.50","country":"Sweden","country_code":"SE","postal_code":"314 32","phone":"140-231-9603"},
{"id":30,"first_name":"Keenan","last_name":"Chettle","email":"kchettlet@networkadvertising.org","gender":"Male","ip_address":"90.11.235.237","country":"Croatia","country_code":"HR","postal_code":"48356","phone":"495-405-1979"},
{"id":31,"first_name":"Morry","last_name":"Frowen","email":"mfrowenu@123-reg.co.uk","gender":"Male","ip_address":"104.62.152.62","country":"Brazil","country_code":"BR","postal_code":"29330-000","phone":"720-429-9855"},
{"id":32,"first_name":"Gerek","last_name":"Ripsher","email":"gripsherv@jiathis.com","gender":"Male","ip_address":"112.141.82.159","country":"Ukraine","country_code":"UA","phone":"434-157-1788"},
{"id":33,"first_name":"Wynny","last_name":"Mascall","email":"wmascallw@freewebs.com","gender":"Female","ip_address":"136.133.174.255","country":"Russia","country_code":"RU","postal_code":"142672","phone":"403-238-3823"},
{"id":34,"first_name":"Farand","last_name":"Kesteven","email":"fkestevenx@columbia.edu","gender":"Female","ip_address":"191.153.175.213","country":"China","country_code":"CN","phone":"952-338-2606"},
{"id":35,"first_name":"Sara-ann","last_name":"Dyerson","email":"sdyersony@mediafire.com","gender":"Female","ip_address":"82.174.28.162","country":"Argentina","country_code":"AR","postal_code":"4137","phone":"615-282-6138"},
{"id":36,"first_name":"Dalston","last_name":"Goodayle","email":"dgoodaylez@technorati.com","gender":"Male","ip_address":"20.161.14.2","country":"Morocco","country_code":"MA","phone":"271-717-2736"},
{"id":37,"first_name":"Arluene","last_name":"Lightbowne","email":"alightbowne10@google.co.uk","gender":"Female","ip_address":"52.144.157.128","country":"Ireland","country_code":"IE","postal_code":"V23","phone":"619-848-0175"},
{"id":38,"first_name":"Feodor","last_name":"Cowdery","email":"fcowdery11@wsj.com","gender":"Polygender","ip_address":"206.134.41.142","country":"Brazil","country_code":"BR","postal_code":"69190-000","phone":"932-908-3089"},
{"id":39,"first_name":"Florri","last_name":"MacCallester","email":"fmaccallester12@fema.gov","gender":"Female","ip_address":"11.128.143.141","country":"China","country_code":"CN","phone":"402-138-4621"},
{"id":40,"first_name":"Tyrone","last_name":"Wilden","email":"twilden13@reuters.com","gender":"Male","ip_address":"232.27.160.221","country":"Slovenia","country_code":"SI","postal_code":"4220","phone":"489-266-9726"},
{"id":41,"first_name":"Guillermo","last_name":"Tebbett","email":"gtebbett14@europa.eu","gender":"Male","ip_address":"89.140.203.197","country":"China","country_code":"CN","phone":"543-288-0107"},
{"id":42,"first_name":"Sadella","last_name":"Bartoszewski","email":"sbartoszewski15@domainmarket.com","gender":"Female","ip_address":"214.26.51.44","country":"China","country_code":"CN","phone":"372-110-9983"},
{"id":43,"first_name":"Seana","last_name":"Haughan","email":"shaughan16@hhs.gov","gender":"Female","ip_address":"233.102.115.189","country":"Thailand","country_code":"TH","postal_code":"46170","phone":"841-259-2096"},
{"id":44,"first_name":"Karoly","last_name":"O'Criane","email":"kocriane17@nsw.gov.au","gender":"Male","ip_address":"72.224.223.71","country":"Portugal","country_code":"PT","postal_code":"2460-825","phone":"351-960-6879"},
{"id":45,"first_name":"Berty","last_name":"Kennion","email":"bkennion18@webmd.com","gender":"Male","ip_address":"231.86.171.123","country":"Russia","country_code":"RU","postal_code":"396931","phone":"554-481-2579"},
{"id":46,"first_name":"Peyton","last_name":"Messenbird","email":"pmessenbird19@google.es","gender":"Male","ip_address":"229.5.13.214","country":"Brazil","country_code":"BR","postal_code":"06500-000","phone":"639-920-1187"},
{"id":47,"first_name":"Cloe","last_name":"Coare","email":"ccoare1a@wisc.edu","gender":"Female","ip_address":"217.7.8.79","country":"Brazil","country_code":"BR","postal_code":"62500-000","phone":"926-599-2923"},
{"id":48,"first_name":"Marris","last_name":"Gaitskill","email":"mgaitskill1b@imdb.com","gender":"Female","ip_address":"5.120.100.92","country":"Mongolia","country_code":"MN","phone":"600-113-3325"},
{"id":49,"first_name":"Gilberta","last_name":"Doll","email":"gdoll1c@upenn.edu","gender":"Female","ip_address":"199.33.127.45","country":"Thailand","country_code":"TH","postal_code":"40130","phone":"113-684-5941"},
{"id":50,"first_name":"Lonnard","last_name":"Nequest","email":"lnequest1d@fda.gov","gender":"Male","ip_address":"10.225.34.132","country":"Colombia","country_code":"CO","postal_code":"234008","phone":"642-757-4630"},
{"id":51,"first_name":"Kain","last_name":"Rhubottom","email":"krhubottom1e@furl.net","gender":"Genderfluid","ip_address":"151.3.173.122","country":"Indonesia","country_code":"ID","phone":"324-787-3380"},
{"id":52,"first_name":"Sukey","last_name":"Shropsheir","email":"sshropsheir1f@virginia.edu","gender":"Female","ip_address":"113.54.232.167","country":"China","country_code":"CN","phone":"558-484-8241"},
{"id":53,"first_name":"Luelle","last_name":"Stanwix","email":"lstanwix1g@diigo.com","gender":"Genderfluid","ip_address":"132.119.57.212","country":"Thailand","country_code":"TH","postal_code":"50360","phone":"793-367-3168"},
{"id":54,"first_name":"Leia","last_name":"Gare","email":"lgare1h@amazonaws.com","gender":"Female","ip_address":"230.105.214.231","country":"China","country_code":"CN","phone":"605-777-1802"},
{"id":55,"first_name":"Berthe","last_name":"Tomei","email":"btomei1i@sina.com.cn","gender":"Non-binary","ip_address":"78.188.42.121","country":"Greece","country_code":"GR","phone":"272-527-5099"},
{"id":56,"first_name":"Kassey","last_name":"Ditchburn","email":"kditchburn1j@google.cn","gender":"Female","ip_address":"179.254.58.87","country":"Czech Republic","country_code":"CZ","postal_code":"679 02","phone":"873-108-8298"},
{"id":57,"first_name":"Nels","last_name":"Dadds","email":"ndadds1k@aol.com","gender":"Male","ip_address":"80.233.60.190","country":"Indonesia","country_code":"ID","phone":"616-965-1361"},
{"id":58,"first_name":"Blithe","last_name":"Silk","email":"bsilk1l@deviantart.com","gender":"Female","ip_address":"87.229.59.225","country":"Colombia","country_code":"CO","postal_code":"503068","phone":"413-669-6190"},
{"id":59,"first_name":"Melonie","last_name":"Guymer","email":"mguymer1m@list-manage.com","gender":"Female","ip_address":"73.140.253.69","country":"Russia","country_code":"RU","postal_code":"352275","phone":"497-364-3958"},
{"id":60,"first_name":"Maynard","last_name":"Fransemai","email":"mfransemai1n@kickstarter.com","gender":"Male","ip_address":"61.205.111.0","country":"Indonesia","country_code":"ID","phone":"612-669-1857"},
{"id":61,"first_name":"Joni","last_name":"Lidierth","email":"jlidierth1o@vkontakte.ru","gender":"Female","ip_address":"149.120.30.154","country":"Argentina","country_code":"AR","postal_code":"4205","phone":"761-605-7763"},
{"id":62,"first_name":"Donni","last_name":"Iacovelli","email":"diacovelli1p@google.nl","gender":"Female","ip_address":"128.167.159.247","country":"Ukraine","country_code":"UA","phone":"946-142-0333"},
{"id":63,"first_name":"Kathleen","last_name":"Hastwall","email":"khastwall1q@dell.com","gender":"Female","ip_address":"132.39.91.70","country":"Portugal","country_code":"PT","postal_code":"5400-674","phone":"140-849-8239"},
{"id":64,"first_name":"Ofelia","last_name":"Bedome","email":"obedome1r@marketwatch.com","gender":"Female","ip_address":"145.117.226.190","country":"Peru","country_code":"PE","phone":"544-255-4998"},
{"id":65,"first_name":"Frayda","last_name":"Shaughnessy","email":"fshaughnessy1s@arstechnica.com","gender":"Female","ip_address":"164.124.206.51","country":"Indonesia","country_code":"ID","phone":"494-138-0268"},
{"id":66,"first_name":"Rosalinda","last_name":"Kulic","email":"rkulic1t@reuters.com","gender":"Female","ip_address":"25.167.238.229","country":"Indonesia","country_code":"ID","phone":"885-801-2119"},
{"id":67,"first_name":"Moira","last_name":"Worviell","email":"mworviell1u@cargocollective.com","gender":"Female","ip_address":"124.103.119.149","country":"France","country_code":"FR","postal_code":"69939 CEDEX 20","phone":"230-284-4906"},
{"id":68,"first_name":"Dinnie","last_name":"Ratlee","email":"dratlee1v@smugmug.com","gender":"Genderfluid","ip_address":"233.16.197.103","country":"Chile","country_code":"CL","phone":"885-893-4992"},
{"id":69,"first_name":"Butch","last_name":"Borland","email":"bborland1w@mit.edu","gender":"Male","ip_address":"164.46.125.202","country":"Indonesia","country_code":"ID","phone":"956-827-9074"},
{"id":70,"first_name":"Valentin","last_name":"Tschierse","email":"vtschierse1x@bing.com","gender":"Male","ip_address":"66.140.80.221","country":"China","country_code":"CN","phone":"114-557-6343"},
{"id":71,"first_name":"Claiborne","last_name":"Baff","email":"cbaff1y@hc360.com","gender":"Male","ip_address":"57.96.231.210","country":"China","country_code":"CN","phone":"259-802-2895"},
{"id":72,"first_name":"Orin","last_name":"Forlong","email":"oforlong1z@google.nl","gender":"Male","ip_address":"107.146.42.111","country":"Indonesia","country_code":"ID","phone":"713-208-9690"},
{"id":73,"first_name":"Libbey","last_name":"Josephy","email":"ljosephy20@last.fm","gender":"Female","ip_address":"31.214.198.172","country":"Portugal","country_code":"PT","postal_code":"2040-105","phone":"121-359-2334"},
{"id":74,"first_name":"Teresita","last_name":"Vasyutochkin","email":"tvasyutochkin21@princeton.edu","gender":"Female","ip_address":"181.5.147.136","country":"Honduras","country_code":"HN","phone":"700-853-2994"},
{"id":75,"first_name":"Peggi","last_name":"Gumery","email":"pgumery22@imageshack.us","gender":"Female","ip_address":"81.133.178.77","country":"Portugal","country_code":"PT","postal_code":"7630-125","phone":"804-600-7159"},
{"id":76,"first_name":"Jarred","last_name":"Betton","email":"jbetton23@zimbio.com","gender":"Male","ip_address":"200.72.57.213","country":"Indonesia","country_code":"ID","phone":"763-775-0616"},
{"id":77,"first_name":"Grantley","last_name":"Janic","email":"gjanic24@is.gd","gender":"Male","ip_address":"85.58.243.9","country":"Peru","country_code":"PE","phone":"517-728-8969"},
{"id":78,"first_name":"Marline","last_name":"Renfrew","email":"mrenfrew25@taobao.com","gender":"Female","ip_address":"82.61.128.54","country":"Indonesia","country_code":"ID","phone":"609-278-0743"},
{"id":79,"first_name":"Claudio","last_name":"Delafont","email":"cdelafont26@nature.com","gender":"Male","ip_address":"148.211.6.119","country":"Saint Vincent and the Grenadines","country_code":"VC","phone":"254-225-2552"},
{"id":80,"first_name":"Lothaire","last_name":"McCurt","email":"lmccurt27@va.gov","gender":"Male","ip_address":"56.65.168.85","country":"Tajikistan","country_code":"TJ","phone":"825-535-1881"},
{"id":81,"first_name":"Shay","last_name":"Quarrington","email":"squarrington28@prnewswire.com","gender":"Female","ip_address":"39.147.7.102","country":"Libya","country_code":"LY","phone":"197-480-9106"},
{"id":82,"first_name":"Duke","last_name":"Leger","email":"dleger29@t-online.de","gender":"Male","ip_address":"32.171.215.137","country":"Iran","country_code":"IR","phone":"266-377-0398"},
{"id":83,"first_name":"Ardella","last_name":"Gomes","email":"agomes2a@php.net","gender":"Female","ip_address":"115.45.62.74","country":"Tajikistan","country_code":"TJ","phone":"503-844-0581"},
{"id":84,"first_name":"Jillana","last_name":"Pemberton","email":"jpemberton2b@typepad.com","gender":"Female","ip_address":"64.254.75.114","country":"China","country_code":"CN","phone":"992-116-9285"},
{"id":85,"first_name":"Stinky","last_name":"Alsobrook","email":"salsobrook2c@arizona.edu","gender":"Male","ip_address":"138.255.29.37","country":"Albania","country_code":"AL","phone":"283-748-4718"},
{"id":86,"first_name":"Vivia","last_name":"Cresar","email":"vcresar2d@tripod.com","gender":"Female","ip_address":"30.115.72.77","country":"China","country_code":"CN","phone":"383-165-7718"},
{"id":87,"first_name":"Irvine","last_name":"Smurthwaite","email":"ismurthwaite2e@elpais.com","gender":"Male","ip_address":"151.156.217.21","country":"Belarus","country_code":"BY","phone":"128-290-2796"},
{"id":88,"first_name":"Loleta","last_name":"Timmins","email":"ltimmins2f@techcrunch.com","gender":"Female","ip_address":"171.108.32.99","country":"Mexico","country_code":"MX","postal_code":"91140","phone":"808-389-0866"},
{"id":89,"first_name":"Juliann","last_name":"Norgan","email":"jnorgan2g@wunderground.com","gender":"Female","ip_address":"208.249.73.28","country":"France","country_code":"FR","postal_code":"27509 CEDEX","phone":"449-144-1390"},
{"id":90,"first_name":"Ilario","last_name":"Larrad","email":"ilarrad2h@ihg.com","gender":"Male","ip_address":"60.179.166.229","country":"Indonesia","country_code":"ID","phone":"379-180-7582"},
{"id":91,"first_name":"Rafaello","last_name":"Gidman","email":"rgidman2i@time.com","gender":"Male","ip_address":"210.141.57.93","country":"Australia","country_code":"AU","postal_code":"1315","phone":"690-427-7436"},
{"id":92,"first_name":"Daryle","last_name":"Lepper","email":"dlepper2j@wikispaces.com","gender":"Non-binary","ip_address":"150.45.28.234","country":"China","country_code":"CN","phone":"490-168-5608"},
{"id":93,"first_name":"Cesaro","last_name":"Bengtsen","email":"cbengtsen2k@amazon.co.uk","gender":"Genderfluid","ip_address":"203.72.241.197","country":"Indonesia","country_code":"ID","phone":"188-594-7283"},
{"id":94,"first_name":"Brander","last_name":"Wickrath","email":"bwickrath2l@dmoz.org","gender":"Male","ip_address":"207.247.207.141","country":"Luxembourg","country_code":"LU","postal_code":"L-6693","phone":"102-587-2716"},
{"id":95,"first_name":"Davidde","last_name":"Lydon","email":"dlydon2m@marriott.com","gender":"Non-binary","ip_address":"103.77.148.194","country":"Moldova","country_code":"MD","postal_code":"MD-4901","phone":"594-646-9550"},
{"id":96,"first_name":"Eula","last_name":"Drepp","email":"edrepp2n@answers.com","gender":"Female","ip_address":"30.184.243.223","country":"Colombia","country_code":"CO","postal_code":"546058","phone":"373-168-1455"},
{"id":97,"first_name":"Josephine","last_name":"Clute","email":"jclute2o@sitemeter.com","gender":"Female","ip_address":"113.83.75.80","country":"Greece","country_code":"GR","phone":"245-285-5710"},
{"id":98,"first_name":"Lindsey","last_name":"Gillease","email":"lgillease2p@amazon.co.uk","gender":"Female","ip_address":"20.241.182.227","country":"Poland","country_code":"PL","postal_code":"32-642","phone":"455-219-7294"},
{"id":99,"first_name":"Elora","last_name":"Revel","email":"erevel2q@live.com","gender":"Female","ip_address":"236.235.46.77","country":"Ukraine","country_code":"UA","phone":"938-530-6876"},
{"id":100,"first_name":"Regan","last_name":"Brameld","email":"rbrameld2r@tinypic.com","gender":"Male","ip_address":"248.203.43.124","country":"Indonesia","country_code":"ID","phone":"903-733-6740"}]
},{}],3:[function(require,module,exports){
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


},{"./api/people.js":1}]},{},[3]);
