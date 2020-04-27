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
    after: null,
    current_submission: null,
    _first: true,
    local_post_id: 0,
    reddit: null,
  }

  change_current_submission = (sub) => {
    this.setState({current_submission: {
      author: sub.author.name,
      // comments is a Listing
      gilded: sub.gilded,
      id: sub.id,
      is_video: sub.is_video,
      is_self: sub.is_self,
      is_reddit_media_domain: sub.is_reddit_media_domain,
      //media:
      no_follow: sub.no_follow,
    }});
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
      r.getHot({limit: 2})
      .then(output => {
        // console.log(output);
        this.setState({after: output._query.after});
        output.forEach(element => {
          this.state.submissions.push(element);
        });
        console.log(this.state.submissions[0]);
      });
    }

    this.interval = setInterval(() => {
      this.setState({local_post_id: this.state.local_post_id + 1});
      this.setState({current_submission: this.state.submissions.shift()});      // mutating this.state.submissions directly! BAD
      // console.log(this.state.current_submission);
      if (this.state.current_submission === undefined) {
        this.state.reddit.getHot({limit: 100, after: this.state.after})
        .then(output => {
          this.setState({after: output._query.after});
          output.forEach(element => {
            this.state.submissions.push(element);
          });
        });
      } else {                        // ordering here is weird
        // console.log(this.state.current_submission.url);
      }
      }, 5000);
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
        {/* <ContentFrame local_id={this.state.local_post_id} submission={this.state.current_submission}/> */}
        {/* https://stackoverflow.com/questions/49081549/passing-object-as-props-to-jsx */}
        <ContentFrame local_id={this.state.local_post_id}/>
        <RightPanel local_id={this.state.local_post_id}/>
      </div>
    );
  }
}

export default App;
