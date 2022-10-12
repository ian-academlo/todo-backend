require("dotenv").config();
console.log(
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  process.env.DB_HOSTNAME,
  process.env.DB_NAME
);
