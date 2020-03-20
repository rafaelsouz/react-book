import React from 'react';
import './styles.css';

function PostHeader() {
  return (
    <div className='postHeader'>
      <img className='avatar' src="https://avatarfiles.alphacoders.com/170/thumb-170221.png" alt="" />
      <div className='details'>
        <span>Júlio Alcantara</span>
        <span>04 Jun 2019</span>
      </div>
    </div>
  );
}

function PostComments() {
  return (
    <div className='postComment'>
      <div className="divider" />
        <div className="comment">
          <img className='avatar' src="https://avatarfiles.alphacoders.com/170/thumb-170221.png" />
          <p>
            <span>Diego Fernandes:</span>
            A Rocketseat está sempre em busca de novos membros para o time, e geralmente 
            ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de 
            devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar 
            gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem 
            mesmo, esse comentário é real)
          </p>
        </div>
    </div>
  );
}

function PostItem() {
  return (
  <div className='post'>
    <PostHeader />
    <p className='postContent'>Pessoal, alguém sabe se a Rocketseat está contratando?</p>
    <PostComments />
  </div>
  )
}



export default PostItem;