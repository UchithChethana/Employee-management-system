const express = require("express");
const router = express.Router();

const Employees = require("../models/empolyee");

// Test route
router.get("/test", (req, res) => res.send("Employee routes working.."));

// Create employee
router.post("/", (req, res) => {
  Employees.create(req.body)
    .then(() => res.json({ msg: "Employee added successfully." }))
    .catch(() => res.status(400).json({ msg: "Employee adding failed." }));
});

// Get all employees
router.get("/", (req, res) => {
  Employees.find()
    .then((employees) => res.json(employees))
    .catch(() => res.status(400).json({ msg: "No employee found." }));
});

// Get employee by ID
router.get("/:id", (req, res) => {
  Employees.findById(req.params.id)
    .then((employee) => res.json(employee))
    .catch(() => res.status(400).json({ msg: "Cannot find this employee." }));
});

// Update employee
router.put("/:id", (req, res) => {
  Employees.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ msg: "Update successfully." }))
    .catch(() => res.status(400).json({ msg: "Update failed." }));
});

// Delete employee
router.delete("/:id", (req, res) => {
  Employees.findByIdAndDelete(req.params.id)
    .then(() => res.json({ msg: "Deleted successfully." }))
    .catch(() => res.status(400).json({ msg: "Cannot be deleted." }));
});

module.exports = router;
