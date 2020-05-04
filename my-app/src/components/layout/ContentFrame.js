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
          {/* <div id='score' style={scoreStyle}>
            {submission.score}
          </div> */}
          <div id='titleWrapper' style={titleWrapperStyle}>
            <div id='title' style={titleStyle}>
              {/* Brazil's President Is Out With Another Super-Bad Coronavirus Take: Soccer Players more text */}
              {/* the length of 1 line */}
              {submission.title ? submission.title : submission.title}
            </div>
          </div>
        </div>
        
        <div id='main-wrapper' style={mainBackgroundStyle}>
          <div id='content' style={contentStyle}>
            Content Frame {this.props.local_post_id} {submission.author}
          </div>
          <hr style={lineStyle}/>
          <div id='controls' style={controlsStyle}>
            {/* downvote, score, upvote */}
            <span id='upvote' style={upvoteStyle} onClick={this.props.upvote}>
              up
            </span>
            <span id='score' style={scoreStyle}>
              {submission.score}
            </span>
            <span id='downvote' style={downvoteStyle} onClick={this.props.downvote}>
              down
            </span>
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

// const scoreStyle = {
//   height: '100%',
//   width: '7%',
//   display: 'flex',
//   padding: '10px',
//   color: 'white',
//   backgroundColor: 'rgb(51,51,51)',
//   borderRight: '2px solid rgba(255,255,255,0.73)',
//   borderRadius: '0px 0px 0px 20px',
//   alignItems: 'center',
//   justifyContent: 'center',
// };

const titleWrapperStyle = {
  // width: '93%',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgb(51,51,51)',
  padding: '10px',
  paddingLeft: '20px',
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  borderRadius: '0px 0px 20px 0px',
};

const titleStyle = {
  color: 'white',
  fontSize: '30px',
  justifyContent: 'left',
  // these three are for cutting the long titles with '...'
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  // display: '-webkit-box',
  // webkitLineClamp: 2,
  // webkitBoxOrient: 'vertical',
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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const contentStyle = {
  width: '80%',
  border: '1px solid',
  height: '80%',
};

const lineStyle = {
  marginTop: '1.5%',
  // display: 'block',
  // overflow: 'hidden',
  // borderStyle: 'inset',
  // borderWidth: '1px',
  border: '0.5px solid darkgrey',
  width: '75%',
  // height: '1%',
};

const controlsStyle = {
  width: '80%',
  border: '1px solid',
  height: '10%',
  marginTop: '1.5%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const upvoteStyle = {
  border: '1px solid',
  width: '10%',
  height: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const scoreStyle = {
  width: '10%',
  minWidth: '70px',
  height: '80%',
  border: '1px solid',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  fontSize: '20px',
  fontWeight: '700',
  color: 'rgb(51,51,51)',
};

const downvoteStyle = {
  width: '10%',
  height: '80%',
  border: '1px solid',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default ContentFrame;


// https://stackoverflow.com/questions/35537229/how-to-update-parents-state-in-react