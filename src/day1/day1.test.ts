import { day1 } from './day1';
import { logAnswer } from '../utils/logging';

test('Provided test cases', () => {
  expect(day1()).toBe(1);
});

test('Returns an answer', () => {
  logAnswer(day1());
  expect(typeof day1()).toBe('number');
  expect(day1()).toBeGreaterThan(0);
});
