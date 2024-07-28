"use client";
import { cn } from "@/utils/cn";
import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Alert = ({
  children,
  variant = "info",
  isSubmitSuccessful,
  time = 3000,
}: {
  children: ReactNode;
  variant: "info" | "success" | "warning" | "error";
  isSubmitSuccessful: boolean;
  time: number;
}) => {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const bgColor = {
    info: "bg-blue-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    const handleOpen = () => {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, time);
    };

    if (isSubmitSuccessful) {
      handleOpen();
    }
  }, [isSubmitSuccessful, time]);

  return (
    <AnimatePresence>
      {showAlert && (
        <motion.div
          className={cn("fixed top-24 max-w-[500px] md:mx-auto z-10 shadow-lg inset-x-8 text-white p-6 rounded-md", bgColor[variant])}
          initial={{ opacity: 0, y: -50, x: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <div className={cn("relative")}>
            <p>{children}</p>
            <button
              onClick={handleClose}
              className='absolute -top-5 right-0 text-xl'
            >
              x
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
