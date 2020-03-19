import React from 'react';
import './styles.css';

import PostItem from '../PostItem/index'

function PostList() {
  return (
    <div className='postList'>
      <PostItem />
    </div>
  );
}

export default PostList