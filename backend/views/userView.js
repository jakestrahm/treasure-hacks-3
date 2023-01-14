const { DummyAccounts } = require("../modals/DummyAccounts");

const getAccountID = (id) => {
  let account;
  DummyAccounts.forEach((accountData) => {
    if (accountData.id === Number(id)) {
      account = accountData;
    }
  });
  return account;
};
const getAccounts = () => {
  return DummyAccounts;
};

module.exports = {
  getAccountID,
  getAccounts,
};
