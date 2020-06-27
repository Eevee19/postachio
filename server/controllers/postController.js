const db = require('../models/sqlModel.js');

const postController = {}

postController.createPost = (req, res, next) => {
    const addPostQuery = `INSERT INTO post (username_id, question, content, categories_id, resolved, date_created) VALUES ($1, $2, $3, $4, $5, $6)`;
    const values = [req.body.username_id, req.body.question, req.body.content, req.body.categories_id, req.body.resolved, req.body.date_created];

    db
      .query(addPostQuery, values)
      .catch((err) => console.log(err));
    
    return next();
}

postController.deletePost = (req, res, next) => {
    const deletePostQuery = `DELETE FROM post WHERE _id=${req.body.id}`
    db(deletePostQuery).then(data => {
        console.log(data);
       
    })
    .catch((err) => console.log(err));

    return next();
}

module.exports = postController;