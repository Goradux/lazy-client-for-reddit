import React, { Component } from 'react';

export class RightPanel extends Component {

    get_time() {
        return Math.random();
    }

    render() {
        // let x = 'no';
        // if (this.props.comments !== undefined) {
        //     x = this.props.comments[0].author;
        // }
        // console.log('in right panel:');
        // console.log(this.props.comments);

        return (
            <div>
                Right Panel {this.props.local_id}
            </div>
        )
    }
}

export default RightPanel;
