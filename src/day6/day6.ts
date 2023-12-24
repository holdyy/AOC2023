export const day6 = (data: string) => {
  let times: number[] = []
  let distances: number[] = []
  let score = 0

  let time = data[0].split(/[" "|]+/)
  let distance = data[1].split(/[" "|]+/)

  for (let i = 1; i < time.length; i++) {
    times.push(+time[i])
    distances.push(+distance[i])

  }

  function findDistnce(arr, arr2): number[] {
    const finalResults: number[] = [];
    const score = 0

    for (let i = 0; i < arr.length; i++) {
      let wins = 0
      for (let j = 0; j < arr[i]; j++) {
        //finalResult.push((arr[i] - j) * j)
        if (((arr[i] - j) * j) > arr2[i]) { wins++ }
      }
      finalResults.push(wins)
      //console.log(finalResults)
    }
    return finalResults
  }

  function calculateWin(arr): number {
    let score = 1
    arr.forEach((element) => {
      score *= element;
    })
    return score;
  }

  score = calculateWin(findDistnce(times, distances))
  //console.log(score)

  return score;
};
