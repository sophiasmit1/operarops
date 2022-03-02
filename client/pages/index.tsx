import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styled from 'styled-components'
import { NavBar } from '../components/NavBar'


interface IHeadingStyled {
  bgImage: string;
}
const Wrapper = styled.div`
    background: #EEF5FF;
    min-height: 100vh;
    width:100%;

`
const PostWraper = styled.div`
  display:flex;
  flex-wrap: wrap;
  column-gap: 30px;
`
const Post = styled.a<IHeadingStyled>` 
  width: 220px;
  height: 180px;
  border-radius: 15px;
  margin-top: 50px;
  position: relative;
  cursor: pointer;
  background: url('${props=> props.bgImage}') center / cover no-repeat;
  :hover{
    transform: scale(1.1);
    transition: .3s all ease;
  }
`
const PostTitle = styled.div`
  font-style:normal;
  font-weight:500;
  font-size:18px;
  line-height:21px;
  padding: 15px 20px;
  position:absolute;
  left: 0;
  right: 0;
  bottom: 0;
  color: #3260A1;
  background: white;
  border-radius: 0px 0px 15px 15px;
  `

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Terminals</title>
      </Head>
      <NavBar />
      <PostWraper>
        <Link href={'/operator/test'}passHref>
        <Post bgImage = '/static/MTS.svg'>
        <PostTitle>
          123
        </PostTitle>
        </Post>
        </Link>
      </PostWraper>
    </Wrapper>
  )
}

export default Home
