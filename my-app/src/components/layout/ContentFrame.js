import React, { Component } from 'react';

export class ContentFrame extends Component {

    render() {
        // const {url} = this.props.submission;
        if (this.props.submission !== null) {
            var x = this.props.submission.author;
        }

        return (
            <div>
                Content Frame {this.props.local_post_id} {x}
            </div>
        )
    }
}

export default ContentFrame;
