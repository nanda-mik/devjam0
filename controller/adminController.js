const getDb = require('../util/database').getDb;

exports.postLogin = (req,res,next) =>{
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    console.log(password);
    const db = getDb();
    db.collection('admin').findOne({username: username})
        .then(user => {
            if(!user){
                // req.flash('error','Invalid username or password');
                console.log("invalid username or password");
                // return res.redirect('/login');
                return res.status(400).json({username: "User not found"});
            }
            if(user.password === password){
                console.log("success");
                req.session.isLoggedIn = true;
                return req.session.save(err => {
                    res.redirect('/');
                });
            }else{
                console.log("invalid username or password");
                res.redirect('/login');
            }
        })
        .catch(err => {
            console.log(err);
            res.redirect('/login');
        })
        .catch(err => console.log(err));
};

exports.postLogout = (req,res,next)=>{
    req.session.destroy(err => {
        res.redirect('/');
    });
};