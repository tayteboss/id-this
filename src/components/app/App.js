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
          title: "My Humps",
          artist: "Black Eyed Peas",
          timecode: "00:25",
          href: "https://www.google.com/"
        },
        {
          title: "Who Let the Dogs Out",
          artist: "Baha Men",
          timecode: "05:13",
          href: "https://www.google.com/"
        },
        {
          title: "The Safety Dance",
          artist: "Men Without Hats",
          timecode: "12:45",
          href: "https://www.google.com/"
        },
        {
          title: "Achy Breaky Heart",
          artist: "Billy Ray Cyrus",
          timecode: "17:15",
          href: "https://www.google.com/"
        },
        {
          title: "Ice Ice Baby",
          artist: "Vanilla Ice",
          timecode: "25:27",
          href: "https://www.google.com/"
        },
        {
          title: "Crazy Frog",
          artist: "Axel F",
          timecode: "33:38",
          href: "https://www.google.com/"
        },
        {
          title: "Barbie Girl",
          artist: "Aqua",
          timecode: "37:05",
          href: "https://www.google.com/"
        },
        {
          title: "You're Beautiful",
          artist: "James Blunt",
          timecode: "45:54",
          href: "https://www.google.com/"
        },
        
      ],
      apiCallProgress: {
        fetchedUrl: false,
        complete: false
      }
    }
  }

  apiDomain = window.location.hostname === 'localhost' ? 'http://localhost:7000/' : 'https://id-this.herokuapp.com/'

  updateApiCalls = (apiCalls) => {
    this.setState({ apiCalls })
  }

  sortTrack = (tracklist) => {
    let sortedTracklist = tracklist.map(track => {
      return track.songs[0]
    })
    console.log(sortedTracklist);
    // this.setState({ tracklist: sortedTracklist})

  }

  getTracklistFromApi = (url) => {
    this.setState({ apiCallProgress: { fetchedUrl: false, complete: true } })
    this.updateApiCalls({ idle: false, pending: false, complete: true })
    const data = { mp3Url: url }
    axios.get(`${this.apiDomain}get-tracklist`, { params: data }).then(res => {
      this.sortTrack(res.data)
    })
  }
  
  getMP3UrlFromApi = (url) => {
    this.updateApiCalls({ idle: false, pending: true, complete: false })
    if (url.includes('www.youtube.com/watch?')) {
      const data = { youtubeUrl: url }
      axios.get(`${this.apiDomain}get-youtube-mp3-url`, { params: data }).then(res => {
        this.setState({ apiCallProgress: { fetchedUrl: true, complete: false } })
        this.getTracklistFromApi(res.data)
      })

    } else if (url.includes('soundcloud.com')) {
      const data = { soundcloudUrl: url }
      axios.get(`${this.apiDomain}get-soundcloud-mp3-url`, { params: data }).then(res => {
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
