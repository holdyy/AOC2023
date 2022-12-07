
// export const day4 = (data: string) => {
//   let score = 0
//   for (let i = 0; i < data.length; i++) {
//     const group = data[i]
//     const pair = group.split(",")
//     const minmax1 = pair[0].split("-");
//     //console.log(minmax1)
//     const minmax2 = pair[1].split("-");
//     //console.log(minmax2)

//     if (+minmax1[0] <= +minmax2[0] && +minmax1[1] >= +minmax2[1]) { score++ }
//     else if (+minmax2[0] <= +minmax1[0] && +minmax2[1] >= +minmax1[1]) { score++ }
//     console.log(score)
//   }
//   return score;
// };


export const day4 = (data: string) => {
  let score = 0
  for (let i = 0; i < data.length; i++) {
    const group = data[i]
    const pair = group.split(",")
    const minmax1 = pair[0].split("-");
    //console.log(minmax1)
    const minmax2 = pair[1].split("-");
    //console.log(minmax2)

    if (+minmax1[0] >= +minmax2[0] && +minmax1[0] <= +minmax2[1]) { score++ }
    else if (+minmax1[1] >= +minmax2[0] && +minmax1[1] <= +minmax2[1]) { score++ }
    else if (+minmax2[0] >= +minmax1[0] && +minmax2[0] <= +minmax1[1]) { score++ }
    else if (+minmax2[1] >= +minmax1[0] && +minmax2[1] <= +minmax1[1]) { score++ }
    console.log(score)
  }
  return score;
};
