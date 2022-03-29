const countDown = (n) => {
  if (n < 0) return;
  setTimeout(() => {
    console.log(n);
    countDown(n - 1);
  }, 1000);
};

const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(8));
