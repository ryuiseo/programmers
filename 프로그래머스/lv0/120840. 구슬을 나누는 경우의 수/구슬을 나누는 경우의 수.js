function solution(balls, share) {
  let count = 1;
  for (let i = balls; i > balls - share; i--) {
    count *= i;
  }
  for (let i = share; i > 0; i--) {
    count /= i;
  }
  return Math.round(count);
}
