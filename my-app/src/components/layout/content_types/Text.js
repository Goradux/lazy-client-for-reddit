import React, { Component } from 'react';

export class Text extends Component {
  
  // https://stackoverflow.com/questions/23616226/insert-html-with-react-variable-statements-jsx
  // this is done only because Reddit selftext_html is trusted.

  render() {
    return (
      <div style={textStyle} dangerouslySetInnerHTML={{__html: this.props.selftext_html}}>
      </div>
    )
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

export default Text;
