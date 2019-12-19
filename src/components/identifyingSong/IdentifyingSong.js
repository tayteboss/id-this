import React from 'react'
import './IdentifyingSong.scss'
const axios = require('axios')

export default class IdentifyingSong extends React.Component {

    constructor() {
        super()
        this.state = {
            joke: "Chuck Norris can touch MC Hammer.",
            jokeInterval: null,
            loadingProgress: 0
        }
    }

    componentDidMount() {
        const jokeInterval = setInterval(() => {
            axios.get('http://api.icndb.com/jokes/random?').then(res => {
                this.setState({
                    joke: res.data.value.joke,
                    jokeInterval
                })
            })
        }, 5000)


        const loadingInterval = setInterval(() => {
            let loadingProgress = this.state.loadingProgress

            if (this.state.loadingProgress < 100) {
                this.setState({ loadingProgress: loadingProgress = loadingProgress + 1 })

                if (this.props.apiCallProgress.fetchedUrl) {
                    this.setState({ loadingProgress: 50 })

                    if (this.state.loadingProgress < 90) {
                        this.setState({ loadingProgress: loadingProgress = loadingProgress + 1 })
                    }
                }
            }

        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.state.jokeInterval)
        this.setState({ jokeInterval: null })
        clearInterval(this.state.loadingInterval)
        this.setState({ loadingProgress: 0 })
    }

    render() {

        let loadingBarStyle = {
            width: `${this.state.loadingProgress}%`,
        }

        return(
            <section className="song-identifier">
                <div style={loadingBarStyle} className="loading-bar"></div>
                <div className="wrapper">
                    <div className="step-hint">
                        <span>step 2 - </span><p>identifying songs...</p>
                    </div>
                    <p className="body-text loading-hint">This may take some time...<br/>Here are some chuck norris facts:</p>
                    <p className="percentage-loader">{this.state.loadingProgress}%</p>
                </div>
                <div className="fact-wrapper">
                    <h2>{this.state.joke}</h2>
                </div>
          </section>
        )
    }
}