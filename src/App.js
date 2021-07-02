import './App.css';
import Chat from './Chat';
import { useEffect, useState } from 'react';
import firebase from './firebase';
import 'firebase/database';
import Messages from './Messages';

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const messagesRef = firebase.database().ref('Messages');
    messagesRef.on('value', (snapshot) => {
      const values = snapshot.val()
      const messList = [];
      for (let id in values) {
        messList.push(values[id])
      }
      setMessages(messList)
    })
  }, [])
  return (
    <div className="App">
      <Messages messages={messages}/>
      <Chat />

    </div>
  );
}

export default App;
