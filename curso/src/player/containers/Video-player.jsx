import React, { Component } from 'react';
import VideoPlayerLayout from '../components/Video-player-layout.jsx';
import Video from '../components/video.jsx';
import Title from '../components/title.jsx';
import PlayPause from '../components/Play-pause.jsx';
import Timer from '../components/Timer.jsx';
import Controls from '../components/Video-player-controls.jsx';
import FormattedTime from '../components/Formattedtime.jsx';
import ProgressBar from '../components/Progress-bar.jsx';
import Spinner from '../components/Spinner.jsx';
import Volume from '../components/Volume.jsx';
import FullScreen from '../components/Full-screen.jsx';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  return {
    media: state.get('data').get('entities').get('media').get(props.id),
  };
}

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: '',
    durationFloat: 0,
    timeFloat: 0,
    loading: false,
    volume: true,
    lastVolume: 0,
    lastState: 0,
  };

  togglePlay = (event) => (
    this.setState({
      pause: !this.state.pause,
    })
  );

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay),
    });
  }

  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: FormattedTime(this.video.duration),
      durationFloat: this.video.duration,
    });
  };

  handleTimeUpdate = event => {
    // console.log(this.video.currentTime);
    this.setState({
      currentTime: FormattedTime(this.video.currentTime),
      timeFloat: this.video.currentTime,
    });
  };

  handleProgressChange = event => {
    this.video.currentTime = event.target.value;
  };

  handleSeeking = event => {
    this.setState({
      loading: true,
    });
  };

  handleSeeked = event => {
    this.setState({
      loading: false,
    });
  };

  handleVolumeChange = event => {
    this.video.volume = event.target.value;
  };

  handleVolumeToggle = event => {
    this.setState({
      lastState: this.state.volume,
      lastVolume: this.video.volume,
      volume: this.state.volume === 0 ? this.state.lastState : 0,
    });
    console.log(this.state.volume);
    this.video.volume = this.state.lastVolume;//1
    console.log(this.state.volume);
  };

  handleFullScreenClick = event => {
    if (!document.webkitIsFullScreen) {
      //mando a fullscreen
      this.player.webkitRequestFullScreen();
    } else {
      //salgo del fullscreen
      document.webkitExitFullscreen();
    }
  };

  setRef = element => {
    this.player = element;
  };

  render () {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title
          title={this.props.media.get('title')}
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
            />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
            />
          <ProgressBar
            duration={this.state.durationFloat}
            value={this.state.timeFloat}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            handleVolumeToggle={this.handleVolumeToggle}
            volume={this.state.volume}
          />
        <FullScreen
          handleFullScreenClick={this.handleFullScreenClick}
        />
        </Controls>
        <Spinner
          active={this.state.loading}
        />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src={this.props.media.get('src')}
        />
      </VideoPlayerLayout>
    );
  }
}

export default connect(mapStateToProps)(VideoPlayer);
