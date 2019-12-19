import React from 'react'

export default function ErrorTrackArticles() {

    return (
        <div>
            <article>
                <p className="timestamp">error</p>
                <div className="track-details-wrapper">
                    <div>
                        <h2>Sorry, there was an error with our server...</h2>
                        <p>Try again later.</p>
                    </div>
                </div>
            </article>
        </div>
    )   
}