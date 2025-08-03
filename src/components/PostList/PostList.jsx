import React from 'react';
import PostInformation from '../PostInfo';
import './PostList.scss';

export function PostList({ posts }) {
  return (
    <ul className="PostList">
      {posts.map(p => (
        <li key={p.id}>
          <PostInformation post={p} />
        </li>
      ))}
    </ul>
  );
}

export default PostList;
