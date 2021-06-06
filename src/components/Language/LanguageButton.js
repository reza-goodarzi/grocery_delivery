import { useEffect, useRef, useState } from 'react';
import CardPopOver from '../UI/CardPopOver';

import styled from 'styled-components';

// Flag Icon
import iran from '../../assets/images/flagIcon/iran.svg';
import usa from '../../assets/images/flagIcon/united-states.svg';
import spain from '../../assets/images/flagIcon/spain.svg';

const flagData = [
	{
		name: "iran",
		text: 'فارسی',
		src: iran
	},
	{
		name: "usa",
		text: 'انگلیسی',
		src: usa
	},
	{
		name: "spain",
		text: 'اسپانیایی',
		src: spain
	},
];

const LanguageButton = () => {
	const containerRef = useRef();
	const [showSelectLang, setShowSelectLang] = useState(false);
	const [languageData, setLanguageData] = useState(flagData[0]);

	// Show/hide Language List
	function toggleSelectLanguage() {
		console.log('HI');
		setShowSelectLang(!showSelectLang);
	}

	// Set current language data and render data
	function languageDataHandler(data, e) {
		e.preventDefault();
		setLanguageData(data);
	}

	useEffect(() => {
		// Hide Card when user click outside CardPopOver component
		function outsideClickHandler(event) {
			console.log(containerRef);
			if (containerRef.current && !containerRef.current.contains(event.target)) {
				setShowSelectLang(false);
			}
		}

		document.addEventListener('mousedown', outsideClickHandler);

		return () => {
			document.removeEventListener('mousedown', outsideClickHandler);
		};
	});

	// Render language list
	const languageList = (
		<CardPopOver setToHide={setShowSelectLang}>
			{flagData.map(flag => (
				<li key={flag.name}>
					<a href="/" onClick={languageDataHandler.bind(null, flag)}>
						<Flag src={flag.src} alt={`Flag ${flag.name}`} />
						<span>{flag.text}</span>
					</a>
				</li>
			))}
		</CardPopOver>
	);


	return (
		<>
			<LanguageButtonStyle onClick={toggleSelectLanguage} ref={containerRef} >
				<Flag src={languageData.src} alt={`Flag ${languageData.name}`} />
				<span>{languageData.text}</span>
				{showSelectLang && languageList}
			</LanguageButtonStyle>
		</>
	);
};

export default LanguageButton;

const LanguageButtonStyle = styled.button`
	background-color: #fff;
	border-radius: 3px;
	border: 1px solid #00000010;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px ;
	color: var(--color-primary);
	margin: 0 2rem;

	position: relative;

	span{
		transform: translateX(1rem);
	}
`;

const Flag = styled.img`
	width: 6rem;
	height: 3rem;
	transform: translateX(3px);
`;
