import React from 'react';
import {shallow, configure, mount} from 'enzyme';
import MovieItem from './movie-item';
import faker from 'faker';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";

configure({ adapter: new Adapter() });
const mockStore = configureStore();

const data = {
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
};

describe('<MovieItem />', () => {
  const initialState = {data: data};
  let store;

  it('should assign props data', () => {
    store = mockStore(initialState);

    const wrapper = mount(<MovieItem data={data} />);
    expect(wrapper.props().data).toEqual(data);
  });

  it('should assign name', () => {
    store = mockStore(initialState);

    const wrapper = mount(<MovieItem data={data} />);
    expect(wrapper.find('.movie__title').text()).toEqual(data.name);
  });

  it('should assign image', () => {
    store = mockStore(initialState);

    const wrapper = shallow(<MovieItem data={data} />);
    expect(wrapper.find('.movie__img').html()).toEqual('<div class="movie__img"><img src="' + data.pictures.sizes[1].link + '"/></div>');
  });
});
