const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");

//Post route to add a person
router.post("/", async (req, res) => {
  try {
    const data = req.body; //Assuming the request body that contains the person data

    // Create a new person document using the mongoose model
    const newPerson = new Person(data);

    // Save the new person to the database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Service Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Service Error" });
  }
});
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; //Extract the work type from the URL parameter
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Service Error" });
  }
});
// update data
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //Extract the id from the URL parameter
    const updatedPersonData = req.body; //Updated data for the person
    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, //Return the updated document
        runValidators: true, // Run mongoose validation
      }
    );
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Service Error" });
  }
});
// Delete
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("data deleted");
    res.status(200).json({ message: "Person data deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Service Error" });
  }
});
module.exports = router;
