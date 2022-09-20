/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('rendering', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders learn react link', () => {
    const linkElement = screen.getByText(/Reggae/i);
    expect(linkElement).toBeTruthy();
  });
});
