import styled from "styled-components";
import {Link} from "react-router-dom";

interface Props {
    AIImage: string,
}

export default function ThirdPage({AIImage}: Props) {

    return <Container>
        <ImageCnt>
            <Image src={AIImage}/>
        </ImageCnt>
        <SaveButton>Save</SaveButton>
        <Link to='/'><MoreButton>More pics</MoreButton></Link>
    </Container>
}

const Container = styled.div`
    padding: 30px;
    height: 100%;
    background: transparent linear-gradient(180deg, #6600FF 0%, #00CC99 100%) 0 0 no-repeat padding-box;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const ImageCnt = styled.div`
    width: 100%;
    aspect-ratio: 3/5;
    margin-bottom: 35px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    overflow: hidden;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const SaveButton = styled.button`
    width: 90%;
    background: #00CC99;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
    margin-bottom: 20px;
    color: #fff;
    font-size: 27px;
    line-height: 120%;
    padding: 15px 0;
    box-shadow: 0 0 20px #080F0FBF;
`

const MoreButton = styled.button`
    font-size: 27px;
    line-height: 120%;
    background: #fff;
    padding: 15px 36px;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
    color: #000;
    

`
