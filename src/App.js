import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Post from './components/Post';
import Comments from './components/Comments';
import Form from './components/Form';

function App() {

  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1?_embed=comments&_expand=user")
      .then(response => response.json())
      .then(data => getData(data.comments, data.title, data.body, data.user.name))
  }, []);

  const getData = (c, title, body, author) => {
    let postData = { title, body}
    setComments(c)
    setPost(postData)
    setName(author)
  }

  return (
    <div className="App">
      <main className="uk-main">
        <Header/>
        <div className="uk-section">
            <div className="uk-container">
                <Post post={post} name={name}/>
                <Comments comments={comments}/>
                <Form comments={comments} setComments={setComments}/>
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;
