const express = require("express");
const { newLogger } = require("./utils");
const app = express();
const logger = newLogger();

app.listen(3001, () => {
  logger.info("running on port 3001");
});

app.get("/", (req, res) => {
  res.send("root file");
});

app.post("/api/auth/tokens", (req, res) => {
  res.send({ token: "J12KL3H1F" });
});
app.post("/api/auth/revoke", (req, res) => {
  res.send({ response: "revoked!" });
});

app.get("/api/account/", (req, res) => {
  res.send({ id: 999 });
});

app.patch("/api/account", (req, res) => {
  res.send({ account: "updated info!" });
});

app.post("/api/account", (req, res) => {
  res.send({ response: "account was made!" });
});

app.get("/api/category/:id", (req, res) => {
  res.send({ id: 999 });
});

app.get("/api/category", (req, res) => {
  res.send({
    categories: [{ name: "school" }, { name: "gym" }],
  });
});

app.patch("/api/category/:id", (req, res) => {
  res.send({ response: "category was updated" });
});

app.delete("api/category/:id", (req, res) => {
  res.send({ response: "deleted id" });
});

app.get("/api/item/:id", (req, res) => {
  res.send(`sending item ${req.params.id} to client`);
});

app.get("/api/item", (req, res) => {
  res.send([
    {
      id: "123213",
      name: "Math HW",
      complete: false,
    },
    {
      id: "51515",
      name: "English HW",
      complete: true,
    },
  ]);
});

app.post("/api/item/:id", (req, res) => {
  res.send({ response: `item ${req.params.id} was posted` });
});

app.patch("/api/item/:id", (req, res) => {
  res.send({ response: `item ${req.params.id} was updated` });
});

app.delete("/api/item/:id", (req, res) => {
  res.send({ message: "item was deleted" });
});
