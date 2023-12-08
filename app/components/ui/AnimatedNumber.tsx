"use client"



import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";

type Props = {
  value:number;
};

const AnimatedNumber = ({value}: Props) => {
  const ref = useRef<any>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInvalue = useInView(ref, { once: true });

  useEffect(() => {
    if (isInvalue) {
      motionValue.set(value);
    }
  }, [isInvalue, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default AnimatedNumber;
