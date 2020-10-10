import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import About from './About';

afterEach(cleanup);

test('renders learn react link', () => {
//   const { getByText } = 
  render(<About />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About />, div);
})