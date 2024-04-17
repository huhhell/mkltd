import styled from "styled-components";
import Header from "../components /Header/Header.tsx";
import ImageItem from "../components /ImageItem/ImageItem.tsx";
import {AIItem} from "../../App.tsx";


interface Props {
    items: AIItem[];
    isLogin: boolean;
}
export default function FirstPage({items, isLogin}: Props) {

    return <Container>
        <Header isLogin={isLogin}/>
        <List>
            {items.map(i => <ImageItem image={i.initialImage} name={i.name} key={i.id} />)}
        </List>
        <Footer>
            <Mail href='mailto:support@avgen.me'>Get help at support@avgen.me</Mail>
            <Copyright>Copyright © 2024 Mook Ltd. All right are reserved.</Copyright>
        </Footer>
    </Container>
}

const Container = styled.div`
    background: transparent linear-gradient(180deg, #6600FF 0%, #00CC99 100%) 0 0 no-repeat padding-box;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const List = styled.ul`
    padding: 0 33px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 40px;
`

const Footer = styled.footer`
    padding: 30px 50px;
    background: #fff;
    -webkit-border-radius: 50px 50px 0 0;
    -moz-border-radius: 50px 50px 0 0;
    border-radius: 50px 50px 0 0;
`
const Mail = styled.a`
    display: block;
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    line-height: 120%;
    font-weight: 500;
    color: #000;
`

const  Copyright = styled.p`
    font-size: 20px;
    line-height: 120%;
    font-weight: 200;
    color: #080708;
`
