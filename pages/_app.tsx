import { Quicksand } from 'next/font/google'
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const quicksand = Quicksand({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Choose the weights you need
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={quicksand.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
