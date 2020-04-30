import React, { Component } from 'react';

export class RightPanel extends Component {

  get_time() {
    return Math.random();
  }

  render() {

    return (
      <div style={rightPanelStyle}>
        Right Panel {this.props.local_post_id}
        {
          this.props.comments.map(comment => (comment.author.concat(' ')))
        }
      </div>
    )
  }
}

const rightPanelStyle = {
  backgroundColor: 'green',
  width: '100%',
}

export default RightPanel;
