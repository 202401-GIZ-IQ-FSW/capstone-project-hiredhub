// controllers/CategoryController.js
const Category = require("../../models/Category");
const mongoose = require("mongoose");
const { response } = require("express");
const ObjectId = mongoose.Types.ObjectId;

class CategoryController {
  // Create a new category
  async createCategory(req, res) {
    try {
      const name = req?.body?.name;
      const cate = await Category.findOne({ name });
      if (cate) {
        throw new Error("duplicate category");
      }
      const category = new Category(req.body);
      await category.save();
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Get all categories
  async getCategories(req, res) {
    try {
      const categories = await Category.find({});
      res.status(200).json(categories);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getCategoryById(req, res) {
    try {
      const id = req.params.id;
      // Check if the id is a valid ObjectId
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
      }
      const category = await Category.findById(id);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Update a category by ID
  async updateCategory(req, res) {
    try {
      const id = req.params.id;
      // Check if the id is a valid ObjectId
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
      }
      const name = req?.body?.name;
      const cate = await Category.findOne({ name });
      if (cate) {
        throw new Error("category duplicate");
      }
      const category = await Category.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Delete a category by ID
  async deleteCategory(req, res) {
    try {
      const id = req.params.id;
      // Check if the id is a valid ObjectId
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
      }
      const categories = await Category.findById(id);
      if (!categories) {
        return res.status(404).json({ error: "Category not found" });
      }
      const category = await Category.findByIdAndDelete(req.params.id);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.status(200).json({ message: "Category deleted" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new CategoryController();
