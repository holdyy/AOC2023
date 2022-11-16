import { logAnswer } from '../utils/logging';
import { data, testData } from './day1.data';
import { day1part2 } from './day1.part2';


test('Provided test cases', () => {
  expect(day1part2(testData)).toBe(5);
});

test('Returns an answer', () => {
  logAnswer(day1part2(data));
  expect(typeof day1part2(data)).toBe('number');
  expect(day1part2(data)).toBeGreaterThan(0);
});
