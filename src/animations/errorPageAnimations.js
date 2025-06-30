export const buttonVariants = {
  rest: { 
    scale: 1,
  },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export const arrowVariants = {
  rest: { x: 0 },
  hover: { 
    x: -4,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

export const fillVariants = {
  rest: { x: "-100%" },
  hover: { 
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export const shimmerVariants = {
  rest: { 
    x: "-100%",
    opacity: 0 
  },
  hover: { 
    x: "100%",
    opacity: [0, 0.5, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export const backgroundAnimations = {
  leftGradient: {
    animate: {
      rotate: 360,
      scale: [1, 1.1, 1],
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  },
  rightGradient: {
    animate: {
      rotate: -360,
      scale: [1, 1.2, 1],
    },
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "linear"
    }
  }
};
