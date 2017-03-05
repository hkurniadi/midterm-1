'use strict';

const userOwnLikesRoute = require('express').Router();

module.exports = function(fn) {

  userOwnLikesRoute.get('/', (req, res) => {
    const userId = req.session.userID[0].id;
    fn.getUserOwnLikes(userId, (postIdArray) => {
      const postIds = [];
      postIdArray.forEach( (id) => {
        postIds.push(id.post_id);
      });
      fn.getPostsbyPostIdArray(postIds, (posts) => {
        res.send(posts);
      });
    });
  });

  return userOwnLikesRoute;

};
