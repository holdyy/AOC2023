import { logAnswer } from '../utils/logging';
import { data, testData } from './day6.data';
import { day6part2 } from './day6.part2';

test.only('Provided test cases', () => {
  expect(day6part2(testData)).toBe(26499773);
});

test('Returns an answer', () => {
  logAnswer(day6part2(data));
  expect(typeof day6part2(data)).toBe('number');
  expect(day6part2(data)).toBeGreaterThan(0);
});
