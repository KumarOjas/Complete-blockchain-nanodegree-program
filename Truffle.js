/*
*NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
*function when declaring them.Failure to do so will cause commands to hang.Ex:
***
mainnet:{
provider: function() {
   return new HDWalletProvider(mnemonic,'https://mainnet.infura.io/<infura-key>')
},
network_id:'1,
gas:45000000,
gasPrice:100000000000000,
},
*/

module.exports ={
 networks: {
  development: {
   host: "127.0.0.1",
   port:7545,
   network_id:*//MAtch any network id
  }}
 };



















*/
