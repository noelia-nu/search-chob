import 'normalize.css/normalize.css';
import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './app.css';
import Search from './components/search/search';
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <header>
          <Grid centered columns={1} padded stackable>
            <Grid.Column color='teal' textAlign='left'>
              <Container>
                <img src={logo} className="logo" alt="Search Cho" />
                <h1 className="app__title">Siobhan - Find your favorite videos</h1>
              </Container>
             </Grid.Column>
           </Grid>
        </header>
        <div className="app-container">
          <Router>
            <div>
              <Route path='/' component={Search} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
