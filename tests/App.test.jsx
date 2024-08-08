import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  it('renders headline', () => {
    // check if App components renders headline
    render(<App />);
    expect(screen.getByRole('heading').textContent).toMatch(/our first test/i);
  });
});
