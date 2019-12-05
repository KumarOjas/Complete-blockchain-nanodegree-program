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

//Step 7:Sign the transaction  with the hex value of the private key of the sender
var privateKeySender ='Private key of sender goes here'
var privateKeySenderHex = new Buffer(privateKeySender,'hex')
var transaction = new EthereumTransaction(rawTransaction)
transaction.sign(privateKeySenderHex)
/*#################################################
##Send the transaction to the network ##
###################################################*/
//Step 8:Send the serialized signed transaction to the ethereum network

var serializedTransaction= transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);

















