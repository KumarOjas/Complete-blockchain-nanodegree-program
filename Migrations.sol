/*
NB: since trufflehdwallet-provider 0.0.5 you must wrap HD Wallet providers in a function when declaring them.
Failure to do so will cause commands to hang.Failure to do so will cause commands to hanf.ex:
...
mainnet: {
    provider function() 
    {
    return new HDWalletProvider(mnemonic,'https://mainnet.infura.io/<infura-key>')
    },
    network_id:'1',
    gas:45000000,
    gasPrice:100000000,
    },
    
    */
    module.exports={
    //see <http://truffleframework.com/docs/advanced/configuration>
    //To customize your truffle configuration!
    };
