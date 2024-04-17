import styled from "styled-components";
import closeImg from '../images/close.svg';
import {Link} from "react-router-dom";

interface Props {
    handleLogin: () => void;
}

export default function LoginPage({handleLogin}: Props) {

    const handleSubmit = () => {
        handleLogin();
    }

    return <Container>
        <CloseButton>
            <Link to='/'>
                <CloseButtonImg src={closeImg}/>
            </Link>
        </CloseButton>
        <Form>
            <Input type='email' placeholder='Email'/>
            <Input type='password' placeholder='Password'/>
            <SubmitButton onClick={handleSubmit}>Sign In</SubmitButton>
        </Form>
    </Container>
}

const Container = styled.div`
    position: relative;
    background: #fff;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const CloseButton = styled.button`
    position: absolute;
    background: transparent;
    padding: 10px;
    top: 20px;
    right: 20px;
`

const CloseButtonImg = styled.img``

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const Input = styled.input`
    font-size: 20px;
    border: 1px solid #000;
    padding: 10px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
`

const SubmitButton = styled.button`
    padding: 10px 45px;
    background: #00CC99;
    box-shadow: 0 0 20px #08070880;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    font-size: 25px;
    line-height: 120%;
    color: #fff;
`
