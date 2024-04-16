import styled, {keyframes} from "styled-components";
import {AIItem} from "../../App.tsx";
import galleryImg from '../images/gallery.svg';
import cameraImg from '../images/camera.svg';
import backImg from '../images/back.svg';
import {Link} from "react-router-dom";

interface Props {
    item: AIItem;
}

export default function SecondPage({item}: Props) {


    return <Container>
        <Link to='/'>
            <BackButton>
                <BackImg src={backImg}/>
                <BackText>Go back</BackText>
            </BackButton>
        </Link>
        <ImageCnt>
            <InitialImage src={item.initialImage}/>
            <AIImage src={item.AIImage}/>
        </ImageCnt>
        <ChooseOptions>
            <Link to='/save'>
            <ChooseOptionsItem>
                <ChooseOptionIcon src={galleryImg}/>
                    <ChooseOptionText>Choose photo from gallery</ChooseOptionText>
                </ChooseOptionsItem>
            </Link>
            <ChooseOptionsItem>
                <ChooseOptionIcon src={cameraImg}/>
                <ChooseOptionText>Take photo with camera</ChooseOptionText>
            </ChooseOptionsItem>
        </ChooseOptions>
    </Container>
}

const slideAnimation = keyframes`
    to {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
`

const Container = styled.div`
    height: 100%;
    background: transparent linear-gradient(180deg, #6600FF 0%, #00CC99 100%) 0 0 no-repeat padding-box;
    padding: 50px 30px;
`

const BackButton = styled.button`
    padding: 8px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #FCEFF9 0 0 no-repeat padding-box;
    box-shadow: 0 0 20px #08070880;
    border-radius: 30px;
    margin-bottom: 50px;
`

const BackImg = styled.img``

const BackText = styled.p`
    font-size: 30px;
    font-weight: 600;
`

const ImageCnt = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border: 3px solid #EEE5E9;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    margin-bottom: 40px;
`

const InitialImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const AIImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);

    animation: ${slideAnimation} 2s alternate-reverse infinite;
`

const ChooseOptions = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;

`

const ChooseOptionsItem = styled.div`
    flex: 0 0 45%;
    padding: 20px 10px;
    background: transparent linear-gradient(135deg, #FFF7FC66 0%, #FFFFFF66 0%, #FFFFFF00 100%) 0% 0% no-repeat padding-box;
    box-shadow: inset 3px 3px 6px #EEE5E9;
    border-radius: 20px;
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
`

const ChooseOptionIcon = styled.img`
    width: 70px;
    height: auto;
`

const ChooseOptionText = styled.p`
    color: #fff;
    text-align: center;
`
