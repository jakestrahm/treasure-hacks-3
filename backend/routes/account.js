const express = require("express");
const router = express.Router();

const { getAccountID, getAccounts } = require("../views/userView");

router.get("/account", getAccounts);
router.get("/account/:id", getAccountID);

module.exports = router;
