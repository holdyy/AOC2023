export const day4part2 = (data: string) => {
  let parts = []
  let score = 0
  let matches = []

  for (let i = 0; i < data.length; i++) {
    parts = data[i].split(/[:,|]+/)
    const card = parts[0].match(/\d/g)
    const ourScores = parts[1].match(/\d+/g)
    const winScores = parts[2].match(/\d+/g)
    const intersection = ourScores.filter(element => winScores.includes(element));
    matches.push(intersection.length)
  }

  console.log(matches)

  let scores = Array(matches.length).fill(1)

  console.log(scores)
  for (let i = 0; i < matches.length; i++) {
    for (let j = 0; j < scores[i]; j++) {
      let start = i + 1;
      let end = i + matches[i] + 1;
      //scores = scores.fill(scores[i] + 1, start, end)

      for (let k = start; k < end; k++) {
        scores[k]++;
      }

      console.log(scores)
    }
  }
  score = scores.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(score)

  return score;

};
