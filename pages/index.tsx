import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Image from 'next/image'
const Home: NextPage = () => {
  return (
    <>
      <Layout pageTitle="Home Page">
        <Image src="/vim-1.png" width="300" height="200" alt="bookmark" layout="intrinsic" />
        <h1> Ini Konten </h1>
      </Layout >
    </>
  )
}

export default Home
