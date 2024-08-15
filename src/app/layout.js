import { Providers } from "./providers";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={classNames}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
