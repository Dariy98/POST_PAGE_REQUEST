import React from 'react';

export default function Post ({post, name}) {

    return (
        <div>
            <h1 className="uk-heading-bullet uk-margin-medium-bottom">
            <span>{post.title}</span>
            <a className="uk-text-small" href="/post/1">{name}</a>
            </h1>
            <div className="uk-article uk-dropcap uk-margin-large-bottom">
                <p>{post.body}</p>
            </div>
            <hr></hr>
        </div>
    )
}