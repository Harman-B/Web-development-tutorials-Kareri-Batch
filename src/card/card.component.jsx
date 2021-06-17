import React from 'react'

import './card.styles.css';

const Card = (props) => {
  return (
  <div className='card'
    onClick = {() => props.handleGetPosts(props.robot)}
  >
    <img src={`https://robohash.org/${props.robot.id}?set=set2&180x180`} />
    <h1>{props.robot.name}</h1>
    <h2>{props.robot.id}</h2>
  </div>
  )
}

export default Card;