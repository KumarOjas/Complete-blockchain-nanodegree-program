

//This is to demonstrate hapi
'use strict';
const Hapi=require('hapi');
//Create a server with a host and port

const server =Hapi.server({
host:'localhost',
port:8000
});
//Add the route
server.route({

method:'GET',
path:'/hello',
handler:function(request,h){

    return 'hello world';

})}
;
//Start the server
async function start(){
try
{
await server.start();
}
catch(err)
{

console.log(err);
process.exit(1);

}
console.log('Server running at: ',server.info.uri);
};
start();
//hapi. js (also known as hapi) is an open-source framework for web applications. The most common use of hapi is to build web services such as JSON API. 
//You can build application programming interface (API) servers, websites, and HTTP proxy applications with hapi. js




