const express = require("express");
const tagsRouter = express.Router();

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next();
});

const { getAllTags } = require("../db");

tagsRouter.get('/', async (req, res) => {
  try {
      const tags = await getAllTags();
      
      res.send({
          tags: [],
        });
    } catch (error) {
        throw error;
    }
});

module.exports = tagsRouter;