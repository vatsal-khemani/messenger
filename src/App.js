import './App.css';
import React,{useState,useEffect} from 'react';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Message from './Message';

function App() {
  const [input,setInput]=useState('');
  const [messages,setMessages]=useState([
    {username: 'Virat',text: 'hello'},
    {username: 'Aman',text: 'howdy'},]);
  const [username,setUsername]=useState('');

  //useState =variable in React
  //useEffect=run code on a condition in ract
  useEffect(()=>{
    //run code here
    //if [] is blank then this code runs once when the app compoent loads
     //if we have a variable like input, this code runs whenever input changes
     setUsername(prompt('Please enter you name'));
  }, [])//condition

  const sendMessage = (event)=> {
    event.preventDefault();
    setMessages([...messages,{username: username,text: input}]);
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
      {
        messages.map(message => (
          <Message username={username} message={message}/>
        ))
      }
    </div>
  );
}

export default App;
