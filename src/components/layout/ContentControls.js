import React, { Component } from 'react';

import arrow_up_grey from '../../img/arrow_up_grey.svg';
import arrow_up_orange from '../../img/arrow_up_orange.svg';
import arrow_down_grey from '../../img/arrow_down_grey.svg';
import arrow_down_blue from '../../img/arrow_down_blue.svg';
import svg_play from '../../img/play.svg';
import svg_pause from '../../img/pause.svg';
import svg_skip from '../../img/skip.svg';
import svg_skip_batch from '../../img/skip_batch.svg';
import svg_return from '../../img/return.svg';
import svg_source from  '../../img/source.svg';

export class ContentControls extends Component {
  
  get_batch_size = () => {
    return `Skip ${this.props.batch} posts`;
  }
  
  check_userless = () => {
    if (this.props.userless) {
      return (
        <>
          <React.Fragment key={this.props.submission.id}>
            <span id='score' style={scoreStyle} className='fade-animation-fast'>
              {this.props.submission.score}
            </span>
          </React.Fragment>
        </>
      )
    } else {
      return (
        <>
          <span id='upvote' style={upvoteStyle} onClick={this.props.upvote} className='upvote'>
            <a href="#a" title='Upvote' style={aStyle}>
              <img src={this.props.upvote_pressed ? arrow_up_orange : arrow_up_grey} alt='upvote' style={svgStyle}/>
            </a>
          </span>

          <hr style={vertLineStyle}/>
          <React.Fragment key={this.props.submission.id}>
            <span id='score' style={scoreStyle} className='fade-animation-fast'>
              {this.props.submission.score}
            </span>
          </React.Fragment>

          <hr style={vertLineStyle}/>
          <span id='downvote' style={downvoteStyle} onClick={this.props.downvote} className='downvote'>
            <a href="#a" title='Downvote' style={aStyle}>
              <img src={this.props.downvote_pressed ? arrow_down_blue : arrow_down_grey} alt='upvote' style={svgStyle}/>
            </a>
          </span>
        </>
      )
    }
  }

  render() {
    return (
      <div style={contentControlsStyle}>

        {this.check_userless()}

        <hr style={vertLineStyle}/>
        <span id='play_pause' style={playPauseStyle} onClick={this.props.play_pause} className='play-pause'>
          <a href="#a" title='Play/pause' style={aStyle}>
            <img src={this.props.paused ? svg_play : svg_pause} alt='pause/play' style={svgStyle}/>
          </a>
        </span>

        <hr style={vertLineStyle}/>
        <span id='return' style={returnStyle} onClick={this.props.return_last} className='return'>
          <a href="#a" title='Return to last' style={aStyle}>
            <img src={svg_return} alt='return' style={svgStyle}/>
          </a>
        </span>

        <hr style={vertLineStyle}/>
        <span id='skip' style={skipStyle} onClick={this.props.skip} className='skip'>
          <a href="#a" title='Skip this post' style={aStyle}>
            <img src={svg_skip} alt='skip' style={svgStyle}/>
          </a>
        </span>

        <hr style={vertLineStyle}/>
        <span id='skip100' style={skipStyle} onClick={this.props.skip_batch} className='skip'>
          <a href="#a" title={this.get_batch_size()} style={aStyle}>
            <img src={svg_skip_batch} alt={this.get_batch_size()} style={svgStyle}/>
          </a>
        </span>

        <hr style={vertLineStyle}/>
        <span id='source' style={sourceStyle} className='source'>
          <a href={'https://www.reddit.com'.concat(this.props.submission.permalink)} target="_blank" rel="noopener noreferrer" title='Go to this post' style={aStyle}>
            <img src={svg_source} alt='source' style={svgStyle}/>
          </a>
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
  // minWidth: '70px',
  minWidth: '4vw',
  height: '80%',
  // border: '1px solid',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  // fontSize: '20px',
  fontSize: '1.1vw',
  fontWeight: '700',
  color: 'rgb(51,51,51)',
};

const downvoteStyle = {
  width: '10%',
  height: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const playPauseStyle = {
  width: '10%',
  height: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const returnStyle = {
  width: '10%',
  height: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const skipStyle = {
  width: '10%',
  height: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const sourceStyle = {
  width: '10%',
  height: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const aStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default ContentControls;
