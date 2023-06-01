import app from "./app.js";
import mongoose from "mongoose";
import config from "./config/config.js";

(() => {
  try {
    mongoose.connect(config.MONGODB_URL);

    console.log("DB CONNECTED");

    app.listen(config.PORT, () =>
      console.log(`SERVER LISTENING AT PORT:${config.PORT}`)
    );
  } catch (err) {
    console.log("ERROR:", err);
  }
})();
