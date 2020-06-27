const db = require('../models/sqlModel.js');

const userController ={};

userController.verifyUser = (req, res, next) => {
    const userQuery = `SELECT * FROM login WHERE username=${req.body.username} AND password=${req.body.password}`

    db.query(userQuery).then(data => {
        console.log('data from userQuery',data) // should look into what userQuery returns
        if(data.rows !== 0){
            res.locals.login = true;
            return next();
        } else {
            res.locals.login = false;
            return next();
        }
    })
    next();
}

userController.createUser = (req, res, next) => {
    const createUserQuery = `INSERT INTO login (username, password, email) VALUES ($1, $2, $3)`;
    const values = [req.body.username, req.body.password, req.body, email];

    db
      .query(createUserQuery, values)
      .catch((err) => console.log(err));
    
    return next();
}


module.exports = userController;