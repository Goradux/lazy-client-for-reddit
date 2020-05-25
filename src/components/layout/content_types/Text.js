import React, { Component } from 'react';

export class Text extends Component {
  
  // https://stackoverflow.com/questions/23616226/insert-html-with-react-variable-statements-jsx
  // this is done only because Reddit selftext_html is trusted.

  render() {

    if (this.props.selftext_html !== null) {
      return (
        <div style={textStyle} dangerouslySetInnerHTML={{__html: this.props.selftext_html}} className='fade-animation-fast'>
        </div>
      )
    } else {
      return (
        <div style={titleStyle} className='fade-animation-fast'>
          {this.props.title}
        </div>
      )
    }

  }
}

const textStyle = {
  color: 'rgb(51,51,51)',
  fontSize: '1.5rem',
  overflow: 'auto',
  // textAlign: 'justify',
  // textJustify: 'inter-word',
  width: '100%',
  height: '100%',
  lineHeight: '150%',
};

const titleStyle = {
  color: 'rgb(51,51,51)',
  fontSize: '2rem',
  textAlign: 'center',
  // textJustify: 'inter-word',
  width: '100%',
  height: '100%',
  lineHeight: '150%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Text;
