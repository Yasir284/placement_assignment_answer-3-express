import Blog from "../models/blog.schema.js";
import asyncHandler from "../services/asyncHandler.js";
import CustomError from "../services/customError.js";

/**********************************************************************
   @ADD_BLOG
   @request_type POST
   @route http://localhost:4000/api/blog/add
   @description Taking blog content from user and adding it to database
   @parameters title, author, content
   @return Blog object
   **********************************************************************/

export const addBlog = asyncHandler(async (req, res) => {
  const { title, author, content } = req.body;

  if (!(title && author && content)) {
    throw new CustomError("All fields are mandatory", 400);
  }

  const isBlogExist = await Blog.findOne({ title });

  if (isBlogExist)
    throw new CustomError("Blog with same title already exists", 400);

  const blog = await Blog.create({ title, author, content });

  res
    .status(200)
    .json({ success: true, message: "Blog added successfully", blog });
});

/**********************************************************************
   @DELETE_BLOG
   @request_type DELETE
   @route http://localhost:4000/api/blog/delete/:id
   @description Taking blog id from the req.params and deleting it
   @parameters Blog id
   @return Success message
   **********************************************************************/

export const deleteBlog = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const deleteBlog = await Blog.findByIdAndDelete(id, { new: true });
  console.log(deleteBlog);

  res.status(200).json({ success: true, message: "Blog deleted" });
});

/**********************************************************************
   @UPDATE_BLOG
   @request_type PUT
   @route http://localhost:4000/api/blog/update/:id
   @description Finding and updating blog 
   @parameters Blog id, title || content || author
   @return Blog object
   **********************************************************************/

export const updateBlog = asyncHandler(async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const updatedBlog = await Blog.findByIdAndUpdate(id, data, { new: true });

  console.log(updatedBlog);

  res
    .status(200)
    .json({ success: true, message: "Blog updated", blog: updatedBlog });
});

/**********************************************************************
   @REPLACE_BLOG
   @request_type PUT
   @route http://localhost:4000/api/blog/replace/:id
   @description Taking new blog from user and replace it with current blog
   @parameters Blog id, title, content, author
   @return Blog object
   **********************************************************************/

export const replaceBlog = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { title, content, author } = req.body;

  if (!(title && author && content)) {
    throw new CustomError("All fields are mandatory", 400);
  }

  const blog = await Blog.findByIdAndUpdate(
    id,
    { title, author, content },
    { new: true }
  );

  res
    .status(200)
    .json({ success: true, message: "Blog replaced successfully", blog });
});
