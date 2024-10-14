// Importing the express module
const express = require("express");
const router = express.Router();

// Defining the router param with its value
router.param("userId", (req, res, next) => {
   console.log("I am called first");
   next();
});

router.get("/user/:userId", (req, res) => {
   console.log("I am called next");
   const ID= req.params.userId; // Parameter value
   res.send(`User with ID: ${ID} from routes (2)`);
   res.end();
});

// Export router as a module
module.exports = router;