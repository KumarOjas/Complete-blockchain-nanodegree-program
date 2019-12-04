//This is the demonstration for etherium
//Go to remix.ethereum.com
pragma solidity ^0.4.24;
contract Message {
   string myMessage;
   
   function setMessage(string x ) public {
   myMessage =x;
   }
   function getMessage() public view returns (String){
        return myMessage;
  }
  }
