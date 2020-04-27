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
        
        // console.log(this.state.a);
        // this.setState({a: this.state.a + 1});

        return (
            <div>
                Content Frame {this.props.local_id} {this.props.submission}
            </div>
        )
    }
}

export default ContentFrame;
