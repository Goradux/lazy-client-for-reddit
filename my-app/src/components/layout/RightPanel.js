import React, { Component } from 'react';

export class RightPanel extends Component {

  get_time() {
    return Math.random();
  }

  render() {

    return (
      <div style={rightPanelStyle}>
        <div style={contentStyle}>
        Right Panel {this.props.local_post_id}
        {
          this.props.comments.map(comment => (comment.author.concat(' ')))
        }
        </div>
      </div>
    )
  }
}

const rightPanelStyle = {
  backgroundColor: 'green',
  width: '100%',
  height: '100%',
  display: 'block',
  padding: '5px',
  // display: 'inline-block',
  // overflow: 'hidden',
}

const contentStyle = {
  width: '100%',
  height: '100%',
};

export default RightPanel;
