import React from 'react';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <section className="CommentList">
    {comments.map(c => (
      <CommentInfo key={c.id} comment={c} />
    ))}
  </section>
);
