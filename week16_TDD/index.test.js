// Greeting Kata
// https://github.com/testdouble/contributing-tests/wiki/Greeting-Kata

import { greet } from './index';

test('Requirement1', () => {
  expect(greet('Bob')).toBe('Hello, Bob.');
});

test('Requirement2', () => {
  expect(greet(null)).toBe('Hello, my friend.');
});

test('Requirement3', () => {
  expect(greet('JERRY')).toBe('HELLO, JERRY!');
});

test('Requirement4', () => {
  const arrayNames = ["Jill", "Jane"];
  expect(greet(arrayNames)).toBe('Hello, Jill and Jane.');
  expect(greet("Jill", "Jane")).toBe('Hello, Jill and Jane.');
  expect(greet(...arrayNames)).toBe('Hello, Jill and Jane.');
});

test('Requirement5', () => {
  expect(greet( ['Amy'] )).toBe("Hello, Amy.");
  expect(greet( ['Amy', 'Brian', 'Charlotte'] )).toBe("Hello, Amy, Brian, and Charlotte.");
  expect(greet( ['Amy', 'Brian', 'Charlotte', 'Google'] )).toBe("Hello, Amy, Brian, Charlotte, and Google.");
});

test('Requirement6', () => {
  expect(greet( ['Amy', 'BRIAN', 'Charlotte'] )).toBe("Hello, Amy and Charlotte, and HELLO Brian.");
  expect(greet( ['Amy', 'BRIAN', 'CHARLOTTE'] )).toBe("Hello, Amy and HELLO BRIAN and CHARLOTTE.");
  expect(greet( ['AMY', 'BRIAN', 'CHARLOTTE'] )).toBe("HELLO, AMY, BRIAN, AND CHARLOTTE.");
});
