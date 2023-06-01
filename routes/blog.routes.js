import { Router } from "express";
import {
  addBlog,
  deleteBlog,
  replaceBlog,
  updateBlog,
} from "../controllers/blog.controllers.js";
const router = Router();

router.post("/add", addBlog);
router.delete("/delete/:id", deleteBlog);
router.put("/update/:id", updateBlog);
router.put("/replace/:id", replaceBlog);

export default router;
