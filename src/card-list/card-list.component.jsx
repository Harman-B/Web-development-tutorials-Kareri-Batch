import React from 'react';

import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = (props) => {

  const getPosts = async (user) => {
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    const posts = await postsResponse.json();
    console.log(posts);
  }

  const handleGetPosts = (user) => {
    getPosts(user);
  }
  
  return (
    <div className='list'>
      {
        props.robots.map(robot => {
          return <Card robot = {robot} handleGetPosts={handleGetPosts}/>
        })
      }
    </div>
  )
}

export default CardList;