const router= require ("express").Router();
const authorization = require('../middleware/authorization');


const pool = require('../db');


router.get('/',authorization, async(req, res)=>{
    try {
        
        // res.json(req.user)
       const user = await pool.query("SELECT user_name FROM users where user_id = $1",[req.user]);
       res.json(user.rows[1])
    } catch (err) {
        console.err(err.message)
        res.status(500).send("server err")
    }

})

module.exports = router;