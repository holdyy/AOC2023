export const day4 = (data: string) => {
  let parts = []
  let round = 0
  let score = 0

  for (let i = 0; i < data.length; i++) {
    parts = data[i].split(/[:,|]+/)
    const card = parts[0].match(/\d/g)
    const ourScores = parts[1].match(/\d+/g)
    const winScores = parts[2].match(/\d+/g)

    const intersection = ourScores.filter(element => winScores.includes(element));

    if (intersection.length == 0) { round = 0 }
    else if (intersection.length == 1) { round = 1 }
    else if (intersection.length > 1) { round = Math.pow(2, (intersection.length - 1)) }

    score += round
  }

  return score;
};
