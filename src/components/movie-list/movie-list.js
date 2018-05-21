import React, { Component } from 'react';
import Movie from '../../components/movie-item/movie-item';
import { connect } from 'react-redux';

class MovieList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: []
    }
  }

  render() {
    if (this.props.items && this.props.items.length > 0) {
      return (
        <div>
          {this.props.items.map(movie =>
            <Movie data={movie} />
          )}
        </div>
      )
    }
    return (<div></div>)
  }
}

function mapStateToProps(state, ownProps) {
  return {
      items: state.movies.data
  };
}

export default connect(mapStateToProps)(MovieList);
