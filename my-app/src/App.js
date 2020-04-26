import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import snoowrap from 'snoowrap';
import ContentFrame from './components/layout/ContentFrame';
import RightPanel from './components/layout/RightPanel';

class App extends Component {

  display_options = ['hot', 'top', 'new', 'rising'];

  // there is a problem here.
  // this shit should automatically ask for a login, without hardcoded stuff
  state = {
    reddit_credentials: {
      userAgent: 'Lazy Reddit',
      clientId: "YeMQjOy7Vc-TTw",                           // app ID
      clientSecret: 'SkO9R2trQzwQp2mOs-VXo7K0BpE',
      refreshToken: '59264954-4ZEIHuZY9N6p-70okhuxJqSyads'
    },
    window_width: 0,
    window_height: 0,
    submissions: [],
    current_submission: null,
    _first: true,
    local_post_id: 0,
    reddit: null,
  }

  updateDimensions = () => {
    let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    let windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

    this.setState({windowWidth, windowHeight});
  }

  componentDidMount() {
    if (this.state._first) {
      this.setState({_first: false});
      const r = new snoowrap(this.state.reddit_credentials);
      this.setState({reddit: r});
      // r.getSubscriptions({limit: 10})
      // .then((output) => {
      //   output.forEach(element => {
      //     this.state.subs.push(element.display_name);
      //   });
      // });
      r.getHot({limit: 4, after: 0, count: 0})
      .then(output => {
        output.forEach(element => {
          this.state.submissions.push(element);
        });
        console.log(this.state.submissions);
      });
    }

    this.interval = setInterval(() => {
      this.setState({local_post_id: this.state.local_post_id + 1});
      this.setState({current_submission: this.state.submissions.shift()});                  // mutating this.state.submissions directly! BAD
      // console.log(this.state.current_submission);
      if (this.state.current_submission === undefined) {
        console.log('another');
        this.state.reddit.getHot({limit: 4, after: 4, count: 4})
        .then(output => {
          output.forEach(element => {
            this.state.submissions.push(element);
          });
        });
      }
      if (this.state.current_submission !== undefined) {
        console.log(this.state.current_submission.url);
      }
      }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
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
        <ContentFrame local_id={this.state.local_post_id} submission={this.state.current_sumbission}/>
        <RightPanel local_id={this.state.local_post_id} submission={this.state.current_submission}/>
      </div>
    );
  }
}

export default App;
