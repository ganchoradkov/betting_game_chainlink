const BettingGame = artifacts.require("BettingGame");
module.exports = async function(deployer, network, accounts) {
  
  await deployer.deploy(BettingGame);
  const bettingGame = await BettingGame.deployed();
};
