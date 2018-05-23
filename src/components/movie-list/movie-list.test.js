import React from 'react';
import {shallow, configure, mount, render} from 'enzyme';
import MovieList, {ConnectedMovieList} from './movie-list';
import faker from 'faker';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import _ from 'lodash';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });
const mockStore = configureStore();

const data = [ _.times(5, () => ({
  name: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  pictures: {
    sizes: [
      {
        link: faker.internet.avatar()
      },
      {
        link: faker.internet.avatar()
      }
    ]
  }
}))];

describe('<MovieList />', () => {
  const initialState = {movies: {data: data}};
  let store;

  it('should render <Search /> components', () => {
    store = mockStore(initialState);

    const wrapper = shallow(<MovieList store={store}/>, {initialState});
    wrapper.setProps({ items: data });
    expect(wrapper.contains('Connect(SearchPage)')).toBeTrue;
  });

  /*it('should render five <Movie /> components', () => {
    store = mockStore(initialState);

    const wrapper = shallow(<MovieList store={store}/>, {initialState});
    wrapper.setProps({ items: data });
    expect(wrapper.find('MovieItem').dive().length).toHaveLength(5);
  });*/
});
