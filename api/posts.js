const express = require("express");
const postsRouter = express.Router();

postsRouter.use((req, res, next) => {
  console.log("A request is being made to /post");

  next();
});

const { getAllPosts } = require("../db");

postsRouter.get('/', async (req, res) => {
  try {
      const posts = await getAllPosts();
      
      res.send({
          posts: [],
        });
    } catch (error) {
        throw error;
    }
});

module.exports = postsRouter;