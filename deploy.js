const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'cover federal fiber asthma salon symbol stamp tobacco immense local february blouse',
  'https://sepolia.infura.io/v3/6897d6f88997423282e42a34a7ff6a1f'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy(({ data: bytecode, arguments: ["Hi there!"]}))
    .send({ gas: "1000000", from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();