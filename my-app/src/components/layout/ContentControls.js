import React, { Component } from 'react';

import arrow_up_grey from '../../img/arrow_up_grey.svg';
import arrow_up_orange from '../../img/arrow_up_orange.svg';
import arrow_down_grey from '../../img/arrow_down_grey.svg';
import arrow_down_blue from '../../img/arrow_down_blue.svg';
import svg_play from '../../img/play.svg';
import svg_pause from '../../img/pause.svg';

export class ContentControls extends Component {
  
  
  render() {
    return (
      <div style={contentControlsStyle}>
        <span id='upvote' style={upvoteStyle} onClick={this.props.upvote} className='upvote'>
          <img src={this.props.upvote_pressed ? arrow_up_orange : arrow_up_grey} alt='upvote' style={svgStyle}/>
        </span>
        <hr style={vertLineStyle}/>
        <React.Fragment key={Math.floor(Math.random() * 100)}>
          <span id='score' style={scoreStyle} className='fade-animation-fast'>
            {this.props.submission.score}
          </span>
        </React.Fragment>
        <hr style={vertLineStyle}/>
        <span id='downvote' style={downvoteStyle} onClick={this.props.downvote} className='downvote'>
          <img src={this.props.downvote_pressed ? arrow_down_blue : arrow_down_grey} alt='upvote' style={svgStyle}/>
        </span>
        <hr style={vertLineStyle}/>
        <span id='play_pause' style={playPauseStyle} onClick={this.props.play_pause} className='play-pause'>
          <img src={this.props.paused ? svg_pause : svg_play} alt='pause/play' style={svgStyle}/>
        </span>
      </div>
    )
  }
}

const contentControlsStyle = {
  width: '100%',
  height: '100%',
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

const svgStyle = {
  height: '50%',
};

const vertLineStyle = {
  marginLeft: '1px',
  marginRight: '1px',
  border: '0.5px solid darkgrey',
  height: '55%',
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

const playPauseStyle = {
  width: '10%',
  height: '80%',
  // border: '1px solid',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default ContentControls;
