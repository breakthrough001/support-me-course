"ues client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "./input";
import { EyeIcon, EyeOff } from "lucide-react";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowpassword] = React.useState(false);
    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          {...props}
          ref={ref}
          className={cn("pr-10", className)}
        />
        <span className="absolute top-[7px] right-2 cursor-pointer select-none">
          {showPassword ? (
            <EyeIcon onClick={() => setShowpassword(false)} />
          ) : (
            <EyeOff onClick={() => setShowpassword(true)} />
          )}
        </span>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };