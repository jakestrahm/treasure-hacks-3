import AccountModel from "../model/account.mjs"; 

class AccountController {
  getAccount(req, res) {
    res.send({});
  }

  updateAccount(req, res) {
    res.send({});
  }

  createAccount(req, res) {
    console.log(req.body); 
    res.send({});
  }
}

export default AccountController;
