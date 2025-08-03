import React from 'react';
import './App.scss';

import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';

import { PostList } from './components/PostList';

function findUser(id) {
  return usersFromServer.find(u => u.id === id) || null;
}

function findComments(postId) {
  return commentsFromServer.filter(c => c.postId === postId);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: findUser(post.userId),
  comments: findComments(post.id),
}));

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </div>
);
