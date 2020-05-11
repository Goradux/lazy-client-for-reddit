import React, { Component } from 'react';

export class ContentLink extends Component {
  render() {

    // console.log(this.props.preview);

    if (this.props.preview.reddit_video_preview !== undefined) {
      return (
        <div style={contentStyle} className='fade-animation-fast'>
          {/* Content link with video preview component */}
          <iframe src={this.props.preview.reddit_video_preview.fallback_url} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen={true} style={iframeStyle} height={this.props.preview.reddit_video_preview.height} width={this.props.preview.reddit_video_preview.width} title='Link with a video preview'></iframe>
        </div>
      )
    } else {
      return (
        <div style={contentStyle} className='fade-animation-fast'>
          {/* an image and a link */}
          <img style={contentImageStyle} src={this.props.preview.images[0].source.url} alt='' className='fade-animation-fast'/>
          <a href={this.props.url} target="_blank" style={anchorStyle}>Link To The Article</a>
        </div>
      )
    }
  }
}

const contentStyle = {
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

const iframeStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  // flexGrow: '1',
};

const contentImageStyle = {
  objectFit: 'scale-down',
  width: '100%',
  height: '90%',
};

const anchorStyle = {
  fontWeight: '600',
  color: 'rgb(51,51,51)',
  fontSize: '1.5rem',
  lineHeight: '150%',
  // marginTop: '20px',
};

export default ContentLink;
