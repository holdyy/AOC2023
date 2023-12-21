import { logAnswer } from '../utils/logging';
import { data, testData } from './day4.data';
import { day4part2 } from './day4.part2';

test.only('Provided test cases', () => {
  expect(day4part2(testData)).toBe(30);
});

test('Returns an answer', () => {
  logAnswer(day4part2(data));
  expect(typeof day4part2(data)).toBe('number');
  expect(day4part2(data)).toBeGreaterThan(0);
});
