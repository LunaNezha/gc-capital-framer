import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/classnames";
import React from "react";
import Link from "next/link";
import ButtonLoader from "./loaders/button-loader";

const buttonVariants = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "gap-2",
    "cursor-pointer",
    "ease-in",
    "duration-200",
  ],
  {
    variants: {
      intent: {
        "filled-default": ["bg-white", " text-gray-900"],
        "filled-yellow": ["bg-broom-400", "text-black", "hover:bg-broom-500"],
      },
      fullWidth: {
        true: ["w-full"],
      },
      shadows: {
        none: ["shadow-none"],
        sm: ["shadow-sm"],
        md: ["shadow-md"],
        lg: ["shadow-lg"],
        xl: ["shadow-xl"],
        "2xl": ["shadow-2xl"],
        "3xl": ["shadow-3xl"],
      },
      padding: {
        "square-sm": ["p-2"],
        "square-md": ["p-3"],
        none: ["p-0"],
        otp: ["px-3", "py-2"],
        xs: ["px-2", "py-1"],
        sm: ["px-3", "py-2"],
        md: ["sm:px-5 sm:py-3", "px-3 py-2"],
        lg: ["sm:px-6", "px-5 py-4"],
      },
      textSize: {
        xs: ["text-xs", "font-bold font-azeret-mono"],
        sm: ["text-sm", "font-bold font-azeret-mono"],
        md: ["sm:text-base text-sm", "font-bold font-azeret-mono"],
        lg: ["text-sm sm:text-md", "font-bold font-azeret-mono"],
      },
      round: {
        none: ["rounded-none"],
        md: ["rounded-md"],
        lg: ["rounded-lg"],
        xl: ["rounded-xl"],
        full: ["rounded-full"],
      },
    },
    defaultVariants: {
      intent: "filled-default",
      padding: "md",
      textSize: "md",
      round: "md",
      shadows: "md",
      fullWidth: false,
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
    href?: string;
    children?: React.ReactNode;
  };

const Button = (props: ButtonProps) => {
  const {
    className,
    isLoading,
    round,
    padding,
    textSize,
    fullWidth,
    shadows,
    intent,
    href,
    children,
    ...rest
  } = props;

  return (
    <>
      {href ? (
        <Link href={href} className={cn(isLoading && "relative select-none")}>
          <button
            className={cn(
              buttonVariants({
                className,
                round,
                padding,
                textSize,
                fullWidth,
                shadows,
                intent,
              }),
              "outline-none disabled:pointer-events-none disabled:select-none disabled:opacity-50",
              isLoading && "pointer-events-none relative select-none",
            )}
            {...rest}
          >
            {children}

            {isLoading && (
              <ButtonLoader
                className={cn(
                  { "rounded-full": round == "full" },
                  { "rounded-xl": round == "xl" },
                  { "rounded-lg": round == "lg" },
                  { "rounded-md": round == "md" },
                )}
              />
            )}
          </button>
        </Link>
      ) : (
        <button
          className={cn(
            buttonVariants({
              className,
              round,
              padding,
              textSize,
              fullWidth,
              shadows,
              intent,
            }),
            "outline-none disabled:pointer-events-none disabled:select-none disabled:opacity-50",
            isLoading && "pointer-events-none relative select-none",
          )}
          {...rest}
        >
          {children}

          {isLoading && (
            <ButtonLoader
              className={cn(
                { "rounded-full": round == "full" },
                { "rounded-xl": round == "xl" },
                { "rounded-lg": round == "lg" },
                { "rounded-md": round == "md" },
              )}
            />
          )}
        </button>
      )}
    </>
  );
};

export { Button, buttonVariants };
