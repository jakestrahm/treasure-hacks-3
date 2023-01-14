const express = require("express");
const router = express.Router();

const { getAccountID, getAccounts } = require("../views/userView");

router.get("/api/account", getAccounts);
router.get("/api/account/:id", getAccountID);

module.exports = router;
