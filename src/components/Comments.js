import React from 'react';

export default function Comments ({comments}) {

    return(
        <div>
            <h3 className="uk-margin-remove-top">Comments:</h3>

            {comments.map(c => {
                return(
                    <article className="uk-comment" key={c.id}>
                        <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
                            <div className="uk-width-expand">
                                <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="/post/1">{c.name}</a></h4>
                                <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                    <li><a href="/post/1">{c.email}</a></li>
                                </ul>
                            </div>
                        </header>
                        <div className="uk-comment-body">
                            <p>{c.body}</p>
                        </div>
                        <hr></hr>
                    </article>
                )
            })}

        </div>
    )
}