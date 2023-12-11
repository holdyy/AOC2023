export const day2 = (data: string) => {

  let gameID = []
  let games = []
  let redGames = []
  let blueGames = []
  let greenGames = []
  let maxRed = 12
  let maxGreen = 13
  let maxBlue = 14
  let score = 0
  for (let i = 0; i < data.length; i++) {
    redGames = []
    blueGames = []
    greenGames = []
    games = data[i].split(/[\s,;:]+/)
    gameID.push(+games[1])
    for (let j = 0; j < games.length; j++) {
      if (games[j] == "red") { redGames.push(+games[(j - 1)]) }
      if (games[j] == "blue") { blueGames.push(+games[(j - 1)]) }
      if (games[j] == "green") { greenGames.push(+games[(j - 1)]) }

    }

    if (Math.max(...redGames) > maxRed || Math.max(...blueGames) > maxBlue || Math.max(...greenGames) > maxGreen) { gameID[i] = 0 }

    score += gameID[i];

  }

  return score;
};
