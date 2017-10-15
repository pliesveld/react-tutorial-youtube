import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyABNZKgrgnzHOs7tgKkGUjc-KUKobmJxQA';

class App extends Component {
  constructor(props) {
    super(props);

    const onVideoListItemClick = (index) => {
      this.setState({
        selectedVideo: this.state.videos[index]
      });
    }

    this.state = {
      videos: [],
      selectedVideo: null,
      onVideoListItemClick: onVideoListItemClick
    };

    YTSearch({key: API_KEY, term: 'discgolf'}, (videos) => { 

      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}  />
        <VideoList videos={this.state.videos} onClick={this.state.onVideoListItemClick} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

