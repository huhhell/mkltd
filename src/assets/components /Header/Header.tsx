import styled from "styled-components";


interface Props {
    isLogin: boolean
}
export default function Header({isLogin}: Props) {

    return <Container>
        <Logo>OneAI</Logo>
        {!isLogin && <SignInButton>Sign in</SignInButton>}
    </Container>
}

const Container = styled.header`
    width: 100%;
    padding: 20px 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 0 0 50px 50px;
    margin-bottom: 40px;
`

const Logo = styled.h2`
    font-size: 35px;
    font-weight: 600;
    line-height: 122%;
`

const SignInButton = styled.button`
    padding: 5px 20px;
    color: #6600FF;
    font-size: 19px;
    font-weight: 500;
    line-height: 130%;
    border: 2px solid #6600FF;
    box-shadow: 0 0 10px #6600ff;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
`