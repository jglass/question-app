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

  it('renders genre question', () => {
    expect(firstQuestionLink).toBeTruthy();
  });

  // it('renders text questions', () => {
  //   fireEvent.click(firstQuestionLink);
  //   const secondQuestionLink = screen.getByTestId(/1A/i);
  //   expect(secondQuestionLink).toBeTruthy();
  //   fireEvent.click(secondQuestionLink);
  //   const thirdQuestionLink = screen.getByTestId(/2A/i);
  //   expect(thirdQuestionLink).toBeTruthy();
  // });
  //
  // it('renders answer screen', () => {
  //   fireEvent.click(firstQuestionLink);
  //   const secondQuestionLink = screen.getByTestId(/1A/i);
  //   fireEvent.click(secondQuestionLink);
  //   const answerElement = screen.getByText(/Peter Tosh/i);
  //   fireEvent.click(secondQuestionLink);
  //   const thirdQuestionLink = screen.getByTestId(/2A/i);
  //   fireEvent.click(thirdQuestionLink);
  // });
  //
  // it('resets if button is pressed', () => {
  //   fireEvent.click(firstQuestionLink);
  //   const secondQuestionLink = screen.getByTestId(/Question E/i);
  //   fireEvent.click(screen.getByText(/Reset/i));
  //   expect(firstQuestionLink).toBeTruthy();
  // });
});
