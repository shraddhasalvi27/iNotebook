const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://shraddha:RNrujW4xjhxKA%25-@praxiscodef.mzn87fg.mongodb.net/?retryWrites=true&w=majority&appName=PraxisCodeF";
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit process with failure
  }
};
module.exports = connectToMongo;
