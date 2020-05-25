import React, { Component } from 'react';

export class NavBar extends Component {

  state = {
    open: false,
  };

  change_open = () => {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <nav style={navbarStyle}>
        <a href="#FAQ" style={aStyle} className='faq-button' onClick={this.change_open}>FAQ</a>

        {this.state.open && (
          <div style={dropdownStyle}>
            <p style={{paddingTop:'20px', fontWeight: 'bold'}}>What is this?</p>
            <p>This is Lazy Client for Reddit! Ever been busy doing something, but still wanting to scroll Reddit? This little app will do it for you. It switches a post every 10 seconds, but it can also remember up to 10 last posts, so if you want to go back, you always can. You can also pause/skip, if you don't like what you are seeing. And of course the NSFW toggle. I actually got the idea for this app at work, when it was a slow day, but I still had to do some stuff. Really wished I had something like this to entertain me.</p>

            <p style={{paddingTop:'20px', fontWeight: 'bold'}}>How does it work?</p>
            <p>You can either authenticate via your personal Reddit account to be able to view your subreddits, or you could choose the userless option, if 'r/all' is what you like.</p>

            <p style={{paddingTop:'20px', fontWeight: 'bold'}}>What about security?</p>
            <p> <span role='img' aria-label="eyes">👀</span> Next question.</p>

            <p style={{paddingTop:'20px', fontWeight: 'bold'}} >Why did you do it?</p>
            <p>Wanted to learn some React (ended up using components in 2020 lol).</p>

            <p style={{paddingTop:'20px', fontWeight: 'bold'}} >Bugs?</p>
            <p>Of course! Use the project <a href="https://github.com/Goradux/lazy-client-for-reddit">repository</a> to report them. This app does not work on vertical screens. Tested on 1080p, but scaling should work just fine for the richer people out there. If comments are too long, they get chopped off as well. Not really a designer ¯\_(ツ)_/¯ It is raw, but it does the job.</p>

            <p style={{paddingTop:'20px', fontWeight: 'bold'}}>Why don't you give yourself a plug here?</p>
            <p>Amazing idea! <a href="https://www.github.com/Goradux">My GitHub</a>, <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">My YouTube</a></p>

            <p style={{paddingTop:'20px'}}>PS. But seriously about security, this abomination is using OAuth2 authentication per official requirements, as well as <a href="https://github.com/not-an-aardvark/snoowrap">snoowrap.js</a> as a Reddit API wrapper. The tokens that the app receives from Reddit can only be used once, so actually be aware to not F5 the page, or you will have to skip the posts to get back to where you were. And I can't be bothered collecting any data about you.</p>

          </div>
        )}
      </nav>
    )
  }
}

const navbarStyle = {
  height: '5%',
  width: '100%',
  backgroundColor: 'rgb(51,51,51)',
  paddingRight: '1rem',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
};

const aStyle = {
  height: '100%',
  minWidth: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  color: 'white',
};

const dropdownStyle = {
  position: 'absolute',
  top: '4%',
  right: '1%',
  // height: '80%',
  maxWidth: '50%',
  widhth: '50%',
  backgroundColor: 'white',
  color: 'rgb(51,51,51)',
  fontSize: '1.2rem',
  overflow: 'auto',
  // textAlign: 'justify',
  // textJustify: 'inter-word',
  lineHeight: '150%',
  zIndex: '100',
  padding: '15px',
  borderRadius: '15px',
  border: 'solid black 2px',
  boxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  MozBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  WebkitBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  OBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  MsBoxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.1)",
  // transform: 'translateX(-45%)',
};

export default NavBar;
