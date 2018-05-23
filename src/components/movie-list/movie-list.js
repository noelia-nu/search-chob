import './movie-list.css';
import React, { Component } from 'react';
import MovieItem from '../../components/movie-item/movie-item';
import { connect } from 'react-redux';
import Search from '../../components/search/search';

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
          <Search items={this.props.items} />

          <div className="movies__container">
            <h2>Trending!</h2>

            <div className="movies__container__list">
              {this.props.items.map(movie =>
                <MovieItem data={movie} />
              )}
            </div>
          </div>
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
