function checkForSpam (str) { 
  'use strict';
  //первый вариант решения
  let spam = false;
    if (str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')) {
        spam = true;
    }
    return spam;

  //второй вариант решения
  // let result;
  //  return result =
  //    (str.toLowerCase().includes("spam") || str.toLowerCase().includes("sale")
  //      ? true
  //      : false);
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true