import { ItemModel } from "../models.mjs";
import { ItemCreateSchema } from "../validation.mjs";
import { v4 as uuidv4 } from 'uuid';

function itemToAPI(dbItem) {
  return {
    id: dbItem.id,
    accountId: dbItem.accountId,
    name: dbItem.name,
    completed: dbItem.completed,
    categories: dbItem.categories,
    description: dbItem.description,
    dueBy: dbItem.dueBy,
    createdAt: dbItem.createdAt,
    updatedAt: dbItem.updatedAt
  }
}

class ItemController {
  async getItem(req, res) {
    const itemId = req.params.id

     try {
      const item = await ItemModel.findOne({ id: itemId }).exec();
      
      if(item == null) {
        res.status(404).json({
          message: "item does not exist"
        })
        return
      }

      res.json(itemToAPI(item));
      return

    } catch(err) {
      console.log(err);
      res.status(500).json({
        message: "internal server error"
      });
      return
    }
  }

  async getItems(req, res) {
    const accountId = req.accountId;

    try {
      const items = await ItemModel.find({ accountId: accountId }).exec();

      res.json({
        items: items.map(itemToAPI)
      });
      return

    } catch(err) {
      console.log(err);
      res.status(500).json({
        message: "internal server error"
      });
      return
    }
  }

  async createItem(req, res) {
    const accountId = req.accountId; 

    const { error } = ItemCreateSchema.validate(req.body);

    if(error !== undefined) {
      res.status(400).json({
        message: "invalid request data"
      });
      return;
    }

    try {
      const now = Date.now(); 

      const newItem = new ItemModel({
        id: uuidv4(),
        accountId: accountId,
        name: req.body.name, 
        completed: false,
        categories: [],
        description: req.body.description,
        dueBy: req.body.dueBy,
        createdAt: now,
        updatedAt: now
      })

      await newItem.save();

      res.json({
        message: "Item successfully created!"
      });
      return 
    } catch(err) {
      console.log(err);
      res.status(500).json({
        message: "internal server error"
      });
      return
    }
  }

  async updateItem(req, res) {
    res.send({});
  }

  async deleteItem(req, res) {
    const itemId = req.params.id; 

    try {
      const item = await ItemModel.findOne({ id: itemId }).exec();

      if(item == null) {
        res.status(404).json({
          message: "item does not exist"
        })
        return
      }
      
      await ItemModel.remove({ id: itemId });
      
      res.json({
        message: "item successfully removed"
      });
      return

    } catch(err) {
      console.log(err);
      res.status(500).json({
        message: "internal server error"
      });
      return
    }
  }
}

export default ItemController;