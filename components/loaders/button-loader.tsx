import { cn } from "@/utils/classnames";

type Props = {
  className: string;
};

const ButtonLoader = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-white",
        className,
      )}
    >
      <i className="fi fi-rr-spinner animate-spin"></i>
    </div>
  );
};

export default ButtonLoader;
