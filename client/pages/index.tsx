import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Login from '../components/Login'

const Home: NextPage = () => {
  return (
    <div className={`h-[100vh] font-plex bg-[#0b0e11]`}>
      <Head>
        <title>GelatoSwap</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Navbar/>
      <Login/>
    </div>
  )
}

export default Home
