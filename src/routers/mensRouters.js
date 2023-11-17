const express = require("express");
const router = new express.Router();
const MensRanking = require("../model/mens");

// we will handle post requests (add new data)
router.post("/addMens", async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    const insertMens = await addingMensRecords.save();
    res.status(201).send(insertMens);
  } catch (error) {
    res.status(401).send(error);
  }
});

// get all records
router.get("/allMens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({}).sort({ ranking: 1 });
    res.send(getMens);
  } catch (error) {
    res.status(401).send(error);
  }
});

// get by id
router.get("/mens/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const getMen = await MensRanking.findById(_id);
    res.send(getMen);
  } catch (error) {
    res.status(400).send("id not found : " + _id);
  }
});

// Update existing records
router.put("/updateMens/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const updateMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateMen);
  } catch (error) {
    res.status(500).send("id not found : " + _id);
  }
});

//  delete existing records
router.delete("/deleteMens/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const updateMen = await MensRanking.findByIdAndDelete(_id);

    res.send(updateMen);
  } catch (error) {
    res.status(500).send("id not found : " + _id);
  }
});

module.exports = router;
