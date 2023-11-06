import Link from "next/link";
import { ButtonHTMLAttributes, FC, LinkHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<any> {
  href?: never;
  children?: ReactNode;
  className?: string;
}

interface LinkProps extends LinkHTMLAttributes<any> {
  href: string;
  children?: ReactNode;
  className?: string;
}

const SimpleButton: FC<ButtonProps | LinkProps> = ({
  href,
  children,
  className,
  ...props
}) => {
  const Tag: any = href ? Link : "button";

  return (
    <Tag
      href={href}
      className={`flex gap-1.5 justify-center items-center p-3 text-sm font-bold rounded-xl bg-customBlue-500 text-white ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default SimpleButton;
