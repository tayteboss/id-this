import React from 'react'
import './SoundcloudUrlForm.scss'

export default function SoundcloudUrlForm({ getMP3UrlFromApi }) {

    function handleChange(e) {
        // if (e.target.value.includes("https://www.youtube.com/watch?v=")) {
            getMP3UrlFromApi(e.target.value)
        // } 
    }

    return (
        <div className="form">
            <label>step 1</label>
            <input onChange={handleChange} type="text" placeholder="paste youtube url..." name="youtubeURL"/>
        </div>
    )
}


