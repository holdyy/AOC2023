import { logAnswer } from '../utils/logging';
import { data, testData } from './day7.data';
import { day7part2 } from './day7.part2';

test('Provided test cases', () => {
  expect(day7part2(testData)).toBe(5905);
});

test('Returns an answer', () => {
  logAnswer(day7part2(data));
  expect(typeof day7part2(data)).toBe('number');
  expect(day7part2(data)).toBeGreaterThan(0);
});
