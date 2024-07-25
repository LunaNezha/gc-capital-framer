import { Positions } from "@/enums/positions.enum";
import { cn } from "@/utils/classnames";
import PropTypes from "prop-types";
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  message: string;
  position: Positions;
};

const Tooltip = ({ message, position, children, ...props }: Props) => {
  return (
    <div className="group relative z-10 flex cursor-pointer" {...props}>
      <div>{children}</div>
      <span
        className={cn(
          "font-azeret-mono absolute hidden whitespace-nowrap rounded-lg bg-white p-2 text-xs font-normal text-gray-900 drop-shadow-lg transition group-hover:inline-block",
          position === Positions.Top
            ? "bottom-[calc(100%+5px)] left-1/2 -translate-x-1/2"
            : "",
          position === Positions.Bottom
            ? "left-1/2 top-[calc(100%+5px)] -translate-x-1/2"
            : "",
          position === Positions.Left
            ? "right-[calc(100%+5px)] top-1/2 -translate-y-1/2"
            : "",
          position === Positions.Right
            ? "left-[calc(100%+5px)] top-1/2 -translate-y-1/2"
            : "",
        )}
      >
        {message}
      </span>
      <span
        className={cn(
          "absolute hidden border-[6px] drop-shadow-lg transition group-hover:inline-block",
          position === Positions.Top
            ? "bottom-full left-1/2 -translate-x-1/2 border-b-0 border-l-transparent border-r-transparent border-t-white"
            : "",
          position === Positions.Bottom
            ? "left-1/2 top-full -translate-x-1/2 border-t-0 border-b-white border-l-transparent border-r-transparent"
            : "",
          position === Positions.Left
            ? "right-full top-1/2 -translate-y-1/2 border-r-0 border-b-transparent border-l-white border-t-transparent"
            : "",
          position === Positions.Right
            ? "left-full top-1/2 -translate-y-1/2 border-l-0 border-b-transparent border-r-white border-t-transparent"
            : "",
        )}
      ></span>
    </div>
  );
};

Tooltip.prototype = {
  position: PropTypes.oneOf([
    Positions.Bottom,
    Positions.Top,
    Positions.Right,
    Positions.Left,
  ]).isRequired,
  message: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
