const express = require("express");
const route = require("./routes/route.js");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://RahulSinghDhek:18248518@cluster0.dxzlfnc.mongodb.net/group2Database?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
