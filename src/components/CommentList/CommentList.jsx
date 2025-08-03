import React from 'react';
import CommentInformation from '../CommentInfo';
import './CommentList.scss';

export function CommentList({ comments }) {
  if (!comments || comments.length === 0) {
    return null;
  }

  return (
    <ul className="CommentList">
      {comments.map(c => (
        <li key={c.id}>
          <CommentInformation comment={c} />
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
