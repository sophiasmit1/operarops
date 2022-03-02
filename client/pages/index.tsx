import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { ReactChild, ReactFragment, ReactPortal, Key } from 'react'
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
  margin-left:50px;
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

const Home: NextPage = ({operators}:any) => {
  if (!operators) 'Loading...'
  return (
    <Wrapper>
      <Head>
        <title>Terminals</title>
      </Head>
      <NavBar />
      <PostWraper>

        {
          operators.map((operators: { _id: any, imgUrl: string; title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }, idx: Key | null | undefined) => {
            return(
              <Link href={'/operator/[id]'}  as = {'operator/'+ operators._id}passHref key={idx}>
              <Post bgImage = {operators.imgUrl}>
              <PostTitle>
                {operators.title}
              </PostTitle>
              </Post>
              </Link>
            )
          })
        }
      </PostWraper>
    </Wrapper>
  )
}


export default Home

export async function getServerSideProps() {
  const res = await fetch('http://localhost:5000/api/operator')
  const operators = await res.json()

  if (!operators) {
    return{
      notFount: true,
    }
  }

  return{
    props: {operators}, 
  }

}