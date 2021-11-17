import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialNetAPP from "./App";
import ReactDOM from "react-dom";

// test('renders learn react link', () => {
//   render(<SocialNetAPP />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('render without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SocialNetAPP />, div)
  ReactDOM.unmountComponentAtNode(div)
});
