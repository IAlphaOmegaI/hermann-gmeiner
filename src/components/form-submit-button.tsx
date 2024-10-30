import type { Icon } from "@/types/components";
import { CheckIcon, LoadingIcon } from "@/icons";
import { AnimatePresence, motion } from "framer-motion";
import { type PropsWithChildren, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FormSubmitButton as FormSubmitButtonPrimitive } from "./ui/form";
export type FormSubmitButtonProps = PropsWithChildren<{
  Icon: Icon;
}>;

export const FormSubmitButton = ({ children, Icon }: FormSubmitButtonProps) => {
  const form = useFormContext();
  const { isSubmitSuccessful, isSubmitting } = form.formState;
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!isSubmitting && isSubmitSuccessful) {
      setShowSuccess(true);

      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitting, isSubmitSuccessful]);
  return (
    <FormSubmitButtonPrimitive type={"submit"} color="emphasis">
      <AnimatePresence mode="wait">
        {isSubmitting ? (
          <motion.div
            key="loading"
            variants={iconVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <LoadingIcon className="animate-spin" />
          </motion.div>
        ) : showSuccess ? (
          <motion.div
            key="success"
            variants={iconVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <CheckIcon />
          </motion.div>
        ) : (
          <motion.div
            key="icon"
            variants={iconVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <Icon />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </FormSubmitButtonPrimitive>
  );
};

const iconVariants = {
  exit: {
    y: "100%",
    opacity: 0,
    filter: "blur(10px)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  initial: {
    y: "-100%",
    opacity: 0,
    filter: "blur(10px)",
  },
  enter: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
