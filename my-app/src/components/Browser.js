import React, { Component } from 'react';
import snoowrap from 'snoowrap';
import ContentFrame from './layout/ContentFrame';
import RightPanel from './layout/RightPanel';

export class Browser extends Component {

  display_options = ['hot', 'top', 'new', 'rising'];
  after = 0;
  submissions = [];
  submission = null;
  submission_raw = null;
  submission_raw_prev = null;
  submissions_prev = [];
  prev_index = 0;
  clicked_return = false;
  comments = [];
  reddit_credentials = {
    userAgent: 'Lazy Reddit',
    clientId: "YeMQjOy7Vc-TTw",                           // app ID
    clientSecret: 'SkO9R2trQzwQp2mOs-VXo7K0BpE',
    refreshToken: '59264954-4ZEIHuZY9N6p-70okhuxJqSyads'
  }
  reddit = null;
  _first = true;
  code = null;
  reached_history_end = false;
  advancing_history = false;
  // upvote_DEBUG = false;
  // downvote_DEBUG = false;

  state = {
    window_width: 0,
    window_height: 0,
    _first: true,
    reddit: null,
    local_post_id: 0,
    auth_url: '/',
    upvote_pressed: false,
    downvote_pressed: false,
    paused: false,
  }

  refactor_submission = (sub) => {
    return {
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
      media: sub.media,
      media_embed: sub.media_embed,
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
      post_hint: sub.post_hint,
      // ALSO IMPORTANT
      // preview: {images: Array(1), enabled: false},
      preview: sub.preview,
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
      wls: sub.wls,
    }
  }

  refactor_comment = (comment) => {
    return {
      all_awardings: 'not supported',
      approved_at_utc: 'not supported',
      approved_by: 'not supported',
      archived: 'not supported',
      associated_award: 'not supported',
      author: comment.author.name,
      author_flair_background_color: 'not supported',
      author_flair_css_class: 'not supported',
      author_flair_richtext: 'not supported',
      author_flair_template_id: 'not supported',
      author_flair_text: 'not supported',
      author_flair_text_color: 'not supported',
      author_flair_type: 'not supported',
      author_fullname: comment.author_fullname,
      author_patreon_flair: 'not supported',
      author_premium: 'not supported',
      awarders: 'not supported',
      banned_at_utc: 'not supported',
      banned_by: 'not supported',
      body: comment.body,
      body_html: comment.body_html,
      can_gild: 'not supported',
      can_mod_post: 'not supported',
      collapsed: 'not supported',
      collapsed_because_crowd_control: 'not supported',
      collapsed_reason: 'not supported',
      controversiality: comment.controversiality,
      created: comment.created,
      created_utc: comment.created_utc,
      depth: comment.depth,
      distinguished: 'not supported',
      downs: comment.downs,
      edited: comment.edited,
      gilded: comment.gilded,
      gildings: 'not supported',
      id: comment.id,
      is_submitter: comment.is_submitter,
      likes: comment.likes,
      link_id: comment.link_id,
      locked: comment.locked,
      mod_note: 'not supported',
      mod_reason_by: 'not supported',
      mod_reason_title: 'not supported',
      mod_reports: 'not supported',
      name: comment.name,
      no_follow: 'not supported',
      num_reports: 'not supported',
      parent_id: comment.parent_id,
      permalink: comment.permalink,
      removal_reason: 'not supported',
      // replies: Listing(7) [Comment, Comment, Comment, Comment, Comment, Comment, Comment, _r: snoowrap, _cachedLookahead: null, _query: {…}, _method: "get", _transform: ƒ, …],
      replies: 'not supported',
      report_reasons: 'not supported',
      saved: 'not supported',
      score: comment.score,
      score_hidden: comment.score_hidden,
      send_replies: comment.send_replies,
      stickied: comment.stickied,
      subreddit: comment.subreddit.display_name,
      subreddit_id: comment.subreddit_id,
      subreddit_name_prefixed: comment.subreddit_name_prefixed,
      subreddit_type: comment.subreddit_type,
      total_awards_received: comment.total_awards_received,
      treatment_tags: 'not supported',
      ups: comment.ups,
      user_reports: 'not supported',
    }
  }

  log_interesting = () => {
    console.log('---------------');
    console.log(this.submission.subreddit);
    console.log(this.submission.post_hint);
    // if (this.submission.post_hint === 'link') {
    //   console.log('✅✅✅');
    // }
    console.log(this.submission.title);
    console.log(this.submission.selftext);
    console.log(this.submission.url);
    console.log(this.submission.author);
    console.log(this.submission.ups);
    // console.log(this.submission.media);
    // console.log(this.submission.media_embed);
    // console.log(this.submission.preview);
  }

  updateDimensions = () => {
    let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    let windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

    this.setState({windowWidth, windowHeight});
  }

  update_local_post_id = () => {
    if (!this.reached_history_end) {
      if (this.advancing_history) {
        return this.state.local_post_id + 1;
      } else {
        return this.prev_index > 0 ? this.state.local_post_id - 1 : this.state.local_post_id + 1;
      }
    } else {
      return this.state.local_post_id;
    }
  }

  update_submission_and_comments = () => {
    // keep only 10 posts in history
    if (this.submissions_prev.length >= 10) {
      this.submissions_prev.pop();
    }

    if (this.clicked_return) {
      this.prev_index++;
      this.submission_raw = this.submissions_prev[this.prev_index];
      this.reached_history_end = false;
      if (this.submission_raw === undefined) {
        this.prev_index--;
        this.submission_raw = this.submissions_prev[this.prev_index];
        this.reached_history_end = true;
      }
      this.submission = this.refactor_submission(this.submission_raw);
      this.clicked_return = false;
      this.advancing_history = false;
    } else {
      this.prev_index--;
      if (this.prev_index >= 0) {
        this.submission_raw = this.submissions_prev[this.prev_index];
        this.submission = this.refactor_submission(this.submission_raw);
        this.advancing_history = true;
      } else {
        this.submission_raw = this.submissions.shift();
        this.submissions_prev.unshift(this.submission_raw);
        this.submission = this.refactor_submission(this.submission_raw);
        this.advancing_history = false;
      }
      this.reached_history_end = false;
      if (this.prev_index < 0) {
        this.prev_index = 0;
      }
    }
    
    // console.log(this.submission);
    

    this.submission_raw.comments.fetchMore({amount: 5, skipReplies: true})
    .then(comments => {
      this.comments = [];
      comments.forEach(comment => {
        this.comments.push(this.refactor_comment(comment));
      });
      this.log_interesting();
      this.setState({
        local_post_id: this.update_local_post_id(),
        upvote_pressed: false,
        downvote_pressed: false,
      });
      this.clicked_return = false;
    }).catch(error => {
      // Unable to fetch comments
      console.log('Unable to fetch comments.');
      console.log(error);
      this.setState({
        local_post_id: this.update_local_post_id(),
        upvote_pressed: false,
        downvote_pressed: false,
      });
      this.clicked_return = false;
    });
  }

  main_loop = () => {
    if (this.submissions.length === 0) {
      // for debugging text content
      // this.reddit.getSubreddit('Showerthoughts').getHot({limit: 10, after: this.after})
      this.reddit.getHot({limit: 10, after: this.after})
      .then(posts => {
        this.after = posts._query.after;
        posts.forEach(post => {
          this.submissions.push(post);
        });
        this.update_submission_and_comments();        
      }).catch(error => {
        // to handle
        console.log('error acquiring posts');
        console.log(error);
      });
    } else {
      this.update_submission_and_comments();
    }
  }

  componentDidMount() {
    // this.code = new URL(window.location.href).searchParams.get('code');
    // if (this.code !== null) {
    //   snoowrap.fromAuthCode({
    //     code: this.code,
    //     userAgent: 'Lazy Reddit',
    //     clientId: this.reddit_credentials.clientId,
    //     clientSecret: this.reddit_credentials.clientSecret,
    //     redirectUri: 'http://localhost:3000/browse/'
    //   })
    //   .then(r => {
    //     this.reddit = r;

    //     this.main_loop();
    //     this.interval = setInterval(this.main_loop, 5000); // HOWEVER, THE BUG IS GONE IF THE TIMER IS BIG ENOUGH TO COVER THE REQUEST
    //   })
    // }
    
    
    // for CSS purposes 
    const r = new snoowrap(this.reddit_credentials);
    this.reddit = r;
    this.main_loop();
    this.interval = setInterval(this.main_loop, 10000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  upvote() {
    this.submission_raw.upvote()
    .catch(error => {
      if (error.message === '429') {
        console.log('Too many requests.');
      }
    });
    // this.upvote_pressed = !this.upvote_pressed;
    if (this.state.downvote_pressed) {
      this.submission.score = this.submission_raw.score + 1;
      this.setState({upvote_pressed: !this.state.upvote_pressed, downvote_pressed: !this.state.downvote_pressed});
    } else {
      if (this.state.upvote_pressed) {
        this.submission.score = this.submission_raw.score;
      } else {
        this.submission.score = this.submission_raw.score + 1;
      }
      this.setState({upvote_pressed: !this.state.upvote_pressed});
    }
  }

  downvote() {
    this.submission_raw.downvote()
    .catch(error => {
      if (error.message === '429') {
        console.log('Too many requests.');
      }
    });
    // this.downvote_pressed = !this.downvote_pressed;
    if (this.state.upvote_pressed) {
      this.submission.score = this.submission_raw.score - 1;
      this.setState({upvote_pressed: !this.state.upvote_pressed, downvote_pressed: !this.state.downvote_pressed});
    } else {
      if (this.state.downvote_pressed) {
        this.submission.score = this.submission_raw.score;
      } else {
        this.submission.score = this.submission_raw.score - 1;
      }
      this.setState({downvote_pressed: !this.state.downvote_pressed});      
    }
  }

  async play_pause() {
    if (this.state.paused) {
      // play
      //this.interval = setInterval(this.main_loop, 10000);
      console.log('played');
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      this.setState({paused: !this.state.paused});
      await sleep(3000);
      this.skip();
    } else {
      // pause
      console.log('paused');
      clearInterval(this.interval);
      this.setState({paused: !this.state.paused});
    }
  }

  return_last() {
    this.clicked_return = true;
    this.skip();
  }

  skip() {
    clearInterval(this.interval);
    this.main_loop();
    if (this.state.paused === true) {
      this.setState({paused: !this.state.paused});
    }
    this.interval = setInterval(this.main_loop, 10000);
  }

  sort_by(arg) {
    console.log('sort by placeholder');
    console.log(arg);
  }

  jump_to(arg) {
    console.log('jump to placeholder');
  }

  render() {
    return (
      <div style={{width: '100%', height: '100%', display: 'flex'}}>
          <div style={mainStyle}>
            <ContentFrame local_post_id={this.state.local_post_id} submission={this.submission} downvote={this.downvote.bind(this)} upvote={this.upvote.bind(this)} upvote_pressed={this.state.upvote_pressed} downvote_pressed={this.state.downvote_pressed} play_pause={this.play_pause.bind(this)} paused={this.state.paused} return_last={this.return_last.bind(this)} skip={this.skip.bind(this)}/>
          </div>
          <div style={offStyle}>
            <RightPanel local_post_id={this.state.local_post_id} comments={this.comments} sort_by={this.sort_by.bind(this)} jump_to={this.jump_to.bind(this)}/>
          </div>
      </div>
    )
  }
}

const mainStyle = {
  // backgroundColor: 'grey',
  width: '70%',
  height: '100%',
  // display: 'inline-block',
}

const offStyle = {
  width: '30%',
  height: '100%',
  // display: 'inline-block',
}

export default Browser;




// Known bugs:
// The app should fetch more content not after it sees that the content is empty,
// but before that instead, so there is no wait.