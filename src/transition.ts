// transitions.ts
export interface TransitionAnimation {
  name: string;
  delay?: number | string;
  duration?: number | string;
  easing?: string;
  fillMode?: string;
  direction?: string;
}

export interface TransitionAnimationPair {
  old: TransitionAnimation | TransitionAnimation[];
  new: TransitionAnimation | TransitionAnimation[];
}

export interface TransitionDirectionalAnimations {
  forwards: TransitionAnimationPair;
  backwards: TransitionAnimationPair;
}

// transitions.ts
export const scaleAndFadeOut = {
  forwards: {
    old: {
      name: "scaleAndFadeOut",
      duration: "1s",
    },
    new: {
      name: "scaleAndFadeOut",
      duration: "1s",
    },
  },
  backwards: {
    old: {
      name: "scaleAndFadeOut",
      duration: "1s",
    },
    new: {
      name: "scaleAndFadeOut",
      duration: "1s",
    },
  },
};
