const commentsRoute = require('express').Router();

module.exports = function(fn) {

  //Create a new comment in db,
  //return the newly created comment to that post
  //along with the post id, comment content commenter's user id, handle,
  commentsRoute.post('/', (req, res) => {
    const postId = req.body.postid;
    const userId = req.session.userID[0].id;
    const content = req.body.content;
    const comment = {
      postID: postId,
      userID: userId,
      content: content
    };
    fn.createComment(comment, () => {
      fn.getComments(postId, (comments) => {
        res.send(comments);
        return;
      })
    });
  });

  return commentsRoute;
};

// Value being returned looks like this
// { postID: '1',
//   userID: 10,
//   content: 'test almost there',
//   handle: 'locker' }
