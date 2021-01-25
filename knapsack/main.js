const items = [
  {
    name: "straw",
    value: 5,
    weight: 1,
  },
  {
    name: "knife",
    value: 6,
    weight: 3,
  },
  {
    name: "towel",
    value: 5,
    weight: 6,
  },
  {
    name: "rope",
    value: 17,
    weight: 2,
  },
];
const maxWeight = 3;

function getMaxValueItems(items, maxWeight) {
  let knapsack = [];

  // sort items for max value and min weight
  const sortedItems = items
    .sort((a, b) =>  b.value - a.value)
    .sort((a, b) => b.weight < a.weight);

  // loop items and put into knapsack, if itemWeight <= remainingWeight
  let remainingWeight = maxWeight;
  for (const item of sortedItems) {
    if (item.weight <= remainingWeight) {
      knapsack.push(item);
      remainingWeight -= item.weight;
    }
  }
  return knapsack;
}

// print result
console.table(getMaxValueItems(items, maxWeight));
