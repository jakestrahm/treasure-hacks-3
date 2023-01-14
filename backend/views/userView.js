const { DummyAccounts } = require("../modals/DummyAccounts");

const QueryAccountById = (id) => {
  let account;
  DummyAccounts.forEach((accountData) => {
    if (accountData.id === Number(id)) {
      account = accountData;
    }
  });
  return account;
};
const QueryListOfAccounts = () => {
  return DummyAccounts;
};

module.exports = {
  QueryAccountById,
  QueryListOfAccounts,
};
