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
    if (sub !== undefined) {
      this.setState({current_submission: {
        // author: sub.author.name,
        // // comments is a Listing
        // gilded: sub.gilded,
        // id: sub.id,
        // is_video: sub.is_video,
        // is_self: sub.is_self,
        // is_reddit_media_domain: sub.is_reddit_media_domain,
        // //media:
        // no_follow: sub.no_follow,
        all_awardings: 'not supported',
        allow_live_comments: sub.allow_live_comments,
        approved_at_utc: 'not supported',
        approved_by: 'not supported',
        archived: 'not supported',
        author: sub.author.name,
        author_flair_background_color: 'not supported',
        author_flair_css_class: 'not supported',
        author_flair_richtext: 'not supported',
        author_flair_template_id: 'not supported',
        author_flair_text: 'not supported',
        author_flair_text_color: 'not supported',
        author_flair_type: 'not supported',
        author_fullname: sub.author_fullname,
        author_patreon_flair: 'not supported',
        author_premium: 'not supported',
        awarders: 'not supported',
        banned_at_utc: 'not supported',
        banned_by: 'not supported',
        can_gild: 'not supported',
        can_mod_post: 'not supported',
        category: 'not supported',
        clicked: 'not supported',
        comments: sub.comments._uri,
        content_categories: 'not supported',
        contest_mode: 'not supported',
        created: sub.created,
        created_utc: sub.created_utc,
        discussion_type: 'not supported',
        distinguished: 'not supported',
        domain: sub.domain,
        downs: sub.downs,
        edited: sub.edited,
        gilded: sub.gilded,
        gildings: 'not supported',
        hidden: sub.hidden,
        hide_score: 'not supported',
        id: sub.id,
        is_crosspostable: sub.is_crosspostable,
        is_meta: sub.is_meta,
        is_original_content: sub.is_original_content,
        is_reddit_media_domain: sub.is_reddit_media_domain,
        is_robot_indexable: sub.is_robot_indexable,
        is_self: sub.is_self,
        is_video: sub.is_video,
        likes: sub.likes,
        link_flair_background_color: 'not supported',
        link_flair_css_class: 'not supported',
        link_flair_richtext: 'not supported',
        link_flair_text: 'not supported',
        link_flair_text_color: 'not supported',
        link_flair_type: 'not supported',
        locked: sub.locked,
        // needs support!!!
        //media: {reddit_video: {…}},
        //media_embed: {},
        media_only: sub.media_only,
        mod_note: 'not supported',
        mod_reason_by: 'not supported',
        mod_reason_title: 'not supported',
        mod_reports: 'not supported',
        name: sub.name,
        no_follow: 'not supported',
        num_comments: sub.num_comments,
        num_crossposts: sub.num_crossposts,
        num_reports: 'not supported',
        over_18: sub.over_18,
        parent_whitelist_status: sub.parent_whitelist_status,
        permalink: sub.permalink,
        pinned: sub.pinned,
        // POTENTIALLY USEFUL?
        // post_hint: "hosted:video",
        post_hint: sub.post_hint,
        // ALSO IMPORTANT
        // preview: {images: Array(1), enabled: false},
        pwls: sub.pwls,
        quarantine: sub.quarantine,
        removal_reason: sub.removal_reason,
        removed_by: sub.removed_by,
        removed_by_category: sub.removed_by_category,
        report_reasons: sub.report_reasons,
        saved: sub.saved,
        score: sub.score,
        // MAYBE IMPORTANT AGAIN
        // secure_media: {reddit_video: {…}},
        // secure_media_embed: {},
        selftext: sub.selftext,
        selftext_html: sub.selftext_html,
        send_replies: sub.send_replies,
        spoiler: sub.spoiler,
        stickied: sub.stickied,
        subreddit: sub.subreddit.display_name,
        subreddit_id: sub.subreddit_id,
        subreddit_name_prefixed: sub.subreddit_name_prefixed,
        subreddit_subscribers: sub.subreddit_subscribers,
        subreddit_type: sub.subreddit_type,
        suggested_sort: sub.suggested_sort,
        thumbnail: sub.thumbnail,
        thumbnail_height: sub.thumbnail_height,
        thumbnail_width: sub.thumbnail_width,
        title: sub.title,
        total_awards_received: sub.total_awards_received,
        treatment_tags: 'not supported',
        ups: sub.ups,
        url: sub.url,
        user_reports: 'not supported',
        view_count: 'not supported',
        visited: sub.visited,
        whitelist_status: sub.whitelist_status,
        wls: sub.wls
      }});
    } else {
      this.setState({current_submission: undefined});
    }
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
      // this.setState({current_submission: this.state.submissions.shift()});      // mutating this.state.submissions directly! BAD
      this.change_current_submission(this.state.submissions[0]);
      this.setState({submissions: this.state.submissions.slice(1)});
      // console.log(this.state.current_submission);
      if (this.state.current_submission === undefined) {
        this.state.reddit.getHot({limit: 100, after: this.state.after})
        .then(output => {
          this.setState({after: output._query.after});
          output.forEach(element => {
            this.state.submissions.push(element);
          });
        });
      } else {
        console.log(this.state.current_submission.url);
      }
      }, 1000); // HOWEVER, THE BUG IS GONE IF THE TIMER IS BIG ENOUGH TO COVER THE REQUEST
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    // this happens 4 times ! BAD
    

    // still doest want to pass
    // const submission = this.state.current_submission;

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
