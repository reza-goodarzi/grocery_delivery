import { useState } from 'react';
import styled from 'styled-components';
import { Button, LinkButton } from '../../styles/style';

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
	const [showSelectLang, setShowSelectLang] = useState(false);
	const [languageData, setLanguageData] = useState(flagData[0]);

	// Show/hide Language List
	function toggleSelectLanguage() {
		setShowSelectLang(pervState => !pervState);
	}

	// Set current language data and render data
	function languageDataHandler(data, e) {
		e.preventDefault();
		setLanguageData(data);
	}

	// Render language list
	const languageList = (
		<SelectLang>
			<List>
				{flagData.map(flag => (
					<li key={flag.name}>
						<LinkButton href="/" onClick={languageDataHandler.bind(null, flag)}>
							<Flag src={flag.src} alt={`Flag ${flag.name}`} />
							<span>{flag.text}</span>
						</LinkButton>
					</li>
				))}
			</List>
		</SelectLang>
	);


	return (
		<>
			<LanguageButtonStyle onClick={toggleSelectLanguage} >
				<Flag src={languageData.src} alt={`Flag ${languageData.name}`} />
				<span>{languageData.text}</span>

				{showSelectLang && languageList}
			</LanguageButtonStyle>
		</>
	)
}

export default LanguageButton;

const LanguageButtonStyle = styled(Button)`
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

const SelectLang = styled.div`
	background-color: #fff;
	box-shadow: var(--shadow-light);
	margin: 2rem;
	padding-left: 2rem;
	border-radius: 5px;

	position: absolute;
	top: 100%;
	right: -20%;

	&::before{
		content: "";
   	position: absolute;
   	width: 0px;
   	height: 0px;
   	border-style: solid;
   	border-width: 0px 8px 9px;
   	border-color: transparent transparent rgb(255, 255, 255);
   	top: -8px;
   	right: 15px;
   	/* box-shadow: rgb(142 142 142 / 14%) -4px -4px 8px -3px; */
   	pointer-events: none;
	}
`;

const Flag = styled.img`
	width: 6rem;
	height: 3rem;
	transform: translateX(3px);
`;

const List = styled.ul`
	list-style: none;
	padding: 0;
`;
