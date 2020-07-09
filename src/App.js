import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Post from './components/Post'
import Comments from './components/Comments'
import Form from './components/Form'


function App() {

  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => setPost(data))
  }, []);

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/11?_embed=comments")
        .then(response => response.json())
        .then(data => setComments(data.comments))
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1?_expand=user")
      .then(response => response.json())
      .then(response => setName(response.user.name))
  }, []);

  return (
    <div className="App">
      <main className="uk-main">
        <Header/>
        <div className="uk-section">
            <div className="uk-container">
                <Post post={post} name={name}/>
                <Comments comments={comments}/>
                <Form comments={comments}/>
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;
