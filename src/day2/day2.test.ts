import { day2 } from './day2';
import { logAnswer } from '../utils/logging';

test('Provided test cases', () => {
  expect(day2()).toBe(2);
});

test('Returns an answer', () => {
  logAnswer(day2());
  expect(typeof day2()).toBe('number');
  expect(day2()).toBeGreaterThan(0);
});
