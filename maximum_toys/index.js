/**
 * This is a simple challenge, but the important detail is to sort the matrix to get the cheapest toys first, which
 * will be the first ones and we do not iterate across the matrix to see how many toys the quantity 'k' can buy.
 *
 * https://www.hackerrank.com/challenges/mark-and-toys/problem
 */

function maximumToys(prices, k) {
  if (!prices || prices.length === 0) {
    return prices;
  }

  const sortedPricesArr = prices.sort((a, b) => a - b);
  let toysCounter = 0;
  let moneyAvailable = k;

  for (let i = 0; i < sortedPricesArr.length; i++) {
    const price = sortedPricesArr[i];

    if (price <= moneyAvailable) {
      moneyAvailable -= price;
      toysCounter++;

      continue;
    }

    break;
  }

  return toysCounter;
}
