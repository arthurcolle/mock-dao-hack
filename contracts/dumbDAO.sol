contract dumbDAO {

  event PaymentCalled(address payee, uint amount);
  event TokensBought(address buyer, uint amount);
  event TokensTransfered(address from, address to, uint amount);

  mapping (address => uint) public balances;
  address public latestSender;

  function buyTokens(){
    balances[msg.sender] += msg.value;
    TokensBought(msg.sender, msg.value);
  }

  function transferTokens(address _to, uint _amount){
    if (_amount >= balances[msg.sender])
      throw;
    balances[_to]=_amount;
    balances[msg.sender]-=_amount;
    TokensTransfered(msg.sender, _to, _amount);
  }

  function withdraw(address _recipient, uint _amount) returns (bool) {
    latestSender=msg.sender; //for debuging
    if (_amount >= balances[msg.sender])
      throw;
    PaymentCalled(_recipient, _amount);
    if (_recipient.call.value(_amount)()) {
        balances[msg.sender] -= _amount;
        return true;
    } else {
        return false;
    }
  }

}
