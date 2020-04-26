import React, { Component } from 'react';

export class RightPanel extends Component {

    get_time() {
        return Math.random();
    }

    render() {
        return (
            <div>
                Right Panel {this.props.local_id}
            </div>
        )
    }
}

export default RightPanel;
