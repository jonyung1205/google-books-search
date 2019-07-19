const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// //Set up promises with mongoose
// mongoose.Promise = global.Promise;
// // Connect to the Mongo DB
// mongoose.connect(
//     process.env.MONGODB_URI ||
//     "mongodb://user:password@ds245677.mlab.com:45677/heroku_42kts12k", {
//         useMongoClient: true
//     });

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});