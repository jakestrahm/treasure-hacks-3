const { QueryAccountById, QueryListOfAccounts } = require("../views/userView");

const getAllAccounts = (req, res) => {
  const accountList = QueryListOfAccounts();
  return res.json(accountList);
};

const getAccountByID = (req, res) => {
  const id = req.params.id;
  const account = QueryAccountById(id);
  return res.json(account);
};

modules.export = {
  getAccountByID,
  getAllAccounts,
};
