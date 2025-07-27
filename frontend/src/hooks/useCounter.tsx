import React, { useEffect } from 'react'

export default function useCounter(initialValue: number = 0) {
    const [count, setCount] = React.useState(initialValue);
    const increment = () => {
        setCount(count + 1);
        return count;
    };
    useEffect(() => {
        increment
    }, [count]);

  return {increment}
}
