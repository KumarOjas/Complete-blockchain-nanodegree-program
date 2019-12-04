#  Complete-blockchain-nanodegree-program 
These are the resources that helped me to understand the core concept of block chain
https://anders.com
#Hashvalue-It is a digital fingerprint for information
#Hashing function-Maps a group of data to a unique hash value
Data-Hashing functiion-Hash
Blockchain-Shared digital ledger that records a list of transactions.
Transactions---->Blocks
Blockheader-
Previous 
Blocks Hash
Time(
Merkle Root 
Nonce
BlockData + Nonce =Hash value
These are the two papers that will help you to know about blockchain
bitcoin.org/bitcoin.pdf
A hash is a digital fingerprint for information
Hashing function-Maps a group of data to a unique hash value




Data --->Hashing function-->Hash
           (SHA256)
           SHA is the hashing algorithm while 256 is the outcome

Blockchain framework:-

Transaction-Wallet-Signature-Mempool-Network-Concsensus-Hashing-Block-Blockchain
  `


Block is a container that holds a list of transactions to be added to the blockchain
Shared digital ledger that records a list of transactions


Transactions
-
-
-
-
-
-
-
-


Transactions    Blocks
__    -------->  []
__    -------->  []
__    ---------> []
__    ---------> []

Blockheader:
*Previous Block hash//It stores the value of the previous hash
*Time//Stores time 
*Merkle Root//Transactions in the forms of hashes are paired and they are again  merged till they get a single value
*Nonce
Block data+Nonce=Hash value

Blockchain 

It is a digital ledger that contains the entire history of transactions made on the network






Block chain
[] <> [] <> [] <> [] <> [] <> [] <> [] <> [] <> [] <> []
#     #     #     #     #     #     #     #     #     #




Valid block(Blue)


Invalid block (Red)
(Change Data)

Blockchain is a distributed network that allows information to be spread out across many users


Centralized             Decentralized                  Distributed                 
    \       /        \     /       \     /          .____._____.______. 
.     \     /         \   /         \    /          |     \     \      \
      \   /          \  /           \  /            |._____\_._____\__.___\.   
       \./            \.-------------.              |       \       \      \
       / \            /  \           /\             |._______\.______\_.____\.      .    .    .
      /   \          /    \         /  \
     /      \       /      \       /    \
    /        \     /        \     /      \
   /          \   /          \   /         \
  /            \

Mempool
Waiting place for all unconfirmed Transactions before they are added to the blockchain

Consensus 
How the network reaches agreement about which transactions are most trustworthy.
Proof of work
Proof of stake 
DBFT
Pooled mining
A mining approach wherre multipleminers combine resources to mine a block and then 
split the block reward.
Proof of Stake 
It seeks to achieve consensus by giving votes to those with stake in the system.


Who is using it?
Etherum
-Switching from POW to POS in the casper project
DASH
-A pioneer of POS
-Built from the  core bitcoin platform with added features 
for privacy and tx speed

LISK
-Focused on creating Decentralised apps 
-Uses Delegate Proof of Stake 


Delegate Byzantine Fault Tolerance 
Consensus algorithm based on assigning roles to nodes to help coordinate consensus

It has two nodes ordinary node and consensus nodes

It has delegates and a speaker

Private ----->Public Key----->Public key------>Bitcoin wallet  
Key                             Hash             Address
       (Eliptical    Ripemd 
        Curve         (SHAH 256())        Base 58   
      Multiplication )                    (Check)
        One-way
        
 Wallet Address 
 A unique identifier for your wallet
 Private Key(Secret Key)
 A secret number that allows you to spend bitcoin from your wallet
 Public key
 Publicly  sharable key that cannot be used to spend bitcoin.
 Wallet 
 Non-Deterministic 
 Sequential determinstic 
 Hierarchical deterministic
 
 
Wallet type     Non                     Sequential          Hierarchial 
               deterministic           deterministic      deterministic wallet
                wallet                   wallet
 
 
 
 Description   Randomly generated       Derived sequentially Derived in a tree structure
               private key              from a single seed    Parent keys derive children
                                        and can be traced     keys, childrren keys derive 
 How to get       Private key             back to the seed    grandchildren key
 a new private   =randomly generated    private key=         Private key=sha256(address
 key?             between 1 and 2^256    sha256(seed+n),     (publicKey(seed)+n)
                                        where seed=128
                                        purely random bits
 
 
 
 Deterministic wallet
 
 Sequential deterministic wallet
 Hierarichal Deteerministic wallet:
 
 
Seed--->Master key ---->Child key----->Grandchild key

Wallet Type                              Non deterministic wallet    Sequential Deterministic wallet   Hierarchical Deterministic wallet

Description                           Collections of randomly generated These wallets have           These wallet has keys 
                                      private keys                      private keys that are         derived in a tree 
                                                                        derived sequentially
How to get a new private key                                            and can be traced back
                                                                        to the seed

                                      Private key= randomly            private key=sha 256           Private key= 
                                      generatedd between 1             (seed + n),where seed         sha256(address)
                                      and 2^256                        =128 purely random bits       (publicKey(seed)+n))


                   Public keys,K----->Sha 256343423545nkbbad----->RIPEMD160------>nfnsfnnnndendbbd43242BASE58CHECK----->ffsff223bda                                256 bit number                           160 bit number                Walllet address

C/S Network   Peer to peer network



c/s<--REQUEST--->c/s
Computers act as c/s in peer to peer networks




//These are the sites which I used to build the hello world applications using various 
Sailsjs.com 
Hapijs.com
Expressjs.com
//Remote procedure calls

It is a system used to send a command  to a remote system where it is procesed and the resultse
are returned.

Etherscan.io Is another site  where we can work with etherium.
 Wallet Address 
 A unique identifier for your wallet
 Private Key(Secret Key)
 A secret number that allows you to spend bitcoin from your wallet
 Public key
 Publicly  sharable key that cannot be used to spend bitcoin.
 Wallet 
 Non-Deterministic 
 Sequential determinstic 
 Hierarchical deterministic
 
 
Wallet type     Non                     Sequential          Hierarchial 
               deterministic           deterministic      deterministic wallet
                wallet                   wallet
 
 
 
 Description   Randomly generated       Derived sequentially Derived in a tree structure
               private key              from a single seed    Parent keys derive children
                                        and can be traced     keys, childrren keys derive 
 How to get       Private key             back to the seed    grandchildren key
 a new private   =randomly generated    private key=         Private key=sha256(address
 key?             between 1 and 2^256    sha256(seed+n),     (publicKey(seed)+n)
                                        where seed=128
                                        purely random bits
 
 
 
 Deterministic wallet
 
 Sequential deterministic wallet
 Hierarichal Deteerministic wallet:
 
 
Seed--->Master key ---->Child key----->Grandchild key

Wallet Type                              Non deterministic wallet    Sequential Deterministic wallet   Hierarchical Deterministic wallet

Description                           Collections of randomly generated These wallets have           These wallet has keys 
                                      private keys                      private keys that are         derived in a tree 
                                                                        derived sequentially
How to get a new private key                                            and can be traced back
                                                                        to the seed

                                      Private key= randomly            private key=sha 256           Private key= 
                                      generatedd between 1             (seed + n),where seed         sha256(address)
                                      and 2^256                        =128 purely random bits       (publicKey(seed)+n))


                   Public keys,K----->Sha 256343423545nkbbad----->RIPEMD160------>nfnsfnnnndendbbd43242BASE58CHECK----->ffsff223bda                                256 bit number                           160 bit number                Walllet address


bitaddress.org is the site to produce private keys.

What is the purpose of a private key?

It generates public key and wallet address that allow us to interact with the blockchain

What makes a private key secure?
It is a 256 bit random number between 1 and 2^256

How to generate a private key?

*Paper,pencil,oil,coin,dice
*OS with sourcce of entropy or library with cryptographic secure number generator
*Entropy
*Websites



Bitaddress.org is the site to generate private keys.
A private key is just a 256 bit random number between 1 and 2^256

Entropy:It is defined as the randomness

Signature: It establishes proof of ownership for
each transaction on the blockchain

Blockchain Network:
Decentralised
Pro:
Control given to nodes
Con:
Must achieve consensus.

Blockchain Functions:
Pros:
Accurate historical record
Faster read and write

Con:
Must achieve consensus

Blockchain Mutability
Immutable
Pro:
Permanent 
Con:
Storage space
Blockchain Authorization:
Pro 
Extremely secure
Con
Cannot dispute transaction
Blockchain Authorization
Pro:
Extremely Secure
Con:
Cannot dispute transaction

Blockchain Transparensy:
Pro:
Everyone has access
Cons:
No permission control


Centralized network:
*Remains with authority
*Requires authentication
Traditional database security:
Create Read Update delete(CRUD)


                      Traditional Database           Blockchain 
Network                Centralized                   Distributed
Functions              CRUD                          Read,append and validate
Mutability             Mutable                       Immutable
Authorization          Centralized                   Distributed
Transparency           Low                           High



Go to blockexplorer.com to explore bitcoin data

infura.io is another site in order to use api

























































