let subscriptionMap = new Map();
let netflix = {
  pricePerUnit: 10,
  hoursPerUnit: 10,
};
let amazonPrime = {
  pricePerUnit: 2,
  hoursPerUnit: 5,
};
let hotstar = {
  pricePerUnit: 1,
  hoursPerUnit: 5,
};
subscriptionMap.set('netflix', netflix);
subscriptionMap.set('amazonPrime', amazonPrime);
subscriptionMap.set('hotstar', hotstar);

// till here our subscriptions are ready

function calculatePlanCost(netflix, prime, hotstar) {
  let totalCost = 0;
  if (netflix) {
    let netflixSubscription = subscriptionMap.get('netflix');
    let valid = checkMultiples(
      netflix,
      netflixSubscription.hoursPerUnit,
      'Netflix'
    );
    if (valid != 'success') {
      return valid;
    }
    let totalCostOfNetflix =
      parseInt(netflix / netflixSubscription.hoursPerUnit) *
      netflixSubscription.pricePerUnit;
    totalCost += totalCostOfNetflix;
  }

  if (prime) {
    let primeSubscription = subscriptionMap.get('amazonPrime');
    let valid = checkMultiples(
      prime,
      primeSubscription.hoursPerUnit,
      'Amazon Prime'
    );
    if (valid != 'success') {
      return valid;
    }
    let totalCostOfPrime =
      parseInt(prime / primeSubscription.hoursPerUnit) *
      primeSubscription.pricePerUnit;
    totalCost += totalCostOfPrime;
  }

  if (hotstar) {
    let hotstarSubscription = subscriptionMap.get('hotstar');

    let valid = checkMultiples(
      hotstar,
      hotstarSubscription.hoursPerUnit,
      'Hotstar'
    );
    if (valid != 'success') {
      return valid;
    }

    let totalCostOfHotstar =
      parseInt(hotstar / hotstarSubscription.hoursPerUnit) *
      hotstarSubscription.pricePerUnit;
    totalCost += totalCostOfHotstar;
  }

  return totalCost;
}
function calculatePlanCost2(arr) {
  let totalCost = 0;
  for (let i = 0; i < arr.length; i++) {
    let subs = arr[i];
    let subscription = subscriptionMap.get(subs.name);
    let valid = checkMultiples(
      subs.value,
      subscription.hoursPerUnit,
      subs.name
    );
    if (valid != 'success') {
      return valid;
    }
    let subsCost =
      parseInt(subs.value / subscription.hoursPerUnit) *
      subscription.pricePerUnit;
    totalCost += subsCost;
  }

  return totalCost;
}

function checkMultiples(value, allowedMultiple, name) {
  if (value % allowedMultiple !== 0 && value / allowedMultiple < 1) {
    let str =
      name +
      ' allows viewing hours in multiples of ' +
      allowedMultiple +
      ' only.';
    return str;
  }
  return 'success';
}

/*   console.log(calculatePlanCost(20,10,50));
    console.log(calculatePlanCost(20,6,0)); */
console.log(
  calculatePlanCost2([
    { name: 'netflix', value: 20 },
    { name: 'amazonPrime', value: 10 },
    { name: 'hotstar', value: 50 },
  ])
);
