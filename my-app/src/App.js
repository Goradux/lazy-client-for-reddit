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


  render() {

    // this happens 2 times ! questionable?
    // console.log(this.state.local_post_id);

    return (
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
            <div className="App">
              <a
                  className="App-link"
                  href={this.state.auth_url}
                  target="_self"
                  rel="noopener noreferrer"
                >
                  Get token from Reddit.com
              </a>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;