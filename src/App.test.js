/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('rendering', () => {
  let firstQuestionLink;

  beforeEach(() => {
    render(<App />);
    firstQuestionLink = screen.getByTestId(/Question A/i);
  });

  it('renders first link', () => {
    expect(firstQuestionLink).toBeTruthy();
  });

  it('renders 2nd screen', () => {
    fireEvent.click(firstQuestionLink);
    const secondQuestionLink = screen.getByTestId(/Question E/i);
    expect(secondQuestionLink).toBeTruthy();
  });

  it('renders answer screen', () => {
    fireEvent.click(firstQuestionLink);
    const secondQuestionLink = screen.getByTestId(/Question E/i);
    fireEvent.click(secondQuestionLink);
    const answerElement = screen.getByText(/Peter Tosh/i);
    expect(answerElement).toBeTruthy();
  });

  it('resets if button is pressed', () => {
    fireEvent.click(firstQuestionLink);
    const secondQuestionLink = screen.getByTestId(/Question E/i);
    fireEvent.click(screen.getByText(/Reset/i));
    expect(firstQuestionLink).toBeTruthy();
  });
});
