const {User , validate} = require("../models/User");
const router = require("express").Router();

router.post("/",async (req,res)=>{
    try{
        const {error} = validate(req.body);
        if(error){
            return res.status(400).send(error.details[0].message);
        }

        const user = await User(req.body)
        user.save();
        res.send(user);
    }
    catch (error) {
        res.send("An error occured");
        console.log(error);
    }
})

module.exports = router;