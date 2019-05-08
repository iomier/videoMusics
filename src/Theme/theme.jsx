import { createGlobalStyle } from 'styled-components';
import '../Assets/Webfont/fonts.css';
export const GlobalStyle = createGlobalStyle`
body {
    color: #fefefe;
    font-family: EstedadMedium;
    margin:0;
    padding: 0;
    background-color:#d128fa;
    direction: rtl;
}
`;
export const theme = {
  black: '#040509',
  white: '#fefefe',
  primary: '#d128fa',
  secondary: '#4b3bc6',
  accent1: '#a718d2',
  accent2: '#3c2854',
  accent3: '#be9ccc'
};
