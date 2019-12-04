pragma solidity ^0.4.24;
contract Message {
   string myMessage;
    function setMessage(string x) public {
       myMessage = x;
       }
     function getMessage() public view returns (string) {
         return myMessage;
     }     
    }
    
    //This is a solidity file which I made using remix.etherum.org
