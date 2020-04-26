import React, { Component } from 'react';

export class ContentFrame extends Component {
    
    get_time() {
        return Math.random();
    }

    render() {
        // const {url} = this.props.submission;

        return (
            <div>
                Content Frame {this.props.local_id} {this.props.submission}
            </div>
        )
    }
}

export default ContentFrame;
