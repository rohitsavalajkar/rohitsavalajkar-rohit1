import { render, screen} from '@testing-library/react';
import App from './App';
import {calculateRewardPoints} from './RewardsPoints';
import {RewardsProgram} from './RewardsProgram';

test('renders Rewards Program', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rewards Program/i);
  expect(linkElement).toBeInTheDocument();
});

test('calculateRewardPoints accurately', () => {
  expect(calculateRewardPoints(75)).toBe(25);
  expect(calculateRewardPoints(120)).toBe(90);
});

test('calculateRewardPoints Correctly', () => {
  expect(calculateRewardPoints(200)).toBe(250);
  expect(calculateRewardPoints(100)).toBe(50);
});

test('renders Rewards Program', () => {
  render(<RewardsProgram />);
  const linkElement = screen.getByText(/Monthly Points/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Rewards Program', () => {
  render(<RewardsProgram />);
  const linkElement = screen.getByText(/Transaction Details/i);
  expect(linkElement).toBeInTheDocument();
});
