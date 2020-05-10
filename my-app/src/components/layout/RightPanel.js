import React, { Component } from 'react';

export class RightPanel extends Component {

  get_time() {
    return Math.random();
  }

  render() {

    return (
      <div style={rightPanelStyle}>
        <div style={contentStyle}>
          <div id='controls' style={controlsStyle}>

          </div>
          <p style={commentsLabelStyle}>Comments</p>
          <div id='comments' style={commentsStyle}>
            {/* Right Panel {this.props.local_post_id} */}
            {
              this.props.comments.map(comment => (
                <React.Fragment key={comment.id}>
                  {/* <TableItem unit={unit} styles={this.props.styles}/> */}
                  
                  {/* This can be encapsulated into a component: */}
                  <div style={commentStyle}>
                    {/* author name */}
                    <div style={authorScoreWrapperStyle}>
                      <span style={authorStyle}>{comment.author}</span>
                      <span style={scoreStyle}>{comment.score}</span>
                    </div>
                    <hr style={lineStyle}/>
                    {/* comment body */}
                    <div>{comment.body}</div>
                    {/* Some comment text {this.props.local_post_id} */}
                  </div>
                </React.Fragment>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

const rightPanelStyle = {
  // backgroundColor: 'green',
  width: '100%',
  height: '100%',
  display: 'flex',
  padding: '5px',
  justifyContent: 'center',
  alignItems: 'center',
  // display: 'inline-block',
  // overflow: 'hidden',
}

const contentStyle = {
  border: '3px solid grey',
  width: '95%',
  height: '95%',
  borderRadius: '30px',
  padding: '15px',
  backgroundColor: 'white',
  boxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  MozBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  WebkitBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  OBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  MsBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  display: 'flex',
  flexDirection: 'column',
};

const controlsStyle = {
  width: '100%',
  height: '50px',
  border: '1px solid',
  marginBottom: '20px',
  borderRadius: '30px',
  // backgroundColor: 'rgb(255,69,0)',
};

const commentsLabelStyle = {
  textAlign: 'center',
  fontSize: '24px',
  color: 'rgb(51,51,51)',
};

const commentsStyle = {
  width: '100%',
  height: '100%',
  // border: '1px solid',
  // borderRadius: '30px',
  // padding: '20px',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
};

const commentStyle = {
  // border: '1px solid',
  borderRadius: '5px',
  maxHeight: '20%',
  overflow: 'hidden',
  padding: '5px',
  marginTop: '5px',
  // backgroundColor: 'rgb(218,224,230)',
  backgroundColor: 'rgb(238,238,238)',
  boxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.2)",
  MozBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.2)",
  WebkitBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.2)",
  OBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.2)",
  MsBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.2)",
  color: 'rgb(51,51,51)',

};

const authorScoreWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

const scoreStyle = {
  // display: 'flex',
  // justifyContent: 'center',
  // minWidth: '50px',
  paddingRight: '10px',
};

const authorStyle = {
  marginLeft: '10px',
  // backgroundColor: 'white',
  fontWeight: 'bold',
};

const lineStyle = {
  border: '0.5px solid darkgrey',
  marginLeft: '5%',
  width: '90%',
  marginTop: '2px',
  marginBottom: '2px',
};

export default RightPanel;


// add control buttons such as sort by new/hot etc
// add my info button