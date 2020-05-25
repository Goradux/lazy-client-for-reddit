import React, { Component } from 'react';

// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import github_mark from '../../img/GitHub-Mark-120px-plus.png';

export class RightControls extends Component {

  state = {
    sort: 'hot',
    jump_id: 1,
    nsfw: 'NSFW off',
  };

  change_sort = (event) => {
    this.setState({sort: event.target.value});
    // send it upstream
    this.props.sort_by(event.target.value);
  }

  change_jump_id = (event) => {
    this.setState({jump_id: event.target.value});
  }

  entered_number = (event) => {
    try {
      var number = parseInt(this.state.jump_id);
      if (number > 0) {
        this.props.jump_to(number);
      } else {
        throw Error;
      }
    } catch (error) {
      alert('You have entered a bad number. Try an integer greater than 0!');
    }
  }

  nsfwStyle = () => {
    return {
      fontWeight: 'bold',
      color: this.state.nsfw === 'NSFW on' ? 'red' : 'black',
    }
  }

  change_nsfw = () => {
    this.setState({nsfw: this.state.nsfw === 'NSFW on' ? 'NSWF off' : 'NSFW on'});
    this.props.change_nsfw();
  }

  render() {
    return (
      <div style={componentStyle}>

          <span>
            {/* https://reactjs.org/docs/forms.html */}
            <form>
              <select value={this.state.value} onChange={this.change_sort} style={selectStyle}>
                <option value="hot">Hot</option>
                <option value="best">Best</option>
                <option value="new">New</option>
                <option value="top">Top</option>
                <option value="rising">Rising</option>
              </select>
            </form>
          </span>

          <hr style={vertLineStyle}/>

          <span>
            ID: 
            <p style={{fontWeight: 'bold', display:'inline-block', paddingLeft: '5px'}}>{this.props.local_post_id}</p>
          </span>

          <hr style={vertLineStyle}/>

          <span>
            <p style={this.nsfwStyle()} onClick={this.change_nsfw} className='hoverable'>{this.state.nsfw}</p>
          </span>

          {/* <hr style={vertLineStyle}/>

          <span style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <span>
              Jump to ID:
            </span>
            
            <span>
              <form onSubmit={this.entered_number}>
                <input type="text" value={this.state.jump_id} onChange={this.change_jump_id} style={inputStyle}></input>
                <input type="submit" style={goStyle} value="Go"/>
              </form>
            </span>
          </span> */}

          <hr style={vertLineStyle}/>

          <span style={{height: '70%'}}>
            {/* my link */}
            <a href="https://www.github.com/Goradux" target="_blank" rel="noopener noreferrer" title='Check my GitHub :)'>
              <img src={github_mark} alt="My GitHub" style={githubStyle}/>
            </a>
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
  fontSize: '0.8vw',
};

const selectStyle = {
  marginLeft: '10px',
  fontSize: '0.8vw',
  borderRadius: '5px',
  paddingLeft: '5px',
  fontWeight: 'bold',
  boxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.2)",
  MozBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.2)",
  WebkitBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.2)",
  OBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.2)",
  MsBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.2)",
};

// const inputStyle = {
//   width: '50px',
//   marginLeft: '10px',
//   fontSize: '0.8vw',
//   paddingLeft: '5px',
//   fontWeight: 'bold',
// };

// const goStyle = {
//   marginLeft: '5px',
//   fontSize: '0.8vw',
// };

const vertLineStyle = {
  marginLeft: '1px',
  marginRight: '1px',
  border: '0.5px solid darkgrey',
  height: '55%',
};

// const nsfwStyle = {
//   fontWeight: 'bold',
// };

const githubStyle = {
  objectFit: 'contain',
  width: '100%',
  height: '100%',
};

export default RightControls;
