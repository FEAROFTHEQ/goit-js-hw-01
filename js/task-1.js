function makeTransaction(quantity, pricePerDroid){
    const answer =`You ordered ${quantity} droids worth ${quantity*pricePerDroid} credits!`;
    return answer;
}
console.log('================task 1================');
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));