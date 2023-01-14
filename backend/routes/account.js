const express = require("express");
const router = express.Router();

const {
  getAllAccounts,
  getAccountByID,
} = require("../controllers/userController");

router.get("/", getAccounts);
router.get("/api/account/:id", getAccountID);

module.exports = router;
