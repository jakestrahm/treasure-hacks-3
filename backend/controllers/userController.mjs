import { getAccountID, getAccounts } from "../views/userView.mjs";

const getAllAccounts = (req, res) => {
  const accountList = getAccounts();
  return res.json(accountList);
};

const getAccountByID = (req, res) => {
  const id = req.params.id;
  const account = getAccountID(id);
  return res.json(account);
};

export { getAccountByID, getAllAccounts };
