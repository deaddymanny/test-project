export const useCounter = () => {
    const count = useState<number>("count", () => 0)

    function increment()
    {
        if (count.value > 9)
        {
            console.error("count уже 10, много!")
            return;
        }
        count.value++;
    }

    function decrement()
    {
        if (count.value < 1)
        {
            console.error("count уже 0, мало!")
            return;
        }
        count.value--;
    }

    return {
        count: readonly(count),
        increment: increment,
        decrement: decrement
    }
}