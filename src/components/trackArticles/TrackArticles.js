import React from 'react'

export default function TrackArticles(props) {
    // console.log(props.props);
    // return(
    //     <div>
    //     </div>
    // )
    return (
        <div>
            {props.props.tracklist.map((track, index) => {
                return <article key={index}>
                    <p className="timestamp">{track.timecode}</p>
                    <div className="track-details-wrapper">
                        <div>
                            <h2>{track.artist}</h2>
                            <p>{track.title}</p>
                        </div>
                        <a href={track.href}>
                            <div className="track-links">
                                <img src={require('../../assets/images/spotify-icon.png')} alt=""/>
                                <a href={track.href}>Listen on Spotify</a>
                            </div>
                        </a>
                    </div>
                </article>
            })}
        </div>
    )
    
}