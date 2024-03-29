const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})