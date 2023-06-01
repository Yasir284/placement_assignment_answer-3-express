import express from "express";
import blogRoutes from "./routes/blog.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Blog routes
app.use("/api/blog", blogRoutes);

export default app;
