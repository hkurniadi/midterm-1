const searchRoute = require('express').Router();

module.exports = (fn) => {
  searchRoute.get('/', (req, res) => {
    // search posts for related content.
    const searchWord = req.query.search;
    fn.getSearchDataFromPosts(searchWord, (postIdArray) => {
      const postIds = [];
      postIdArray.forEach( (id) => {
        postIds.push(Number(id));
      });
      fn.getPostsbyPostIdArray(postIds, (posts) => {
        res.send(posts);
      });
    });
  });
  return searchRoute;
};
