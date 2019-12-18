import React from 'react';
import './App.scss'
import NavBar from '../navBar/NavBar'
import SoundcloudUrlForm from '../soundcloudUrlForm/SoundcloudUrlForm';
import AboutComment from '../aboutComment/AboutComment'
import IdentifyingSong from '../identifyingSong/IdentifyingSong'
import IdentifyingSongComplete from '../identifyingSongComplete/IdentifyingSongComplete'
import Results from '../results/Results'
const axios = require('axios')

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      apiCalls: {
        idle: true,
        pending: true,
        complete: false
      },
      tracklist: [],
      apiCallProgress: {
        fetchedUrl: false,
        complete: false
      }
    }
  }

  updateApiCalls = (apiCalls) => {
    this.setState({ apiCalls })
  }

  getTracklistFromApi = (url) => {
    const data = { mp3Url: url }
    axios.get(`http://localhost:7000/get-tracklist`, { params: data }).then(res => {

      this.setState({ apiCallProgress: { fetchedUrl: false, complete: true } })
      this.updateApiCalls({ idle: false, pending: false, complete: true })

      this.setState({ tracklist: res.data })
    })
  }
  
  getMP3UrlFromApi = (url) => {
    const data = { youtubeUrl: url }
    axios.get(`http://localhost:7000/get-mp3-url`, { params: data }).then(res => {

      this.setState({ apiCallProgress: { fetchedUrl: true, complete: false } })
      this.getTracklistFromApi(res.data)

    })
    this.updateApiCalls({ idle: false, pending: true, complete: false })
  }

  render() {
    const { tracklist } = this.state
    const { apiCallProgress } = this.state
    
    return (
      <div className="App">
        <header>
          <NavBar />
          <SoundcloudUrlForm 
            getMP3UrlFromApi = { this.getMP3UrlFromApi }
          />
        </header>

        { this.state.apiCalls.idle &&
          <AboutComment />
        }
        { this.state.apiCalls.pending &&
            <IdentifyingSong 
              apiCallProgress = { apiCallProgress }
            />
        }
        { this.state.apiCalls.complete &&
            <IdentifyingSongComplete />
        }
        { this.state.apiCalls.complete &&
          <Results tracklist = { tracklist }/>
        }

      </div>      
    );
  }
}

export default App;
