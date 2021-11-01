import React, { Component } from 'react';
import './App.css';
import SignIn from './containers/signin/signin';
import Register from './containers/register/register';
import Navigation from './components/navigation/navigation';
import Particles from 'react-particles-js';
import 'tachyons';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 150
      }
    },
    size: {
      "value": 5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 80,
        "size_min": 1000,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 155,
      "opacity": 0.4,
      "width": 2
    },
  }
}

// state when user logs in
const initialState = {
  route: 'signIn',
  isSignedIn: false,
  userProfile: {
      id: '',
      name: '',
      email: '',
      password: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'Home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  loadUser = (data) => {
      this.setState({userProfile: {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password
      }});
  }

  render() {
    const { isSignedIn, route} = this.state; // Destructuring
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { this.state.route === 'Home' ?
          <div>
              POSTALOT being maintained...
          </div> : (
            route === 'signin' ?
            <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> :
            <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    );
  }
}

export default App;
