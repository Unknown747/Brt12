const Web3 = require('web3');
const rpcURL ="https://eth-mainnet.g.alchemy.com/v2/lHOI77KbH33WqQtYNWfnYzJo5qqHXGzI"
const web3 = new Web3(rpcURL);


async function checkETH(account){
    return web3.eth.getBalance(account).then((bal) => {
        return web3.utils.fromWei(bal, "ether");
    })
}

module.exports.checkETH = checkETH;
