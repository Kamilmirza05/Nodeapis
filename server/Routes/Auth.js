const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwtgenerator = require('../utils/jwtgenerator');
const validinfo = require('../middleware/validinfo');
const authorization = require('../middleware/authorization');

const pool = require('../db');


//registraton
router.post('/register',async function(req, res){
    
    try {
    //construct the user
    const {id,name, email, password} = req.body;
    const users = await pool.query("select * from users where user_email = $1",[


        email

    ]);
    
    if(users.rows.length!==0)
    {
        return res.status(401).send("user already exist")

    }
    //bcrypt user password//
   
    const salt = await bcrypt.genSalt(10);

    const bcryptpassword = await bcrypt.hash(password,salt)

    //insert new user into your table

    const newUser = await pool.query("insert into users(user_name,user_email,user_password) values($1,$2,$3) returning *",
    
    [name,email,bcryptpassword])
    
    //Generate webtoken
    const token = jwtgenerator(newUser.rows[0].user_id);
    res.json({token});
}
  
    catch (err) {
        console.error(err.message)
        return res.status(500).send("server error")
    }
    
})

router.post('/login',validinfo,async(req,res)=>{
    try {
        const { email, password} = req.body;
        const users = await pool.query("select * from users where user_email = $1",[
    
            email
        ]);

        if(users.rows.length ===0){

          return res.status(401).send("incorrect email and password")
        }

        const validpassword = await bcrypt.compare(password,users.rows[0].user_password)

        if(!validpassword){
            res.status(400).json("invalid email and password")
        }

        const token = jwtgenerator(users.rows[0].user_password)
        res.json({token});


    } catch (error) {
        console.log(err.message)
        return res.status(500).send("server error")
    }
    

});

router.get('/is-verify',authorization, async(req, res)=>{
    try {
        res.send(true);
    } catch (err) {

        console.error(err.message)
        return res.status(500).send("server error")
    }
})
module.exports = router;