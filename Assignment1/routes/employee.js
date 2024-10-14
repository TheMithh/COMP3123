const express = require('express');
const EmpModel = require('../models/Employee'); // This is the correct model name

const routes = express.Router();
//Here we create a new employee 
routes.post('/employees', async (req, res) => {
    try {
        const newEmp = new EmpModel({
            ...req.body
        });
        await newEmp.save();
        console.log("New Employee created: " + newEmp + "\n------------------------------------------------------------------------------------------------------------------");
        res.status(201).send(newEmp);
    } catch (error) {
        res.status(500).send(error);
    }
});
// This function returns all employees
routes.get('/employees', async (req, res) => {
    try {
        const empList = await EmpModel.find({});
        console.log("ALL EMPLOYEES: \n" + empList);
        res.status(200).send(empList);
    } catch (error) {
        res.status(500).send(error);
    }
});
// Returns the given employee corresponding with the given ID
routes.get('/employees/:eid', async (req, res) => {
    try {
        const emp = await EmpModel.findById(req.params.eid);
        if (emp) {
            console.log("Employee found: " + emp);
            res.status(200).send(emp);
        } else {
            console.log("No Employee found");
            res.status(404).send("No Employee found");
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

routes.put('/employees/:eid', async (req, res) => {
    try {
        const updatedEmp = await EmpModel.findByIdAndUpdate(req.params.eid, req.body, { new: true });
        console.log("UPDATED EMPLOYEE INFO: \n" + updatedEmp);
        res.status(200).send(updatedEmp);
    } catch (error) {
        res.status(500).send(error);
    }
});

routes.delete('/employees/:eid', async (req, res) => {
    try {
        const employee = await EmpModel.findByIdAndDelete(req.params.eid);
        if (!employee) {
            return res.status(404).send({ message: 'Employee not found' });
        }
        res.send({ message: 'Employee deleted successfully'});
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = routes;
