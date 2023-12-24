export const day6part2 = (data: string) => {
  let times: number = 47986698
  let distances: number = 400121310111540
  let score = 0
  let wins = 0

  for (let i = 8338171; i < times; i++) {
    if (((times - i) * i) > distances) { wins++ }
  }

  console.log(wins)

  return wins;
};
