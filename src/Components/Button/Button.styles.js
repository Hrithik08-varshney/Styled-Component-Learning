import styled ,{keyframes} from 'styled-components';

//styled button
export const StyledButton = styled.button`
 background: transparent;
 background-color: ${(props) => props.variant === "outline" ? "#FFF" : "blue"};
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  &:hover{
 background-color: ${(props) => props.variant !== "outline" ? "#FFF" : "blue"};

  }
`;

//coping styledButton css
export const FancyButton = styled(StyledButton)`
background-image:linear-gradient(to right,#f6d365 0%, #fda085 100%);
border:none;
`;

//adding attributes to button
export const SubmitButton = styled(StyledButton).attrs({
    type:"submit"
})`
     box-shadow: 0 9px #999;
     &:active {
        background-color: ${(props) => props.variant !== "outline" ? "#FFF" : "blue"};
        box-shadow:0 5px #666;
        transform: translate(4px)
     }
`;

//animation in styled component
const rotate = keyframes`
from {
    transform: rotate(0deg);
}
to{
    transform:rotate(360deg);
}
`;

export const AnimatedLogo = styled.img`
height: 40vmin;
pointer-events: none;
animation: ${rotate} infinite 2s linear;
`;

export const DarkButton = styled(StyledButton)`

border: 2px solid ${(props)=>props.theme.dark.primary};
background-color: ${(props)=>props.theme.dark.primary};
color: ${(props)=>props.theme.dark.text}

`;
