import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { NavBar } from '../components/Navbar'


const Home: NextPage = () => {
  return (
    <div className  = 'container'>
      <Head>
        <title>Terminals</title>
      </Head>
      <NavBar />
    </div>
  )
}

export default Home
