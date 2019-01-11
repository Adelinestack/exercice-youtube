import React, { Component } from 'react';
import auth from '../auth';
import YouTube from 'simple-youtube-api';

import AppTitle from './AppTitle';
import SearchBar from './SearchBar';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';

import './App.css';
const youtube = new YouTube(auth);

async function videoSearch(valueToSearch) {
  const results = await youtube.searchVideos(valueToSearch, 5);
  console.log(results);
  return results;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueToSearch: '',
      videos: [],
      videoUrl: 'https://www.youtube.com/embed/SLD9xzJ4oeU',
    };
  }

  async onInputChange(e) {
    this.setState({
      valueToSearch: e.target.value,
    });
    const videos = await videoSearch(e.target.value);
    this.setState({ videos });
  }

  changeVideoPlayer(videoId) {
    this.setState({
      videoUrl: `https://www.youtube.com/embed/${videoId}`,
    });
  }

  async componentDidMount() {
    const videos = await videoSearch(this.state.valueToSearch);
    this.setState({ videos });
  }

  render() {
    return (
      <div className="App">
        <AppTitle />
        <SearchBar onChange={this.onInputChange.bind(this)} />
        <VideoPlayer videoUrl={this.state.videoUrl} />
        <VideoList
          videos={this.state.videos}
          onImageClick={this.changeVideoPlayer.bind(this)}
        />
      </div>
    );
  }
}

export default App;
