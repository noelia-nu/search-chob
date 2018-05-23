import './movie-item.css';

import React, { Component } from 'react';

class MovieItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let that = this;

    const getSummary = () => {
      let desc = that.props.data.description;
      if (desc && desc.length > 250) {
        return (desc.substr(0, 250) + '...');
      }
      return desc;
    }
    return (
      <div className="movie">
        <div className="movie__wrapper">
          <h3>
            <a className="movie__title" href={this.props.data.link}>{this.props.data.name}</a>
          </h3>
          <div className="movie__img">
            <img src={this.props.data.pictures.sizes[1].link} />
          </div>
          <p className="movie__desc">{getSummary()}</p>
        </div>
      </div>
    )
  }
}

export default MovieItem;
