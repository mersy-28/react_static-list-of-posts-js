import React from 'react';
import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <h3 className="CommentInfo__name">{comment.name}</h3>
    <p className="CommentInfo__body">{comment.body}</p>
  </div>
);
