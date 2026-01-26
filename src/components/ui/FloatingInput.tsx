import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingInput = ({ label, className, ...props }: FloatingInputProps) => {
  return (
    <div className="relative">
      <Input
        {...props}
        placeholder=" "
        className={cn("peer h-12 pt-4", className)}
      />

      <span
        className="
          pointer-events-none
          absolute left-3 top-1/2
          -translate-y-1/2
          text-gray-500 text-sm
          transition-all

          peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-sm

          peer-focus:top-2
          peer-focus:text-xs
          peer-focus:text-gray-700

          peer-not-placeholder-shown:top-2
          peer-not-placeholder-shown:text-xs
        "
      >
        {label}
      </span>
    </div>
  );
};

export default FloatingInput;
