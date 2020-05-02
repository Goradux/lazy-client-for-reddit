import React, { Component } from 'react';

export class ContentFrame extends Component {

  render() {
    // const {url} = this.props.submission;
    if (this.props.submission !== null) {
      var submission = this.props.submission;
    } else {
      submission = {

      }
    }

    return (
      <div style={{width: '100%', height: '100%', display: 'inline-block'}}>
        <div id='header-wrapper' style={headerWrapperStyle}>
          <div id='score' style={scoreStyle}>
            100
          </div>
          <div id='header' style={headerStyle}>
            {submission.title}
          </div>
        </div>
        
        <div id='main-wrapper' style={mainBackgroundStyle}>
          <div id='main'>
            Content Frame {this.props.local_post_id} {submission.author}
          </div>
        </div>
      </div>
    )
  }
}

const headerWrapperStyle = {
  width: '100%',
  height: '18%',
}

const headerStyle = {
  width: '95%',
  height: '100%',
  // minHeight: '3rem',
  // minHeight: '100px',
  backgroundColor: 'rgb(51,51,51)',
  color: 'white',
  fontSize: '30px',
  padding: '10px',
  display: 'inline-block',
  justifyContent: 'left',
  alignItems: 'center',
};

const mainBackgroundStyle = {
  backgroundColor: 'rgb(200,200,200)',
  width: '100%',
  height: '82%',
}

const scoreStyle = {
  height: '100%',
  width: '5%',
  display: 'inline-block',
};

export default ContentFrame;


// https://stackoverflow.com/questions/35537229/how-to-update-parents-state-in-react