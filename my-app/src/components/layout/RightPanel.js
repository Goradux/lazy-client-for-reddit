import React, { Component } from 'react';

export class RightPanel extends Component {

  get_time() {
    return Math.random();
  }

  render() {

    return (
      <div>
        Right Panel {this.props.local_post_id}
        {
          this.props.comments.map(comment => (comment.author.concat(' ')))
        }
      </div>
    )
  }
}

export default RightPanel;
