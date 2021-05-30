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

		--shadow-light: 0 0 3rem #00000003;
		--shadow-dark: 0 3rem 5rem #00000005;
	}

	html, button, a ,input{
		font-family: 'shabnam';
		font-size: 62.5%;
		font-weight: normal;
		color: var(--color-black);

		@media screen and (max-width: 80em){
			font-size: 50%;
		}

		@media screen and (max-width: 61.25em){
			font-size: 43.75%;
		}

		@media screen and (max-width: 37.5em){
			font-size: 31.25%;
		}
	}

	h1{
		font-size: 3rem;
		margin: 0;
	}
	
	p{
		font-size: 1.6rem;
	}

	body{
		background-color: var(--color-white2);
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	a,
	a:link,
	a:visited{
      text-decoration: none;
      padding: 1.3rem 1.5rem;
      border-radius: 5rem;
      transition: all 0.2s;
      position: relative;
      font-size: 1.6rem;
		background-color: transparent;
      //Change for the <button> element
      border: none;
      cursor: pointer;
		color: var(----color-black);

      display: flex;
      align-items: center;
		transition: color .2s ease-in;

	}

	button{
		text-decoration: none;
      padding: 1.3rem 1.5rem;
      border-radius: 5px;
      transition: all 0.2s;
      position: relative;
      font-size: 1.6rem;
      background-color: transparent;
      //Change for the <button> element
      border: none;
      cursor: pointer;
		outline: none;

		display: flex;
      align-items: center;
		transition: color .2s ease-in;

		&:hover{
			color: var(--color-primary);
		}
	}

/* ---------------------------------- Input --------------------------------- */
	input{
		width: 100%;
		font-size: 1.6rem;
		padding: 1.5rem 1rem;
		border: none;
		box-shadow: var(--shadow-dark);
		border-radius: 5px;

		&::placeholder{
			color: var(--color-gray)
		}
	}

`;

export default GlobalStyle;