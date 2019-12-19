import React from 'react'
import './SoundcloudUrlForm.scss'

export default class SoundcloudUrlForm extends React.Component {

    constructor() {
        super()
        this.state = {
            urlError: false
        }
    }

    handleChange = (e) => {
        let urlInput = e.target.value
        if (urlInput.includes("www.youtube.com/watch?v=") || urlInput.includes("soundcloud.com")) {
            this.props.getMP3UrlFromApi(e.target.value)
            this.setState({ urlError: false })
        } else {
            console.log('error');
            this.setState({ urlError: true })
        }
    }


    render() {

        if (this.state.urlError) {
            var errorStyle = {
                opacity: "1"
            }
        } else {
            var errorStyle = {
                opacity: "0"
            }
        }

        return (
            <div className="form">
                <label>step 1 </label><span className="error" style={errorStyle}>- incorrect URL</span>
                <input onChange={this.handleChange} type="text" placeholder="enter youtube/soundcloud url..." name="youtubeURL"/>
            </div>
        )
    }
}


