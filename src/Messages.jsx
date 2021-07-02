import React from 'react'

export default function Messages({ messages }) {
  return (
    <div className="messages">
      {messages.map((item, index) => (
        <div className='message' key={index.toString()}>
          <div className='message__author'>from: {item.author}</div>
          <div className='message__text'>{item.message}</div>
        </div>
      ))}
    </div>
  )
}
