
// export const day2 = (data: string) => {
//   let rob = 0;
//   const R = 1
//   const P = 2
//   const S = 3
//   const Win = 6
//   const Draw = 3
//   const Loose = 0



//   for (let i = 0; i < data.length; i++) {
//     const game = data[i]
//     let player = game.split(" ");

//     if (player[0] === "A" && player[1] === "X") { rob += R + Draw }
//     if (player[0] === "A" && player[1] === "Y") { rob += P + Win }
//     if (player[0] === "A" && player[1] === "Z") { rob += S + Loose }
//     if (player[0] === "B" && player[1] === "X") { rob += R + Loose }
//     if (player[0] === "B" && player[1] === "Y") { rob += P + Draw }
//     if (player[0] === "B" && player[1] === "Z") { rob += S + Win }
//     if (player[0] === "C" && player[1] === "X") { rob += R + Win }
//     if (player[0] === "C" && player[1] === "Y") { rob += P + Loose }
//     if (player[0] === "C" && player[1] === "Z") { rob += S + Draw }

//     //console.log(player[0]);
//     //console.log(player[1]);
//     //console.log(rob);

//   };


//   return rob;
// };

export const day2 = (data: string) => {
  let rob = 0;
  const R = 1
  const P = 2
  const S = 3
  const Win = 6
  const Draw = 3
  const Loose = 0



  for (let i = 0; i < data.length; i++) {
    const game = data[i]
    let player = game.split(" ");


    if (player[0] === "A" && player[1] === "X") { rob += S + Loose }
    if (player[0] === "B" && player[1] === "X") { rob += R + Loose }
    if (player[0] === "C" && player[1] === "X") { rob += P + Loose }
    if (player[0] === "A" && player[1] === "Y") { rob += R + Draw }
    if (player[0] === "B" && player[1] === "Y") { rob += P + Draw }
    if (player[0] === "C" && player[1] === "Y") { rob += S + Draw }
    if (player[0] === "A" && player[1] === "Z") { rob += P + Win }
    if (player[0] === "B" && player[1] === "Z") { rob += S + Win }
    if (player[0] === "C" && player[1] === "Z") { rob += R + Win }

    //console.log(player[0]);
    //console.log(player[1]);
    //console.log(rob);

  };


  return rob;
};
