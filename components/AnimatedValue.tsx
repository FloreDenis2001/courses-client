import exp from "constants";
import { useEffect, useState } from "react";

const AnimatedValue: React.FC<{ value: number }> = ({ value }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 2000;
    const incrementTime = duration / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="block text-3xl md:text-4xl font-bold  mb-2">{count}</span>
  );
};

export default AnimatedValue;
