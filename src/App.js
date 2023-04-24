import './App.css';
import {ThemeProvider,createGlobalStyle} from "styled-components";
import logo from "./logo.svg";
import StyledButton,{FancyButton, SubmitButton} from './Components/Button/Button';
import { AnimatedLogo, DarkButton } from './Components/Button/Button.styles';


const theme = {
  dark:{
    primary :"#000",
    text:"#fff"
  },
  light:{
     primary:"#fff",
     text:"#000"
  },
  fontFamily:"Segoe UI"
}

const GlobalStyle = createGlobalStyle`
button{
  font-family: ${(props)=> props.theme.fontFamily};
}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <div className="App">
        <StyledButton>Styled Button</StyledButton>
        <br/>
        <StyledButton variant="outline">Styled Button</StyledButton>
         <FancyButton as="div">Fancy Button</FancyButton>
         <SubmitButton> Submit Button</SubmitButton>
         <AnimatedLogo src={logo}/>
         <DarkButton>Dark Button</DarkButton>
    </div>
    </ThemeProvider>
  );
}

export default App;
