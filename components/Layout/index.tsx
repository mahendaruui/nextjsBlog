import Header from '../Header'
import Footer from '../Footer'
import { ReactNode } from 'react';
import Head from 'next/head'

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {

  const { children, pageTitle } = props;

  return (
    <div className="font-poppins">
      <Head>
        <title>Basic NextJs | {pageTitle} </title>
        <meta name="description" content="Webside NextJS Basic" />
      </Head>
      < Header />
      <div className="h-full my-10">
        {children}
      </div>
      <Footer />
    </div >
  )
}

