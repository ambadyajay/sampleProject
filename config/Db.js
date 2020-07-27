const mongoose = require("mongoose");

const mongoConnect = () => {
  const url = "mongodb://localhost:27017/sampleproject";
  mongoose
    .connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
      () => {
        console.log(`mongo Db connected to DB sample`);
      }
    )
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
