import React, { Component } from 'react';
import arrow_up_grey from '../../img/arrow_up_grey.svg';
import arrow_up_orange from '../../img/arrow_up_orange.svg';
import arrow_down_grey from '../../img/arrow_down_grey.svg';
import arrow_down_blue from '../../img/arrow_down_blue.svg';
import Text from './content_types/Text';
import RichVideo from './content_types/RichVideo';
import HostedVideo from './content_types/HostedVideo';
import ContentLink from './content_types/ContentLink';

export class ContentFrame extends Component {

  content_type = () => {
    if (this.props.submission !== null) {
      switch (this.props.submission.post_hint) {
      // switch ('rich:video') {
        // image
        case 'image':
          return (
            <span style={{width: '100%', height: '100%'}}>
              <React.Fragment key={Math.floor(Math.random() * 100)}>
                <img style={contentImageStyle} src={this.props.submission.url} alt='' className='fade-animation-fast'/>
              </React.Fragment>
            </span>
          )
        // text (or empty string)
        case undefined:
          return (
            <span style={{width: '100%', height: '100%'}}>
              <React.Fragment key={Math.floor(Math.random() * 100)}>
                <Text selftext_html={this.props.submission.selftext_html}/>
              </React.Fragment>
            </span>
          )
        // hosted:video
        case 'hosted:video':
          return (
            <span style={{width: '100%', height: '100%'}}>
              <React.Fragment key={Math.floor(Math.random() * 100)}>
                <HostedVideo reddit_video={this.props.submission.media.reddit_video}/>
              </React.Fragment>
            </span>
          )
        // rich:video
        case 'rich:video':
          return (
            <span style={{width: '100%', height: '100%'}}>
              <React.Fragment key={Math.floor(Math.random() * 100)}>
                <RichVideo media_embed={this.props.submission.media_embed}/>
              </React.Fragment>
            </span>
          )
        // link
        case 'link':
          return (
            <span style={{width: '100%', height: '100%'}}>
              <React.Fragment key={Math.floor(Math.random() * 100)}>
                <ContentLink preview={this.props.submission.preview} url={this.props.submission.url}/>
              </React.Fragment>
            </span>
          )
        default:
          return (
            <span> Unsupported content type :( </span>
          )
      }
    }
    else {
      return (
        <div></div>
      )
    }    
  }

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
          <div id='titleWrapper' style={titleWrapperStyle}>
            <React.Fragment key={Math.floor(Math.random() * 100)}>
              <div id='title' style={titleStyle} className='fade-animation-fast'>
                {submission.title}
              </div>
            </React.Fragment>
          </div>
        </div>
        
        <div id='main-wrapper' style={mainBackgroundStyle}>
          <div id='content' style={contentStyle}>
            {/* Content Frame {this.props.local_post_id} {submission.author} */}
            {this.content_type()}
          </div>

          <hr style={lineStyle}/>
          <div id='controls' style={controlsStyle}>
            <span id='upvote' style={upvoteStyle} onClick={this.props.upvote} className='upvote'>
              {/* up */}
              <img src={this.props.upvote_pressed ? arrow_up_orange : arrow_up_grey} alt='upvote' style={svgStyle}/>
            </span>
            <hr style={vertLineStyle}/>
            <span id='score' style={scoreStyle}>
              {submission.score}
            </span>
            <hr style={vertLineStyle}/>
            <span id='downvote' style={downvoteStyle} onClick={this.props.downvote} className='downvote'>
              {/* down */}
              <img src={this.props.downvote_pressed ? arrow_down_blue : arrow_down_grey} alt='upvote' style={svgStyle}/>
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
  borderRadius: '0px 0px 20px 20px',
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
  // border: '1px solid grey',
};

const contentStyle = {
  width: '80%',
  // border: '1px solid',
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
  // border: '1px solid',
  height: '10%',
  marginTop: '1.5%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const upvoteStyle = {
  // border: '1px solid',
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
  // border: '1px solid',
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
  // border: '1px solid',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const vertLineStyle = {
  marginLeft: '1px',
  marginRight: '1px',
  border: '0.5px solid darkgrey',
  height: '55%',
};

const svgStyle = {
  height: '50%',
};

const contentImageStyle = {
  // border: '0.5px solid darkgrey',
  // boxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  // MozBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  // WebkitBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  // OBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  // MsBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  objectFit: 'scale-down',
  width: '100%',
  height: '100%',
};


export default ContentFrame;


// https://stackoverflow.com/questions/35537229/how-to-update-parents-state-in-react

// svg editor
// https://editor.method.ac/

// add pause play button
// mb even add a timer?

// and of course add NSFW toggle lmao