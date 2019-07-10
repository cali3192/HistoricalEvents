import { BrowserRouter, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header.jsx';

const Landing = () => {
  return <h2>Landing</h2>;
};

const Favorites = () => {
  return <h2>Favorites</h2>;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string: '',
      array: []
    };
  }
  componentDidMount() {
    //
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/'> Home Page </Link>
                </li>
                <li>
                  <Link to='/favorites'> Favorites </Link>
                </li>
              </ul>
            </nav>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/favorites' component={Favorites} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
