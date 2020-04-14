
function convertingToBasicSum(func) {
    return function basicSum(...args) {
      if (args.length >= func.length) {
        return func(...args);
      } else {
        return function(...args2) {
          return basicSum(...args.concat(args2));
        }
      }
    };
  }
    function sum(a, b, c) {
    return a + b + c;
  }
  
  let genericSumFunc = convertingToBasicSum(sum);
  
   console.log(genericSumFunc(1, 2, 3)) 
   console.log(genericSumFunc(1,2)(3)) 
   console.log(genericSumFunc(1)(2)(3) ); // 6, full currying
  
  