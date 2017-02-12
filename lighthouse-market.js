function buyBottles(cash) {
  return Math.floor(cash / 2);
}

function redeemBottles(bottles) {
  return Math.floor(bottles / 2);
}

function redeemBottlecups(cups) {
  return Math.floor(cups / 4);
}

function totalBottles(money, bottles, bottlecups, total) {
  console.log('novy cyklus');
  if (money >= 2) {
    total += buyBottles(money);
    bottles += buyBottles(money);
    bottlecups += buyBottles(money);
    money -= 2 * buyBottles(money);
  }

  if (bottles >= 2) {
    total += redeemBottles(bottles);
    bottlecups += redeemBottles(bottles);
    bottles -= redeemBottles(bottles);
  }
  if (bottlecups >= 4) {
    total += redeemBottlecups(bottlecups);
    bottles += redeemBottlecups(bottlecups);
    bottlecups -= 3 * (redeemBottlecups(bottlecups));
  }

  if (bottles >= 2 || bottlecups >= 4) {
    return totalBottles(money, bottles, bottlecups, total);
  } else {
    // console.log(total);
    return total;
  }
}

console.log(totalBottles(20,0,0,0));