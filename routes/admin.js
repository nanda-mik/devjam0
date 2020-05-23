const express = require("express");
const router = express.Router();
const getDb = require('../util/database').getDb;
const adminController = require("../controller/adminController");
const validateLoginInput = require("../../validation/login");
// router.post("/login",adminController.postLogin);
// router.post("/logout",adminController.postLogout);

router.post("/login",(req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;
    const db = getDb();
    db.collection('admin').findOne({username: username })
    .then(user => {
        // Check if user exists
        if (!user) {
          return res.status(404).json({ usernotfound: "Email not found" });
        }
    // Check password
        if(user.password === password){
            
        } else {
            return res.status(400).json({ passwordincorrect: "Password incorrect" });
        }
    });
});

module.exports = router;