import React from 'react'
import './Results.scss'
import TrackArticles from '../trackArticles/TrackArticles'
import ErrorTrackArticles from '../errorTrackArticles/ErrorTrackArticles'

export default class Results extends React.Component { 

    constructor() {
        super()
        this.state = {
            hasTracks: true
        }
    }
    
    componentDidMount() {

        let tracklist = this.props.tracklist

        if (tracklist.length === 0 || tracklist === null || tracklist === undefined) {
            console.log('no tracks');
            this.setState({ hasTracks: false })
        } else {
            console.log('tracks');
            
            this.setState({ hasTracks: true })
        }
    }

    render() {

        return (
            <section className="results">
                <div>
                    <div className="step-hint">
                        <span>step 3 - </span><p>results...</p>
                    </div>
                    <p className="body-text loading-hint">Here's what we found...</p>
                </div>
                <div className="tracklist-wrapper">

                    { this.state.hasTracks &&
                        <TrackArticles props = { this.props }/>
                    }

                    { !this.state.hasTracks &&
                        <ErrorTrackArticles />
                    }

                </div>
            </section>
        )
    }
    
}


