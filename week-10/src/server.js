const http = require("http");

const product = require("./controllers/products");
const parseURLParams = (value) => {
    const params = new URLSearchParams(value);
  console.log("param ",params);
  console.log("entries",params.entries()) //{[price,11],[name:qwww]}
    return Array.from(params.entries()).reduce(
     // (acc, [key1, value]) => ({ ...acc, [key1]: value,[key1+"sad"]: value }), //(acc,obj)=>{key=obj[0], } obj["name"]="abc" //,{key1}
      (acc, [key, value]) => ({ ...acc, [key]: value }),
      {}
    );
  };
  const server = http.createServer(async (req, res) => {

    // res.writeHead(404, { "Content-Type": "application/json" });
    // res.end(JSON.stringify({ message: "Route Not Found" }));
    // return;

    const [basePath, paramsString] = req.url.split("?");
  
    if (basePath === "/api/products" && req.method === "GET") {
      const params = parseURLParams(paramsString);
        console.log("params..",params);
      const { data, code } = await product.getAll(params);
  
      res.writeHead(code, { "Content-Type": "application/json" });
      res.end(data);
    } else if (basePath.match(/\/api\/products\/\w+/) && req.method === "GET") {
      const id = basePath.split("/")[3];
  
      const { data, code } = await product.getById(id);
  
      res.writeHead(code, { "Content-Type": "application/json" });
      res.end(data);
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route Not Found" }));
    }
  });

  const PORT = 8885;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server; 
// const server =  https.createServer(async (req,res)=>{

//    // console.log('here');
//     //res.end('here');//end the call
// const [basePath,searchparams] = req.url.split('?');
//     if(basePath === '/api/productts'){
// const paramsObj = new URLSearchParams(searchparams);

// //paramsObj.entries() is an array of arrays where first item is key
// //second is value 
// //paramsObj.entries() would be [[price,11],[name:qwww]]
// const params = paramsObj.entries()
// .reduce(
//     (acc,[key,value])=>({
//     ...acc,
//     [key]:value,
// }),{}); //as arr of arr reduces

// console.log(params);
// // const { data, code } =  await product.getAll(params);
//     res.writeHead(code, { "Content-Type": "application/json" });
//     res.end(data);

// // if(params)
// // const {code,data}  = product.getById(params);
// // else
// // const {code,data} = await product.getAll();
// }

// else if(basePath.match(/\/api\/products\/w+/) && req.method=="GET"){
// const id = basePath.split("/")[3];

// // const {}= await 

// }


// });
// const {code,data} = await product.getAll();
// //to sen json write header
// res.writeHead(404,{"Content-type":"application/json"});
// res.end(JSON.stringify({message:'No route found'}));//end the call
// })   

//function which is called when the server is called

 