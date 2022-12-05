import { day3 } from './day3';
import { logAnswer } from '../utils/logging';

test('Provided test cases', () => {
  expect(day3()).toBe(3);
});

test('Returns an answer', () => {
  logAnswer(day3());
  expect(typeof day3()).toBe('number');
  expect(day3()).toBeGreaterThan(0);
});
