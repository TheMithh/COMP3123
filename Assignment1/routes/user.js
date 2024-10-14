const bcrypt = require('bcryptjs');
const express = require('express');
const UserModel = require('../models/User');

const routes = express.Router();

routes.post('/signup', async (req, res) => {
    try {
        const newUser = new UserModel({
            ...req.body
        });
        await newUser.save();
        console.log("New User created: " + newUser + "\n------------------------------------------------------------------------------------------------------------------");
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
});

routes.post('/login', async (req, res) => {
    const { email, password } = req.body; // Ensure we're receiving email and password

    try {
        // Find the user by email
        const user = await UserModel.findOne({ email: email });
        if (user) {
            // Compare the provided password with the stored hashed password
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                console.log("USER LOGGED IN: " + user);
                res.status(200).send({
                    message: "Login successful",
                    user: { username: user.username, email: user.email }
                });
            } else {
                res.status(400).send({
                    status: false,
                    message: 'Invalid Username and/or password'
                });
            }
        } else {
            res.status(400).send({
                status: false,
                message: 'Invalid Username and/or password'
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = routes;