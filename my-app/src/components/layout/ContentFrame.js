import React, { Component } from 'react';

export class ContentFrame extends Component {


    
    state = {
        a: 0,
    }

    get_time() {
        return Math.random();
    }

    render() {
        // const {url} = this.props.submission;
        let x = 'no';
        if (this.props.submission !== null) {
            x = this.props.submission.author;
        }
        // console.log('in content frame:');
        // console.log(this.props.submission);
        
        // console.log(this.state.a);
        // this.setState({a: this.state.a + 1});

        return (
            <div>
                Content Frame {this.props.local_post_id} {x}
            </div>
        )
    }
}

export default ContentFrame;
