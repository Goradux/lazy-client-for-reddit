import React, { Component } from 'react';

export class RichVideo extends Component {

  adjust_dimensions = (x) => {
    var out2 = x.substring(0, x.lastIndexOf('width="') + 7);
    var out3 = out2.concat('100%"');
    var out4 = x.substring(x.lastIndexOf('width="') + 7);
    var out5 = out4.substring(out4.indexOf('"') + 1);
    x = out3.concat(out5);
    var out6 = x.substring(0, x.lastIndexOf('height="') + 8);
    var out7 = out6.concat('100%"');
    var out8 = x.substring(x.lastIndexOf('height="') + 8);
    var out9 = out8.substring(out8.indexOf('"') + 1);
    x = out7.concat(out9);
    return x;
  }

  render() {
    
    // const {content, height, scrolling, width} = this.props.media_embed;
    const {content} = this.props.media_embed;
    
    return (
      <div style={contentStyle} dangerouslySetInnerHTML={{__html: this.adjust_dimensions(content)}} className='fade-animation-fast'>
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

export default RichVideo;
