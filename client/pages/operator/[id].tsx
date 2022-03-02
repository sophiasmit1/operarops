import Head from "next/head"
import styled from "styled-components"
import { NavBar } from "../../components/NavBar"

const Wrapper = styled.div`
    background: #EEF5FF;
    min-height: 100vh;
    width: 100%;
`

export default function Operator(){
    return(
        <Wrapper>
            <Head>
                <title>МТС</title>
            </Head>
            <NavBar />
            <h1>Hello, this is Operator MTC</h1>
        </Wrapper>
    )
}