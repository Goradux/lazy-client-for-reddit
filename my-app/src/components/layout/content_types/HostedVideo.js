import React, { Component } from 'react';

export class HostedVideo extends Component {
  render() {
    // console.log(this.props.reddit_video);

    // video length is also passed here!
    return (
      <div style={contentStyle} className='fade-animation-fast'>
          {/* hosted video component */}
          <iframe src={this.props.reddit_video.fallback_url} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen={true} style={iframeStyle} height={this.props.reddit_video.height} width={this.props.reddit_video.width} title='hosted video'></iframe>
      </div>
    )
  }
}

const contentStyle = {
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const iframeStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  // flexGrow: '1',
};

export default HostedVideo;
