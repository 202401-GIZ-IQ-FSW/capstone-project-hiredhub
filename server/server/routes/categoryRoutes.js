// routes/categoryRoutes.js
const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/categoryController/categoryController");
const { errorHandler } = require("../middlewares/errorHandler");
const { categorySchema } = require("../schema/category");

// Create a new category
router.post(
  "/category",
  categorySchema,
  errorHandler,
  CategoryController.createCategory
);

// Get all categories
router.get("/category", CategoryController.getCategories);

// Get a category by ID
router.get("/category/:id", CategoryController.getCategoryById);

// Update a category by ID
router.put("/category/:id", CategoryController.updateCategory);

// Delete a category by ID
router.delete("/category/:id", CategoryController.deleteCategory);

module.exports = router;
