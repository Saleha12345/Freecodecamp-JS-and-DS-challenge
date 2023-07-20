function checkCashRegister(price, cash, cid) {
  const currency = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  let amount = cash - price;
  let changeToGive = [];
  let totalCashInDrawer = 0;

  for (let i = currency.length - 1; i >= 0; i--) {
    const [currencyName, currencyValue] = currency[i];
    const currencyAvailable = cid[i][1];
    const maxUsage = Math.floor(amount / currencyValue) * currencyValue;
    
    if (maxUsage > 0 && maxUsage <= currencyAvailable) {
      amount = parseFloat((amount - maxUsage).toFixed(2));
      changeToGive.push([currencyName, maxUsage]);
    } else if (maxUsage > currencyAvailable) {
      amount = parseFloat((amount - currencyAvailable).toFixed(2));
      changeToGive.push([currencyName, currencyAvailable]);
    }

    totalCashInDrawer += cid[i][1];
  }

  if (amount > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCashInDrawer === cash - price) {
    return { status: "CLOSED", change: cid };
  } else {
    return { status: "OPEN", change: changeToGive };
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);