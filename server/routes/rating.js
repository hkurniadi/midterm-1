const ratingRoute  = require('express').Router();

module.exports = function(fn) {

  ratingRoute.post('/', (req, res) => {
    let ratingNum = req.body.rating;
    let postId = req.body.postid;
    // let userID = req.session.userID[0].id;
    fn.incRating(postId, ratingNum, (rating) => {
      let data = {
        postid: rating.rows[0].post_id,
        rating: rating.rows[0].avg_rating
      };
      res.send(data);
      return;
    });
  });
  return ratingRoute;
};
