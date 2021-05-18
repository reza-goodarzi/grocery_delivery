import { createGlobalStyle } from 'styled-components';

/* ---------------------------------- Fonts --------------------------------- */
import shabnamEOT from '../assets/fonts/Shabnam-Bold-FD.eot';
import shabnamTTF from '../assets/fonts/Shabnam-Bold-FD.ttf';
import shabnamWoff from '../assets/fonts/Shabnam-Bold-FD.woff';
import shabnamWoff2 from '../assets/fonts/Shabnam-Bold-FD.woff2';



const GlobalStyle = createGlobalStyle`

	@font-face {
		font-family: 'shabnam-bold';
		src: url(${shabnamEOT}) format('embedded-opentype');
		src: url(${shabnamTTF}) format('truetype'),
		url(${shabnamWoff}) format('woff'),
		url(${shabnamWoff2}) format('woff2');
	}

	:root{
		--color-primary: #009E7F;
		--color-secondary: #FFAD5F;
		--color-black: #0D1136;
		--color-white: #f7f7f7;
		--color-white2: #fafafa;
		--color-gray: #77798c;
	}

	html, button{
		font-family: 'shabnam';
		font-size: 62.5%;
		font-weight: normal;
		color: var(--color-black);
	}

	body{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

`;

export default GlobalStyle;