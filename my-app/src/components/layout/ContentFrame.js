import React, { Component } from 'react';

export class ContentFrame extends Component {
    
    get_time() {
        return Math.random();
    }

    render() {
        return (
            <div>
                Content Frame {this.props.local_id}
            </div>
        )
    }
}

export default ContentFrame;
