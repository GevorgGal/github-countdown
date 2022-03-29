const countDown = (n) => {
  if (n < 0) return;
  setTimeout(() => {
    console.log(n);
    countDown(n - 1);
  }, 1000);
};

countDown(10);
