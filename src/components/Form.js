import React, { useState } from 'react'

export default function Form ({comments}) {

    const [name, setNewName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    const getName = (event) =>  setNewName(event.target.value);

    const getEmail = (event) => setEmail(event.target.value);

    const getComment = (event) => setComment(event.target.value);

    const generatorID = () => {return Date.now()};

    const getAllCommentInfo = () => {
        let commentInfo = {
            postId: 11,
            id: generatorID(),
            name,
            email,
            comment
        }
        return commentInfo;
    }

    const postComment = (e) => {
        e.preventDefault()
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(getAllCommentInfo())
        }).then(comments.push(getAllCommentInfo()))

        console.log(comments)
        return comments
    }

    return(
        <form action="#" className="uk-comment-form uk-margin-medium-top">
            <fieldset className="uk-fieldset">
                <legend className="uk-legend">Add Comment</legend>
                <div className="uk-margin">
                    <input className="uk-input" type="text" placeholder="Name" required onChange={getName}/>
                </div>
                <div className="uk-margin">
                    <input className="uk-input" type="email" placeholder="Email" required onChange={getEmail}/>
                </div>
                <div className="uk-margin">
                    <textarea className="uk-textarea" rows="5" placeholder="Comment" required onChange={getComment}></textarea>
                </div>
                <div className="uk-margin">
                    <button className="uk-button uk-button-primary" type="submit" onClick={(e) => postComment(e)}>Post Comment</button>
                </div>
            </fieldset>
        </form>
    )
}