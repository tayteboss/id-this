import React from 'react'
import './AboutComment.scss'

export default function AboutComment() {
    return(
        <div className="about-comment-wrapper">
            <section className="about">
                <div className="about__wrapper">
                    <h1>what is this?</h1> 
                    <div className="body-text">
                    <p>I can't be the only one sick of asking or ID's on soundcloud mixes on the daily?</p>
                    <p>Enter a soundcloud URL of your favourite mix and we will do our best to give you a tracklist</p>
                    </div>
                    <div className="arrow-btn">
                    <button>how does this work?</button>
                    </div>
                </div>
            </section>
            <section className="comment">
                <article>
                    <span>Algae Boii</span><span> at </span><span>1:00:39</span>
                    <h2>"This track!! Damn! What's it called?"</h2>
                </article>
                <article>
                    <span>Dj Pleasure</span><span> at </span><span>42:12</span>
                    <h2>"Anyone got a tracklist?"</h2>
                </article>
                <article>
                    <span>Sandprince</span><span> at </span><span>2:04:09</span>
                    <h2>"ID?"</h2>
                </article>
                <article>
                    <span>Reptant</span><span> at </span><span>30:49</span>
                    <h2>"@whisperingwind, do you have a tracklist?"</h2>
                </article>
                <article>
                    <span>Morgan Weiss</span><span> at </span><span>12:03</span>
                    <h2>"Anyone got an ID on this?"</h2>
                </article>
                <article>
                    <span>Dow Jones</span><span> at </span><span>26:37</span>
                    <h2>"tracklist plzz?"</h2>
                </article>
                <article>
                    <span>Tozzi</span><span> at </span><span>03:17</span>
                    <h2>"ID on the intro?"</h2>
                </article>
                <article>
                    <span>DJSplash</span><span> at </span><span>58:23</span>
                    <h2>"Help, I need the tracklist to this set"</h2>
                </article>
                <article>
                    <span>SpinxLord</span><span> at </span><span>01:54</span>
                    <h2>"ID anyone?"</h2>
                </article>
            </section>
        </div>
    )
}