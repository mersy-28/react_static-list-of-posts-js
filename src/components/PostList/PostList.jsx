import React from 'react';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <section className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </section>
);
