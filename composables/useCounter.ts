export const useCounter = () => {
  const count = useState<number>("count", () => 0);

  function increment() {
    if (count.value > 9) {
      console.error("Максимальное количество пользователей, уже 9 !!!");
      return;
    }
    count.value++;
  }
  function decrement() {
    if (count.value < 1) {
      console.error("Минимальное количество пользователей, уже 0 !!!");
      return;
    }
    count.value--;
  }
  return {
    count: readonly(count),
    increment,
    decrement,
  };
};
