import { fizzBuzz } from "./FizzBuzz";

test("multiples of 3 and 5 return FizzBuzz", () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
  expect(fizzBuzz(30)).toBe("FizzBuzz");
});

test("multiples of 3 only return Fizz", () => {
  expect(fizzBuzz(3)).toBe("Fizz");
  expect(fizzBuzz(333)).toBe("Fizz");
  expect(fizzBuzz(9999)).toBe("Fizz");
  expect(fizzBuzz(93)).toBe("Fizz");
});

test("multiples of 5 only return Buzz", () => {
  expect(fizzBuzz(25)).toBe("Buzz");
  expect(fizzBuzz(50000)).toBe("Buzz");
});

test("non-multiples return themselves", () => {
  expect(fizzBuzz(0)).toBe(0);
  expect(fizzBuzz(1)).toBe(1);
  expect(fizzBuzz(1001)).toBe(1001);
  expect(fizzBuzz(98)).toBe(98);
});
