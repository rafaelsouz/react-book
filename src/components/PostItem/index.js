import React from 'react';
import './styles.css';

function PostHeader() {
  return (
    <div className='postHeader'>
      <img className='avatar' src="" alt="" />
      <div className='infoPost'>
        <span>Júlio Alcantara</span>
        <span>04 Jun 2019</span>
      </div>
      <p>Pessoal, alguém sabe se a Rocketseat está contratando?</p>
    </div>
  );
}

function PostComments() {
  return (
    <div className='postComment'>

    </div>
  );
}

function PostItem() {
  <div className='postItem'>
    <PostHeader />
    <PostComments />
  </div>
}



export default PostItem;