import './search.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Search, Header } from 'semantic-ui-react';
import _ from 'lodash';

class SearchPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

  handleResultSelect = (e, { result }) => this.setState({ value: result.name });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.name);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.items, isMatch),
      });
    }, 300);
  }

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Container style={{ marginTop: '3em' }}>
        <Search
          fluid
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
          results={results}
          value={value}
          {...this.props}
          className="search__input"
          />
      </Container>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
      items: ownProps.items
  };
}

export default connect(mapStateToProps)(SearchPage);
