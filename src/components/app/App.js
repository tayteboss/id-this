import React from 'react';
import './App.scss'
import NavBar from '../navBar/NavBar'
import SoundcloudUrlForm from '../soundcloudUrlForm/SoundcloudUrlForm';
import AboutComment from '../aboutComment/AboutComment'
import IdentifyingSong from '../identifyingSong/IdentifyingSong'
import IdentifyingSongComplete from '../identifyingSongComplete/IdentifyingSongComplete'
import Results from '../results/Results'
import Footer from '../footer/Footer'
const axios = require('axios')

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      apiCalls: {
        idle: true,
        pending: false,
        complete: false
      },
      tracklist: [
        {
          title: "lorem ipsum",
          artist: "john smith",
          timecode: "00:25",
          href: "https://www.google.com/"
        },
        {
          title: "lorem ipsum",
          artist: "john smith",
          timecode: "00:25",
          href: "https://www.google.com/"
        },
        {
          title: "lorem ipsum",
          artist: "john smith",
          timecode: "00:25",
          href: "https://www.google.com/"
        },
        {
          title: "lorem ipsum",
          artist: "john smith",
          timecode: "00:25",
          href: "https://www.google.com/"
        },
        {
          title: "lorem ipsum",
          artist: "john smith",
          timecode: "00:25",
          href: "https://www.google.com/"
        },
        {
          title: "lorem ipsum",
          artist: "john smith",
          timecode: "00:25",
          href: "https://www.google.com/"
        },
        {
          title: "lorem ipsum",
          artist: "john smith",
          timecode: "00:25",
          href: "https://www.google.com/"
        },
        {
          title: "lorem ipsum",
          artist: "john smith",
          timecode: "00:25",
          href: "https://www.google.com/"
        },
      ],
      apiCallProgress: {
        fetchedUrl: false,
        complete: false
      }
    }
  }

  updateApiCalls = (apiCalls) => {
    this.setState({ apiCalls })
  }

  sortTrack = (tracklist) => {

    let sortedTracklist = tracklist.map(track => {
      return track.songs[0]
    })
    console.log(sortedTracklist);
    // this.setState({ tracklist: sortedTracklist})

    this.setState({ apiCallProgress: { fetchedUrl: false, complete: true } })
    this.updateApiCalls({ idle: false, pending: false, complete: true })

  }

  getTracklistFromApi = (url) => {
    const data = { mp3Url: url }
    axios.get(`http://localhost:7000/get-tracklist`, { params: data }).then(res => {
      this.sortTrack(res.data)
    })
  }
  
  getMP3UrlFromApi = (url) => {
    this.updateApiCalls({ idle: false, pending: true, complete: false })
    if (url.includes('www.youtube.com/watch?')) {
      const data = { youtubeUrl: url }
      axios.get(`http://localhost:7000/get-youtube-mp3-url`, { params: data }).then(res => {
        this.setState({ apiCallProgress: { fetchedUrl: true, complete: false } })
        this.getTracklistFromApi(res.data)
      })

    } else if (url.includes('soundcloud.com')) {
      const data = { soundcloudUrl: url }
      axios.get(`http://localhost:7000/get-soundcloud-mp3-url`, { params: data }).then(res => {
        this.setState({ apiCallProgress: { fetchedUrl: true, complete: false } })
        this.getTracklistFromApi(res.data)
      })
    }
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
        <Footer />
      </div>      
    );
  }
}

export default App;





