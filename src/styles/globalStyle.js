import { createGlobalStyle } from 'styled-components';

/* ---------------------------------- Fonts --------------------------------- */
import shabnamEOT from '../assets/fonts/Shabnam-Bold-FD.eot';
import shabnamTTF from '../assets/fonts/Shabnam-Bold-FD.ttf';
import shabnamWoff from '../assets/fonts/Shabnam-Bold-FD.woff';
import shabnamWoff2 from '../assets/fonts/Shabnam-Bold-FD.woff2';



const GlobalStyle = createGlobalStyle`

	@font-face {
		font-family: shabnam-bold;
		src: url(${shabnamEOT});
		src: url(${shabnamWoff2}) format('woff'),
		url(${shabnamWoff}) format('woff'),
		url(${shabnamTTF});
	}

	:root{
		--color-primary: #009E7F;
		--color-secondary: #FFAD5F;
		--color-black: #0D1136;
		--color-white: #f7f7f7;
		--color-white2: #fafafa;
		--color-gray: #77798c;
		--color-red: #DB0D0E;
		--color-primary-disabled: #50ac9a;

		--shadow-light: 0 0 3rem #00000003;
		--shadow-dark: 0 3rem 5rem #00000005;
		--shadow-darker: 0 1rem 2rem #00000020;
	}

	html, button, a ,input, textarea{
		font-family: 'Shabnam FD', sans-serif;
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
		background-color: var(--color-white);
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		overflow-x: hidden;
	}

	a,
	a:link,
	a:visited{
      text-decoration: none;
		width: fit-content;
      padding: 1.3rem 1.5rem;
      transition: all 0.2s;
      position: relative;
      font-size: 1.6rem;
      //Change for the <button> element
      border: none;
      cursor: pointer;
		color: var(----color-black);

      display: flex;
      align-items: center;
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
		justify-content: center;

		&:hover{
			color: var(--color-primary);
		}
	}

/* ---------------------------------- Input --------------------------------- */
	input, textarea{
		width: -webkit-fill-available;
		font-size: 1.6rem;
		padding: 1.5rem 1rem;
		border: none;
		box-shadow: var(--shadow-dark);
		border-radius: 5px;
		resize: none;


		&::placeholder{
			color: var(--color-gray)
		}
	}

	// Costume Scroll bar

	// work in firefox
	* {
		scrollbar-width: thin;
		scrollbar-color: rgba(155, 155, 155, 0.7) transparent;
	}

	// work in other browser
	*::-webkit-scrollbar {
		width: 5px;
	}
	*::-webkit-scrollbar-track {
		background: transparent;
	}
	*::-webkit-scrollbar-thumb {
		background-color: rgba(155, 155, 155, 0.7);
		border-radius: 2rem;
		border: none;
	}

`;

export default GlobalStyle;