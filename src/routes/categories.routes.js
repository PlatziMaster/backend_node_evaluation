import { Router } from "express";
const router = Router();
import { ObjectID } from "mongodb";
import { connect } from "../database";
import categoryController from "../controllers/category.controller";

router.get("/", async (req, res) => {
  try {
    const db = await connect();
    const result = await db.collection("categories").find({}).toArray();
    res.json(result);
  } catch (e) {
    console.log(`Error is: ${e}`);
  }
});
router.post("/", categoryController.newCategory);

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const db = await connect();
    const result = await db
      .collection("categories")
      .findOne({ _id: ObjectID(id) });
    if (result === null || "" || false) {
      res.json(`Consult ${id} don't exist`);
    } else {
      res.json(result);
    }
  } catch (e) {
    console.log(`Error consulting category: ${e}`);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const db = await connect();
    const result = await db
      .collection("categories")
      .findOneAndDelete({ _id: ObjectID(id) });
    res.json({
      message: `Category ${id} is delete`,
      result,
    });
  } catch (e) {
    console.log(`Error consulting category: ${e}`);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateCategory = {
      name: req.body.name,
      image: req.body.image,
    };
    const db = await connect();
    const result = await db
      .collection("categories")
      .updateOne({ _id: ObjectID(id) }, { $set: updateCategory });
    res.status(200).json({
      message: `Category ${id} is update`,
      result,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message || "Something goes wrong consult!",
    });
    console.log(`Error consulting category: ${e}`);
  }
});

export default router;
