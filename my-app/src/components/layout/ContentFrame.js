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
            {/* insert an arrow up above */}
            {submission.score}
            {/* insert an arrow down below */}
          </div>
          <div id='title' style={titleStyle}>
            Brazil's President Is Out With Another Super-Bad Coronavirus Take: Soccer Players Can't more text Brazil's President Is Out With Another Super-Bad Coronavirus Take: Soccer Players Can't more text Brazil's President Is Out With Another Super-Bad Coronavirus Take: Soccer Players Can't more text
            {/* the length of 1 line */}
            {/* {submission.title ? submission.title : submission.title} */}
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
  height: '10%',
  display: 'flex',
  boxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  MozBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  WebkitBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  OBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  MsBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  borderRadius: '0px 0px 20px 20px',
}

const scoreStyle = {
  height: '100%',
  width: '5%',
  display: 'flex',
  padding: '10px',
  color: 'white',
  backgroundColor: 'rgb(51,51,51)',
  borderRight: '2px solid rgba(255,255,255,0.73)',
  borderRadius: '0px 0px 0px 20px',
  alignItems: 'center',
  justifyContent: 'center',
};

const titleStyle = {
  width: '95%',
  height: '100%',
  // minHeight: '3rem',
  // minHeight: '100px',
  backgroundColor: 'rgb(51,51,51)',
  color: 'white',
  fontSize: '30px',
  padding: '10px',
  // display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  borderRadius: '0px 0px 20px 0px',
  // overflow: 'hidden',
  // textOverflow: 'ellipsis',
  // whiteSpace: 'nowrap',
};

const mainBackgroundStyle = {
  // backgroundColor: 'rgb(200,200,200)',
  backgroundColor: 'white',
  marginLeft: '2.5%',
  width: '95%',
  height: '90%',
  boxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  MozBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  WebkitBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  OBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  MsBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  borderRadius: '20px 20px 20px 20px',
  padding: '10px',

}



export default ContentFrame;


// https://stackoverflow.com/questions/35537229/how-to-update-parents-state-in-react