import { AccountModel } from "../models.mjs";
import { AccountCreateSchema } from "../validation.mjs";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt";


class AccountController {
  async getAccount(req, res) {
    const accountId = req.accountId; 

    try {
      const account = await AccountModel.findOne({ id: accountId }).exec();
      
      if(account == null) {
        res.status(404).json({
          "message": "account does not exist"
        })
        return
      }

      res.json({
        id: account.id,
        email: account.email,
        phoneNumber: account.phoneNumber,
        smsEnabled: account.smsEnabled,
        emailEnabled: account.emailEnabled,
        createdAt: account.createdAt,
        updatedAt: account.updatedAt
      })
      return

    } catch(err) {
      console.log(err);
      res.status(500).json({
        "message": "internal server error"
      });
      return
    }
  }

  async updateAccount(req, res) {
    res.send({});
  }

  async createAccount(req, res) {
    const { error } = AccountCreateSchema.validate(req.body);

    if(error !== undefined) {
      res.status(400).json({
        "message": "invalid request data"
      });
      return;
    }

    try {
      const account = await AccountModel.findOne({ email: req.body.email}).exec();
      
      if(account != null) {
        res.status(400).json({
          "message": "account with email already exists"
        })
        return
      }
      
      const now = Date.now(); 
      const hashedPass = bcrypt.hashSync(req.body.password, 10);

      const newAccount = new AccountModel({
        id: uuidv4(),
        email: req.body.email,
        phoneNumber: req.body.phoneNumber, //to be implemented
        smsEnabled: false,
        emailEnabled: false,
        createdAt: now,
        updatedAt: now,
        password: hashedPass,
      })

      await newAccount.save();

      res.json({
        "message": "Account successfully created!"
      });

      return 
    } catch(err) {
      console.log(err);
      res.status(500).json({
        "message": "internal server error"
      });
      return
    }
  }
}

export default AccountController;
