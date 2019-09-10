import React from 'react';
import ReactDOM from 'react-dom';

import <%= nameUp %> from '.';

describe('<%= nameUp %>', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <<%= nameUp %> />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})