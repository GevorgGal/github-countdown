const countDown = (n) => {
  if (n < 0) return;
  setTimeout(() => {
    console.log(n);
    countDown(n - 1);
  }, 1000);
};

const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};
