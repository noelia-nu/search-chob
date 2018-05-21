import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import * as searchActions from '../../actions/searchActions';
import Search from '../../components/search/search';
import MovieList from '../../components/movie-list/movie-list';
import _ from 'lodash';

class HomePage extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Container style={{ marginTop: '3em' }}>
          <Search />
        </Container>
        <Container style={{ marginTop: '3em' }}>
          <MovieList />
        </Container>
      </div>
    );
  }
}

export default (HomePage);
