export function fizzBuzz(num: number): number | string {
  if (num === 0) {
    return 0;
  } else if (num % 5 === 0 && num % 3 === 0) {
    return "FizzBuzz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else {
    return num;
  }
}
