import { Providers } from "./providers";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

export const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Annie Cai",
  description: "Welcome to my personal website :)",
};

export default function RootLayout({ children }) {
  const classNames = `${eb_garamond.className} bg-neutral-100`;

  return (
    <html>
      <body className={classNames}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
