import "./globals.css";
import "@/public/styles/font-families.module.css";
import type { Metadata, Viewport } from "next";
import { LoaderProvider } from "@/providers/loader-provider";
import ToastProvider from "@/providers/toast-provider";
import ScrollButton from "@/components/scroll-button";

export const metadata: Metadata = {
  applicationName: "Capital Framer",
  title: "GC Capital Framer",
  description: "GC Capital Framer Website",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className="h-full bg-black"
      suppressHydrationWarning
    >
      <body className="h-full">
        <LoaderProvider>
          <ToastProvider>
            {children}
            <ScrollButton />
          </ToastProvider>
        </LoaderProvider>
      </body>
    </html>
  );
}
