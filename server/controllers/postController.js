const db = require("../models/sqlModel.js");

const postController = {};

postController.createPost = (req, res, next) => {
  const addPostQuery = `INSERT INTO post (username_id, question, content, categories_id, resolved, date_created) VALUES ($1, $2, $3, $4, $5, $6)`;
  const values = [
    "[username displayed here]",
    req.body.question,
    req.body.content,
    req.body.categories_id,
    req.body.resolved,
    req.body.date_created,
  ];

  console.log("REQBODY**********", req.body);

  /* SAMPLE MESSAGE:
  INSERT INTO post( username_id, question, content, categories_id ,resolved, date_created) 
  VALUES('user1','ASK A QUESTION','WHERE MESSAGE WILL SHOW','UNIT NUMBER',true,'2020-07-01')
   
  const values = [
          user123,
          "When should I use a JWT?",
          "There are a lot of arguments both for and against the use of JWTs.  Critics of JWTs often point to certain security vulnerabilities that session cookies do not have.  It is also a lot harder to revoke JWTs than it is do delete a cookie.",
          "Unit 11",
          true,
          "2020-06-01",
    ];
*/
  db.query(addPostQuery, values).catch((err) => console.log(err));

  console.log(db.query(addPostQuery, values));

  return next();
};

postController.getAllPosts = (req, res, next) => {
  const getAllPostsQuery = `SELECT * FROM post`;

  db.query(getAllPostsQuery)
    .then((data) => {
      res.locals.allPosts = data.rows;
      next();
    })
    .catch((err) => console.log(err));
};

postController.deletePost = (req, res, next) => {
  const deletePostQuery = `DELETE FROM post WHERE _id=${req.body.id}`;
  db(deletePostQuery)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));

  return next();
};

module.exports = postController;
