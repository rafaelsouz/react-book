import React from 'react';
import './styles.css';

function PostHeader({ author, date }) {
  return (
    <div className='postHeader'>
      <img className='avatar' src={author.avatar} alt="" />
      <div className='details'> 
        <span>{ author.name }</span>
        <span>{ date }</span>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className='postComment'>
      <div className="divider" />
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <img className='avatar' src={comment.author.avatar} />
            <p>
              <span>{comment.author.name}:</span>
              {comment.content}
            </p>
          </div>
        ))}
    </div>
  );
}

function PostItem({ author, date, content, comments }) {
  
  return (
  <div className='post'>
    <PostHeader author={author} date={date} />
    <p className='postContent'>{content}</p>
    <PostComments comments={comments} />
  </div>
  )
}



export default PostItem;