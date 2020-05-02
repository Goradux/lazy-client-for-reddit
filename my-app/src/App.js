import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import snoowrap from 'snoowrap';
import Browser from './components/Browser';

// https://reacttraining.com/react-router/web/guides/quick-start
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';

class App extends Component {

  reddit_credentials = {
    userAgent: 'Lazy Reddit',
    clientId: "YeMQjOy7Vc-TTw",                           // app ID
    clientSecret: 'SkO9R2trQzwQp2mOs-VXo7K0BpE',
    refreshToken: '59264954-4ZEIHuZY9N6p-70okhuxJqSyads'
  }
  code = null;

  state = {
    window_width: 0,
    window_height: 0,
    auth_url: '/',
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
    const state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    if (this.code === null) {
      const auth_url = snoowrap.getAuthUrl({
        clientId: "YeMQjOy7Vc-TTw",                     // client ID
        clientSecret: 'SkO9R2trQzwQp2mOs-VXo7K0BpE',        // client secret
        scope: ['identity', 'mysubreddits', 'read', 'report', 'submit', 'vote', 'subscribe'],
        redirectUri: 'http://localhost:3000/browse/',
        permanent: true,
        state: state,
      });
      this.setState({auth_url: auth_url});
    }
      
  }

  componentWillUnmount() {
    // https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    let window_width = typeof window !== 'undefined' ? window.innerWidth : 0;
    let window_height = typeof window !== 'undefined' ? window.innerHeight : 0;

    this.setState({window_width, window_height});
  }

  commonStyle = () => {
    return {
      backgroundColor: 'rgb(238,238,238)',
      width:  this.state.window_width.toString().concat('px'),
      height:  this.state.window_height.toString().concat('px'),
      // position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }

  render() {

    // this happens 2 times ! questionable?
    // console.log(this.state.local_post_id);

    return (
      // <div id='main' style={this.commonStyle()}>
        <Router>
          {/* <div className="App"> */}
            {/* <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header> */}



          {/* </div> */}
          <Switch>
            <Route path='/browse'>
              <div id='browse' style={this.commonStyle()}>
                <Browser/>
              </div>
            </Route>
            <Route path='/'>
              {/* <div className="App"> */}
              <div id='custom-root' style={this.commonStyle()}>
                <div id='login-box' style={loginBox}>
                  {/* <div style={topBar}>
                    <div style={headerStyle}>Lazy Client for Reddit</div>
                  </div> */}
                  <span id='upper-header' style={upperHeaderStyle}>Lazy Client</span>
                  {/* <span>Lazy Client</span> */}
                  <span id='lower-header' style={lowerHeaderStyle}>for Reddit</span>
                  <span id='text' style={textStyle}>Too lazy to scroll through your posts? Say no more!</span>
                  <div id='button-box' style={buttonBox}>
                    <a
                        className="login-button"
                        href={this.state.auth_url}
                        target="_self"
                        // rel="noopener noreferrer"
                      >
                        Login via Reddit
                    </a>
                  </div>
                </div>
              </div>
            </Route>
          </Switch>
        </Router>
      // </div>
    );
  }
}

const loginBox = {
  width: '20%',
  minWidth: '300px',
  backgroundColor: 'white',
  height: '30%',
  minHeight: '250px',
  borderStyle: 'solid',
  border: '1px white',
  borderRadius: '10px',
  color: 'rgb(51,51,51)',
  // "width":"390px",
  // "overflow":"hidden",
  padding: "20px 55px 33px 55px",
  boxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  MozBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  WebkitBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  OBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  MsBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
};

const buttonBox = {
  width: '100%',
  // height: '80%',
  height: '45%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // color: 'black',
};

const upperHeaderStyle = {
  display: 'block',
  fontSize: '30px',
  fontWeight: 'bold',
  textAlign: 'center',
  paddingBottom: '15px',
};

const lowerHeaderStyle = {
  display: 'block',
  fontSize: '20px',
  fontWeight: 'bold',
  textAlign: 'center',
  paddingBottom: '10px',
};

const textStyle = {
  textAlign: 'center',
}

export default App;


// https://staxmanade.com/CssToReact/
// amazing tool


// maybe add a bar on top of the page with my info?
