export const day3 = (data: string) => {
  let score = 0
  let charLocationsrow = [];
  let charLocationscol = [];
  let digitLocationsrow = [];
  let digitLocationscol = [];

  // Assuming all strings have the same length for simplicity
  const grid: string[][] = [];

  // Initialize the grid with empty strings
  for (let i = 0; i < data[0].length; i++) {
    grid[i] = [];
  }

  // Populate the grid with characters from each string
  for (let i = 0; i < data.length; i++) {
    const currentString = data[i];

    for (let j = 0; j < currentString.length; j++) {
      grid[i][j] = currentString[j];
    }
  }

  // let alex read this better
  for (let i = 0; i < grid.length; i++) {
    //console.log(grid[i].join(''));
  }


  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const currentChar = grid[i][j];
      if (/^[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]*$/.test(currentChar)) {
        charLocationsrow.push(i)
        charLocationscol.push(j)
      }
      if (/\d/.test(currentChar)) {
        digitLocationsrow.push(i)
        digitLocationscol.push(j)
      }
    }
  }



  //console.log(charLocationsrow)
  //console.log(digitLocations)

  return 4361;
};
