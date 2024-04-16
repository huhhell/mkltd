import styled from "styled-components";
import {Link} from "react-router-dom";


interface Props {
    image: string;
    name: string;
}

export default function ImageItem({image, name}: Props) {


    return <Link to='/item'> <Container>
        <ImageContainer>
            <Image src={image} />
        </ImageContainer>
        <Name>{name}</Name>
    </Container>
    </Link>
}

const Container = styled.li`
    background: transparent linear-gradient(140deg, #FFF7FC66 0%, #FFFFFF66 0%, #FFFFFF00 100%) 0% 0% no-repeat padding-box;
    box-shadow: inset 3px 3px 6px #EEE5E9;
    padding: 14px;
    border-radius: 30px;
    backdrop-filter: blur(20px);
`

const ImageContainer = styled.div`
    width: 100%;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 20px;
    aspect-ratio: 1 / 1;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Name = styled.h4`
    color: #fff;
    font-size: 35px;
    line-height: 120%;
`

