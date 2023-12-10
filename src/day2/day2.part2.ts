export const day2part2 = (data: string) => {

  //console.log(data.length)
  let gameID = []
  let games = []
  let redGames = []
  let blueGames = []
  let greenGames = []
  let score = 0
  for (let i = 0; i < data.length; i++) {
    redGames = []
    blueGames = []
    greenGames = []
    games = data[i].split((/[\s,;:]+/))
    gameID.push(+games[1])
    //console.log(gameID)
    for (let j = 0; j < games.length; j++) {
      if (games[j] == "red") { redGames.push(+games[(j - 1)]) }
      if (games[j] == "blue") { blueGames.push(+games[(j - 1)]) }
      if (games[j] == "green") { greenGames.push(+games[(j - 1)]) }

    }
    console.log(games)
    console.log(Math.max(...redGames))
    console.log(Math.max(...blueGames))
    console.log(Math.max(...greenGames))

    score += (Math.max(...redGames) * Math.max(...blueGames) * Math.max(...greenGames))
    //console.log(score)
  }
  ///for (let i = 0; i < gameID.length; i++) {

  //
  console.log(score)
  return score;
};
