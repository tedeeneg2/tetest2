// import * as React from "react";
// import { cn } from "@/lib/utils";

// const Input = React.forwardRef(({ className, type, ...props }, ref) => {
//   return (
//     <input
//       type={type}
//       className={cn(
//         "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
//         className
//       )}
//       ref={ref}
//       {...props}
//     />
//   );
// });
// Input.displayName = "Input";

// export { Input };
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const Input = React.forwardRef(
  ({ className, type = "text", label, error, icon: Icon, ...props }, ref) => {
    return (
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Icon className="h-5 w-5" />
            </div>
          )}
          <input
            type={type}
            ref={ref}
            className={cn(
              // Base styles
              "w-full rounded-xl border transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              // Light mode
              "bg-white/80 backdrop-blur-sm border-gray-200 text-gray-900 placeholder-gray-500",
              "shadow-sm hover:shadow-md",
              // Dark mode
              "dark:bg-gray-900/80 dark:backdrop-blur-sm dark:border-gray-700 dark:text-white dark:placeholder-gray-400",
              "dark:focus:ring-blue-400 dark:shadow-lg dark:hover:shadow-xl",
              // Glassmorphism effect
              "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-40",
              // Padding
              Icon ? "pl-11 pr-4 py-3" : "px-4 py-3",
              // Error state
              error && "border-red-300 focus:ring-red-500 dark:border-red-600",
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <motion.p
            className="text-sm text-red-600 dark:text-red-400"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.p>
        )}
      </motion.div>
    );
  }
);

Input.displayName = "Input";

export { Input };
