import './App.css';
import React,{useState,useEffect} from 'react';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [input,setInput]=useState('');
  const [messages,setMessages]=useState([]);
  const [username,setUsername]=useState('');

  //useState =variable in React
  //useEffect=run code on a condition in react

  useEffect(()=>{
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc=>({id: doc.id, message: doc.data()})))
    })
  }, [])

  useEffect(()=>{
    //run code here
    //if [] is blank then this code runs once when the app compoent loads
     //if we have a variable like input, this code runs whenever input changes
     setUsername(prompt('Please enter you name'));
  }, [])//condition

  const sendMessage = (event)=> {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }
  return (
    <div className="App">
      <h1>Hello world</h1>
  <h2>Welcome {username}</h2>
      <form>
      <FormControl>
        <InputLabel>Enter a message</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value )} />
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>
      </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({id,message}) => (
            <Message key={id}  username={username} message={message}/>
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
