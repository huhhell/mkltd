import styled from "styled-components";


function App() {


  return <Container>
    <PhoneContainer>

    </PhoneContainer>
  </Container>
}

export default App

const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`

const PhoneContainer = styled.main`
    width: 390px;
    height: 844px;
    margin: 0 auto;
    border: 2px solid #444;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
`
