import React from 'react';
import {shallow, configure, mount, render} from 'enzyme';
import Search from './search';
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

describe('<Search />', () => {
  let store;

  it('should render <Search /> component', () => {
    store = mockStore({});

    const wrapper = shallow(<Search items={data} store={store}/>);
    expect(wrapper.contains('Search')).toBeTrue;
  });
});
