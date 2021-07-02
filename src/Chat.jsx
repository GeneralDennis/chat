import React, { useState } from 'react'
import firebase from './firebase'
import 'firebase/database';

export default function Chat() {
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState('');

  const sendMessage = () => {
    const messageRef = firebase.database().ref("Messages");

    const text = {
      message,
      author
    }

    if(message.length > 0){
      if(author.length > 0){
        messageRef.push(text)
        setMessage("");
        setAuthor("");
        setError('');
      } else {
        setError({text: 'Field Must be not empty', el: 'author'})
      }

    } else {
      setError({text: 'Field Must be not empty', el: 'message'})
    }


  }
  return (
    <form className='message-form'>
      <div className='text-field'>
        <textarea type="text" value={message} onChange={e => setMessage(e.target.value)}/>
        {error && error.el.length > 0 ?  error.el === 'message' ? <div className='error'>{error.text}</div> : '' : ''}
      </div>
      <div className='text-field'>
        <input type="text" value={author} onChange={e => setAuthor(e.target.value)}/>
        {error && error.el.length > 0 ?  error.el === 'author' ? <div className='error'>{error.text}</div> : '' : ''}
      </div>
      <div className='text-field'>
        <button type="button" onClick={e => {

        sendMessage();
      }}>Add</button>
      </div>
    </form>
  )
}
