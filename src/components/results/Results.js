import React from 'react'
import './Results.scss'

export default function Results(props) { 
    // console.log(props.tracklist);
    
    return(
        <section className="results">
            <div>
                <div className="step-hint">
                    <span>step 3 - </span><p>results...</p>
                </div>
                <p className="body-text loading-hint">Here's what we found...</p>
            </div>
            <div className="tracklist-wrapper">

                    {/* <article>
                        <p className="timestamp">00:00:25</p>
                        <div className="track-details-wrapper">
                            <div>
                                <h2>John Smith</h2>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="track-links">
                                <img src={require('../../assets/images/spotify-icon.png')} alt=""/>
                                <a href="#">Listen on Spotify</a>
                            </div>
                        </div>
                    </article> */}

                    {props.tracklist.map((track, index) => {
                        return <article key={index}>
                            <p className="timestamp">{track.timestamp}</p>
                            <div className="track-details-wrapper">
                                <div>
                                    <h2>{track.artist}</h2>
                                    <p>{track.title}</p>
                                </div>
                                <div className="track-links">
                                    <img src={require('../../assets/images/spotify-icon.png')} alt=""/>
                                    <a href="#">Listen on Spotify</a>
                                </div>
                            </div>
                        </article>
                    })}

            </div>
        </section>
    )
}


