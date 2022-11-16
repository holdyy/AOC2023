import { parseInput } from '../utils/input';

enum SubmarineNavigationAction {
  FORWARD = 'forward',
  UP = 'up',
  DOWN = 'down',
}
interface SubmarineNavigationInstruction {
  action: SubmarineNavigationAction;
  value: number;
}

export const parseSubmarineDirections = (
  input: string,
): SubmarineNavigationInstruction[] => {
  const parsed = parseInput(input) as string[];
  return parsed.map((instruction) => {
    const groups = instruction.match(
      new RegExp('^(forward|up|down) ([0-9]+)$'),
    );
    if (!groups)
      throw new Error(`${instruction} is not a valid submarine instruction`);
    const [_, direction, value] = groups;
    return {
      action: direction as SubmarineNavigationAction,
      value: +value,
    };
  });
};

export const day2 = (input: SubmarineNavigationInstruction[]) => {
  const { hor, depth } = input.reduce(
    (position, instruction) => {
      const { action, value } = instruction;
      if (action === SubmarineNavigationAction.FORWARD)
        return { hor: (position.hor += value), depth: position.depth };
      if (action === SubmarineNavigationAction.DOWN)
        return { hor: position.hor, depth: position.depth + value };
      if (action === SubmarineNavigationAction.UP)
        return { hor: position.hor, depth: position.depth - value };
      throw new Error(`Incorrect action: ${action}`);
    },
    { hor: 0, depth: 0 },
  );
  return hor * depth;
};
