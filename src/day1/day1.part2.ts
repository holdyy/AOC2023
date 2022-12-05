export const day1part2 = (data: number[]) => {
  let bob = 0
  for (let i = 0; i < data.length - 3; i++) {
    if (data[i + 3] > data[i]) { bob++ }
  };
  return bob;
};
