// Original array
const array = [
  9, 9, 9, 9, 9, 9, 9, 9, 9, 6, 6, 6, 6, 6, 6, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 8, 8, 8, 8, 8, 8, 8, 8, 4, 4, 4, 4, 2, 2,
];

// Function to shuffle array without same numbers in series and ensuring first and last elements are different
function shuffleArrayNoConsecutiveWithBoundary(arr) {
  // Grouping array elements by their values
  const grouped = arr.reduce((groups, num) => {
    if (!groups[num]) {
      groups[num] = [];
    }
    groups[num].push(num);
    return groups;
  }, {});

  // Shuffling each group
  const shuffledGroups = Object.values(grouped).map((group) => {
    let currentIndex = group.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap elements
      temporaryValue = group[currentIndex];
      group[currentIndex] = group[randomIndex];
      group[randomIndex] = temporaryValue;
    }

    return group;
  });

  // Interleaving shuffled groups randomly
  const shuffledArray = [];
  let maxGroupLength = Math.max(...shuffledGroups.map((group) => group.length));
  let i = 0;
  while (i < maxGroupLength) {
    shuffledGroups.forEach((group) => {
      if (group[i] !== undefined) {
        shuffledArray.push(group[i]);
      }
    });
    i++;
  }

  // Ensure first and last elements are different
  if (shuffledArray[0] === shuffledArray[shuffledArray.length - 1]) {
    // Find a different element than the last one
    let differentElementFound = false;
    while (!differentElementFound) {
      const lastElement = shuffledArray.pop();
      const randomGroupIndex = Math.floor(
        Math.random() * shuffledGroups.length
      );
      const randomElementIndex = Math.floor(
        Math.random() * shuffledGroups[randomGroupIndex].length
      );
      const randomElement =
        shuffledGroups[randomGroupIndex][randomElementIndex];
      if (randomElement !== lastElement) {
        shuffledArray.push(randomElement);
        differentElementFound = true;
      }
    }
  }

  return shuffledArray;
}

// Shuffle the array
const shuffledArray = shuffleArrayNoConsecutiveWithBoundary(array);

// console.log(shuffledArray);

const SHANCWB = shuffleArrayNoConsecutiveWithBoundary;

// make array to shuffle non consecutive
function matshnc(m) {
  let a = [];
  let c = 0;
  for (let i = 0; i < m.length; i++) {
    let len = m[i].length;

    for (let j = 0; j < len; j++) {
      a.push(c);
    }
    c++;
  }

  return a;
}

module.exports = { SHANCWB, matshnc };
