/*######################
##    Configuration ##
#######################*/
//Step 1: setup the apropriate configuration
var Web3 = require("web3")
var EtheriumTransaction = require ("ethereumjs-tx")
var web3 =new Web3('HTTP://127.0.0.1:7545')
//Step2: Set the sending and receiving addresses for the transaction
var sendingAddress = 'Address from Ganache goes here'
var receivingAddress = 'Another address from Ganache goes here'
//Step 3:Check the balances for each address
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)
/*#############################
##### Create a transaction ####
#############################*/
//Step 4: Set the transaction using the transaction variable as shown
var rawTransaction ={
    nonce: 0,
    to: receivingAddress,
    gasPrice:20000000,
    gasLimit: 3000000,
    value:1 ,
    data:""
    }
//Step 5:View the raw transaction
rawTransaction

//Step6: Check the new account balances (they should be the same)


web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)
//Note:They haven't changed because they need to be signed ...
/*#########################################
#####Sign the transaction to the network ####
#########################################*/














