import { FC, ReactNode } from "react";
import { vazirMatn } from "@/components/assets/fonts";

import "./globals.css";

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="fa" dir="rtl" className={vazirMatn.className}>
      <body className="font-vazirmatn">{children}</body>
    </html>
  );
};

export default RootLayout;
