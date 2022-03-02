import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import Navbar from './components/NavBar'


const Home: NextPage = () => {
  return (
    <div className  = 'container'>
      <Head>
        <title>Terminals</title>
      </Head>
      <Navbar />
    </div>
  )
}

export default Home
