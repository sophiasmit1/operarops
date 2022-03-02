import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
    background: #FEFEFE;
    padding: 17px 0;
`

const NavBarItem = styled.div`
    position: relative;
`

const Logo = styled.a`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #3268A1;
    cursor: pointer;
`

const AddPostBtn = styled.a`
    font-style: normal;
    font-weight: 300;
    font-size:14px;
    line-height:16px;
    color: #FFFFFF;
    background: #67bfff;
    box-shadow: 0px 10px 25 px rgba (148, 147, 213, 0.15);
    border-radius: 10px;
    position: absolute;
    width: 139px;
    height:25px;
    left:50%;
    top:25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%);
    cursor: pointer;
`


export const NavBar = () => {
    return(
        <Nav>
            <div className="container">
                <NavBarItem>

                    <Link href={"/"}passHref>
                    <Logo>
                        NEXT || BLOG
                    </Logo>
                    </Link>
                    <Link href={"/add.opetator"}passHref>
                    <AddPostBtn>
                        Добавить статью
                    </AddPostBtn>
                    </Link>
                    
                </NavBarItem>
            </div>
        </Nav>
    )
}