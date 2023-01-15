import { Router } from "express";

const accountRouter = (accountController) => {
    const router = Router();
    router.get("/", accountController.getAccount);
    router.patch("/", accountController.updateAccount);
    router.post("/", accountController.createAccount);
    return router;
}

const authRouter = (authController) => {    
    const router = Router();
    router.post("/tokens", authController.createTokens);
    router.post("/revoke", authController.revokeToken);
    return router;
}

const itemRouter = (itemController) => {
    const router = Router();
    router.get("/:id", itemController.getItem);
    router.get("/", itemController.getItems);
    router.post("/", itemController.createItem);
    router.patch("/:id", itemController.updateItem);
    router.delete("/:id", itemController.deleteItem);
    return router;
}

const categoryRouter = (categoryController) => {
    const router = Router();
    router.get("/", categoryController.getCategories);
    router.get("/:id", categoryController.getCategory);
    router.post("/", categoryController.createCategory);
    router.patch("/:id", categoryController.updateCategory);
    router.delete("/:id", categoryController.deleteCategory);
    return router;
}

export {accountRouter, authRouter, itemRouter, categoryRouter}; 