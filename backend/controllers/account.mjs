import AccountModel from "../model/account.mjs"; 
import { } from "."

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
