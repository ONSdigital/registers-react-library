import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Pagination from '../../components/internal/Pagination';

    // Shallow Rendering
    // https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Pagination - Shallow Rendering', () => {
    it('to have 1 Pagination class', () => {
      const wrapper = shallow(
        <Pagination
          onChange={() => alert('Switch Page...')}
          page={3}
          pagesize={4}
          numPages={6}
        />,
      );
      expect(wrapper.find('.mars')).to.have.length(2);
    });
});

  // Static Rendered Markup
  // https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('Pagination - Static Rendered Markup', () => {
    it('renders the Pagination', () => {
      const wrapper = render(
        <Pagination
          onChange={() => alert('Switch Page...')}
          page={3}
          pagesize={4}
          numPages={6}
        />,
      );
      expect(wrapper.find('.mars').length).to.equal(2);
    });
});