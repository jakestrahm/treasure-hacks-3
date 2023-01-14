import DummyAccounts from "../modals/DummyAccounts.mjs";

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

export { getAccountID, getAccounts };
