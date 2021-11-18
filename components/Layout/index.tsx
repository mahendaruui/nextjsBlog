import Header from "../Header";
import Footer from "../Footer";
import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;

  return (
    <div className="font-poppins">
      <Head>
        <title>Mahendar Dwi Payana Blog | {pageTitle} </title>
        <meta name="description" content="Webside NextJS Basic" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        />
      </Head>
      <Header />
      <div className="h-full my-10">{children}</div>
      <Footer />
    </div>
  );
}
