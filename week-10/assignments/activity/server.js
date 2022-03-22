const http = require('http');
const { prependOnceListener } = require('process');

const people = require('./controllers/people');
//?price=89.90&id=1 (eg of value)
const parseURLParams = (value)=>{
    const params = new URLSearchParams(value); //URLSearchParams { 'price' => '89.99', 'id' => '1' }
    //params.entries() //URLSearchParams Iterator { [ 'price', '89.99' ], [ 'id', '1' ] }
  return Array.from(params.entries()).reduce((acc,[key,value])=> ({...acc,[key]:value}),{});//{ id: '2', price: '89.99' }
  // return params.entries().reduce((acc,[key,value])=> ({...acc,[key]:value}),{});//{ id: '2', price: '89.99' } //reduce does not work on iterator

}

const server = http.createServer(async (req,res)=>{

   const[basePath,paramsString ] =req.url.split('?');//the url does not contain the host & port-localhost:8080
   //this returns an array with url split at ? => /api/products?price=89.90&id=1 

   if(basePath==='/api/people' && req.method==='GET'){
    //Parse the paramsString
    const paramsObj = parseURLParams(paramsString);
    const{code, data} = await people.getAll(paramsObj);

    res.writeHead(code,'Content-Type','application/json');
    res.end(data);

   }
   else if(basePath.match(/\/api\/people\/\w+/) && req.method==='GET'){
      const id = basePath.split('/')[3];
      const {code, data} = await people.getById(id);

      res.writeHead(code,'Content-type','application/json');
      res.end(data);

   }
 else {
   res.writeHead(404, { "Content-Type": "application/json" });
   res.end(JSON.stringify({ message: "Route Not Found" }));
 }

});

const PORT =8884;
server.listen(PORT,() => console.log(`Server running on port ${PORT}`));
module.exports = people;


