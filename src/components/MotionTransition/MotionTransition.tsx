import { useEffect, useRef } from "react";
import { useInView, useAnimation, motion } from "framer-motion";
import { MotionTransitionProps } from "./MotionTransition.types";
import { fadeIn } from "@/app/utils/transitions";

const MotionTransition = (props: MotionTransitionProps) => {
  const { children, className } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        variants={fadeIn()}
        animate={mainControls}
        exit="hidden"
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MotionTransition;
