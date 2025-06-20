"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import {
  fadeIn,
  slideFromLeft,
  slideFromRight,
  fadeInUp,
  slideUp,
} from "@/animations/animations";

export default function Reveal({
  children,
  width = "100%",
  fade = false,
  direction = "left",
  duration = 1,
  overflow = "hidden",
  delay = 0.2,
  fadeInUp: fadeInUpProp = false,
  slideUp: slideUpProp = false,
}) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView, mainControls]);

  // Determine the correct variant based on props
  let variants;
  if (fadeInUpProp) {
    variants = fadeInUp;
  } else if (slideUpProp) {
    variants = slideUp;
  } else if (fade) {
    variants = fadeIn;
  } else if (direction === "left") {
    variants = slideFromLeft;
  } else if (direction === "right") {
    variants = slideFromRight;
  } else {
    variants = fadeIn; // fallback
  }

  return (
    <div
      ref={ref}
      style={{ position: "relative", width: width, overflow: overflow  }}
    >
      <motion.div
        variants={variants}
        initial="initial"
        animate={mainControls}
        exit="exit"
        transition={{ duration: duration, delay: delay, ease: "linear" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
