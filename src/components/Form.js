import React, { useState } from 'react';

export default function Form ({comments, setComments}) {

    const [name, setNewName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [nameValue, setValueName] = useState("")
    const [emailValue, setValueEmail] = useState("")
    const [commentValue, setValueComment] = useState("")

    const getName = (event) =>  {
        setValueName(event.target.value)
        setNewName(event.target.value)
    };

    const getEmail = (event) => {
        setEmail(event.target.value)
        setValueEmail(event.target.value)
    };

    const getComment = (event) => {
        setComment(event.target.value)
        setValueComment(event.target.value)
    };

    const generatorID = () => {return Date.now()};

    let commentInfo = {
        postId: 11,
        id: generatorID(),
        name,
        email,
        body: comment
    }

    const postComment = (e) => {
        e.preventDefault()
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(commentInfo)
        })
        
        upDateComments()
        setValueName("")
        setValueEmail("")
        setValueComment("")
    }

    const upDateComments = () => {
        let arr = comments
        arr.push(commentInfo)
        setComments(arr => [...arr])
    }

    return(
        <form action="#" className="uk-comment-form uk-margin-medium-top">
            <fieldset className="uk-fieldset">
                <legend className="uk-legend">Add Comment</legend>
                <div className="uk-margin">
                    <input className="uk-input" type="text" value={nameValue} placeholder="Name" required onChange={getName}/>
                </div>
                <div className="uk-margin">
                    <input className="uk-input" type="email" value={emailValue} placeholder="Email" required onChange={getEmail}/>
                </div>
                <div className="uk-margin">
                    <textarea className="uk-textarea" rows="5" value={commentValue} placeholder="Comment" required onChange={getComment}></textarea>
                </div>
                <div className="uk-margin">
                    <button className="uk-button uk-button-primary" type="submit" onClick={((e) => postComment(e))}>Post Comment</button>
                </div>
            </fieldset>
        </form>
    )
}