import styled from "styled-components";
import {BrowserRouter} from "react-router-dom";
import Routes from "./assets/pages/Routes.tsx";


function App() {


  return <BrowserRouter>
    <Container>
      <PhoneContainer>
        <Routes />
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
