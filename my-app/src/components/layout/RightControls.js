import React, { Component } from 'react';

export class RightControls extends Component {
  render() {
    return (
      <div style={componentStyle}>
          Placeholder
          <span>
            {/* local id */}
            ID: {this.props.local_post_id}
          </span>

          <span>
            {/* sort by */}
          </span>

          <span>
            {/* my link */}
          </span>

      </div>
    )
  }
}

const componentStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

export default RightControls;
