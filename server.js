// console.log("Server is running");
// function add(a, b) {
//   return a + b;
// }

// let result = console.log(add(2, 5));

// (function () {
//   //shorthand function
//   console.log("Aditi");
// })();

// function callback() {
//   console.log("Aditi is calling a callback function...");
// }

// let add = function (a, b, callback) {
//   console.log(a + b);
//   callback();
// };
// add(5, 10, callback);

// const add = function (a, b, Aditi) {
//   let result = a + b;
//   console.log(result);
//   Aditi();
// };
// add(2, 3, function () {
//   console.log("Add completed");
// });

// add(2, 3, () => console.log("Add completed")); //inline func

// var fs = require("fs");
// var os = require("os");

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile("greeting.txt", "Hi" + user.username + "!", () =>
//   console.log("File is created")
// );

// const notes = require("./notes.js");
// console.log("Server file is available");

// var age = notes.age;
// var result = notes.addNumber(age + 18, 10);
// console.log("Age:" + age);
// console.log("Result:" + result);

// var _ = require("lodash");

// var data = ["person", "person", 1, 2, 1, 2, "name", "age", "2"];
// var filter = _.uniq(data);
// console.log(filter);

// const jsonString = '{"name":"Aditi","age":21,"city":"Ghaziabad"}';
// const jsonObj = JSON.parse(jsonString); //convert JSON string to object
// console.log(jsonObj.name);

// const objToConvert = { name: "John", age: 50 };
// const json = JSON.stringify(objToConvert);
// console.log(json);
// console.log(typeof json);

const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body
const PORT = process.env.PORT || 3000;

//const Person = require("./models/Person");
//const MenuItem = require("./models/MenuItem");

app.get("/", function (req, res) {
  res.send("Welcome to our hotel");
});
//Post method to get the person
// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body; //Assuming the request body that contains the person data

//     // Create a new person document using the mongoose model
//     const newPerson = new Person(data);

//     // Save the new person to the database
//     const response = await newPerson.save();
//     console.log("data saved");
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Service Error" });
//   }
// });

//GET Method to get the person
// app.get("/person", async (req, res) => {
//   try {
//     const data = await Person.find();
//     console.log("data fetched");
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Service Error" });
//   }
// });
//Routing concept video no. 06
// app.get("/person/:workType", async (req, res) => {
//   try {
//     const workType = req.params.workType; //Extract the work type from the URL parameter
//     if (workType == "chef" || workType == "manager" || workType == "waiter") {
//       const response = await Person.find({ work: workType });
//       console.log("response fetched");
//       res.status(200).json(response);
//     } else {
//       res.status(404).json({ error: "Invalid work type" });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Service Error" });
//   }
// });

// Import the router files
const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");
// Use the routers
app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);

// app.get("/chicken", (req, res) => {
//   res.send("sure sir..");
// });
// app.get("/idli", (req, res) => {
//   var customized_idli = {
//     name: "rava idli",
//     size: "10 cm diameter",
//     is_sambar: true,
//     is_chutney: false,
//   };
//   res.send(customized_idli);
// });

app.listen(PORT, () => {
  console.log("listening on port 3000..");
});
