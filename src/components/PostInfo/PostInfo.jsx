import React from 'react';
import UserInformation from '../UserInfo';
import CommentLists from '../CommentList';
import './PostInfo.scss';

export function PostInfo({ post }) {
  return (
    <article className="PostInfo">
      <div className="PostInfo__header">
        <h2 className="PostInfo__title">{post.title}</h2>
        <p className="PostInfo__body">{post.body}</p>
        <UserInformation user={post.user} />
      </div>

      {post.comments.length > 0 ? (
        <CommentLists comments={post.comments} />
      ) : (
        <div data-cy="NoCommentsMessage">No comments</div>
      )}
    </article>
  );
}

export default PostInfo;
