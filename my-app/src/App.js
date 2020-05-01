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
              <Browser/>
            </Route>
            <Route path='/'>
              {/* <div className="App"> */}
              <div style={this.commonStyle()}>
                <div style={loginBox}>
                  <div style={topBar}>
                    <div style={headerStyle}>Lazy Client for Reddit</div>
                  </div>
                  <div style={buttonBox}>
                    <a
                        className="App-link"
                        href={this.state.auth_url}
                        target="_self"
                        // rel="noopener noreferrer"
                      >
                        Login
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
  borderRadius: '5px',
};

const topBar = {
  backgroundColor: 'rgb(255,69,0)',
  width: '100%',
  height: '20%',
  // borderBottomStyle: '',
  display: 'block',
  margin: '0',
  borderBottomStyle: 'solid',
  borderBottom: '1px white',
  borderRadius: '5px 5px 0px 0px',
};

const buttonBox = {
  width: '100%',
  height: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // color: 'black',
};

const headerStyle = {
  textAlign: 'center',
  // paddingTop: '10%',
  lineHeight: '50px',
  fontSize: '25px',
  fontWeight: 'bold',
}

export default App;