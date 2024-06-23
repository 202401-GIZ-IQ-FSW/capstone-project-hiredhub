import chai from "chai";
import request from "supertest";
import mongoose from "mongoose";
import app from "../index.js"; // Adjust the path according to your project structure
import { generateRandomName } from "../utils/generateRandomData.js";

const { expect } = chai;

// Mock Category model
const Category = mongoose.model("Category");

describe("Category API", () => {
  describe("Valid", () => {
    it("should create a new category", async function () {
      const randomName = await generateRandomName(10);
      request(app)
        .post("/api/category")
        .send({ name: randomName })
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(201);
          expect(res.body.name).to.equal(randomName);
        });
    });

    it("should get all categories", (done) => {
      request(app)
        .get("/api/category")
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an("array").that.is.not.empty;
          done();
        });
    });

    it("should get a category by ID", async function () {
      let category = await Category.findOne({ name: "Saleman" });

      if (!category) {
        const cate = new Category({ name: "Saleman" });
        await cate.save();
        category = cate; // Update category with the newly created one
      }

      return request(app)
        .get(`/api/category/${category._id}`)
        .then((res) => {
          expect(res.status).to.equal(200);
          expect(res.body.name).to.equal("Saleman");
        });
    });

    it("should update a category by ID", async function () {
      const category = await Category.findOne({ name: "Saleman" });
      if (!category) {
        const cate = new Category({ name: "Saleman" });
        await cate.save();
      }
      const RandomName = generateRandomName(11);
      request(app)
        .put(`/api/category/${category._id}`)
        .send({ name: RandomName })
        .end((err, res) => {
          if (err) return done(err);
          console.log(res.body);
          expect(res.status).to.equal(200);
          expect(res.body.name).to.equal(RandomName);
        });
    });

    // it("should create and then delete a category by ID if it doesn't exist", async function () {
    //   let category = await Category.findOne({ name: generateRandomName(6) });
    //   if (!category) {
    //     category = new Category({ name: generateRandomName(6) });
    //     await category.save();
    //   }
    //   const res = await request(app).delete(`/api/category/${category._id}`);
    //   expect(res.body.message).to.equal("Category deleted");
    // });
  });
  describe("Invalid", () => {
    it("should return an error if category name already exists", async function () {
      const isAvailable = await Category.findOne({ name: "mobile" });
      if (!isAvailable) {
        const cate = new Category({ name: "mobile" });
        await cate.save();
      }
      request(app)
        .post("/api/category")
        .send({ name: "mobile" })
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(400);
          expect(res.body.error).to.be.an("string").that.is.not.empty;
          expect(res.body.error).to.equal("duplicate category");
        });
    });

    it("When trying to crearte category Given ame of category that is empty  Then should return an error ", (done) => {
      request(app)
        .post("/api/category")
        .send({ name: "hi" })
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body.errors).to.be.an("array").that.is.not.empty;
          expect(res.body.errors[0].msg).to.equal("minimum length is 3 letter");
          done();
        });
    });
    it("When trying to crearte category Given name of category that is  a less than 3 letter Then should return an error ", (done) => {
      request(app)
        .post("/api/category")
        .send({ name: "" })
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body.errors).to.be.an("array").that.is.not.empty;
          expect(res.body.errors[0].msg).to.equal("name cant be empty");
          done();
        });
    });
  });
});
