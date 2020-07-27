//lost and found rest api
const express = require("express");
const cors = require("cors");

//express middleware
const app = express();

//bodyparser middleware
app.use(express.json());

// cors middleware
app.use(cors());

//router paths
const userRoutes = require("./routes/UserRoutes");
const adminRoutes = require("./routes/AdminRoutes");

//mongoConnection
const mongoConnect = require("./config/Db");

//init connection
mongoConnect();

//router middleware

//admin routes
app.use("/lostandfound/api/v1", userRoutes, adminRoutes);

//server middleware
const port = 8081;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
