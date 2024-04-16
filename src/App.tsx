import styled from "styled-components";
import {BrowserRouter} from "react-router-dom";
import Routes from "./assets/pages/Routes.tsx";
import mainImg from "./assets/images/main01.jpg";
import AIImg from './assets/images/ai.png';

export interface AIItem {
  initialImage: string,
  AIImage: string,
  name: string,
  id: number
}

function App() {
  const items: AIItem[] = [
    {initialImage: mainImg, AIImage: AIImg, name: 'Lego', id: 0},
    {initialImage: mainImg, AIImage: AIImg, name: 'Lego', id: 1},
  ]


  return <BrowserRouter>
    <Container>
      <PhoneContainer>
        <Routes items={items}/>
      </PhoneContainer>
  </Container>
  </BrowserRouter>
}

export default App

const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
  padding: 40px;
`

const PhoneContainer = styled.main`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  border: 5px solid #757575;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  overflow: auto;
`
