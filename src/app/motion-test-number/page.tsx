"use client";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function AnimatedNumberFramerMotion({ value }: { value: number }) {
  const count = useMotionValue(value);
  const animatedCount = useSpring(count, {
    damping: 15,
    stiffness: 100,
    duration: 2,
  });

  const displayCount = useTransform(animatedCount, (latestNumber) =>
    Math.floor(latestNumber)
  );

  useEffect(() => {
    count.set(value);
  }, [value, count]);

  return <motion.span className="text-white">{displayCount}</motion.span>;
}

function MotionNumber() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const newNum = (Math.random() * 100).toFixed();
      setNum(parseInt(newNum));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen flex-col justify-center items-center gap-2 bg-pink-400">
      <span className="text-white">{num}</span>
      <AnimatedNumberFramerMotion value={num} />
    </div>
  );
}

export default MotionNumber;
