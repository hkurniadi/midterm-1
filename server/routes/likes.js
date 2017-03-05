const likesRoute  = require('express').Router();

module.exports = function(fn) {

  likesRoute.post('/', (req, res) => {
    if(req.body.postid && req.body.like){
      let postId = req.body.postid;
      let userId = req.session.userID[0].id;
      fn.incLikes(postId, userId, (likes) => {
        res.send(likes);
      });

    } else {
      fn.getLikes(postId, (likes) => {
        res.send(likes);
        return;
      });
    }

  });
  return likesRoute;
};
