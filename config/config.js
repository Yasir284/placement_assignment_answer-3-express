import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT || 4001,
  MONGODB_URL: process.env.MONGODB_URL,
};

export default config;
