import styled from 'styled-components';
import LanguageButton from '../Language/LanguageButton';
import Avatar from '../Avatar/Avatar';
import { Link } from 'react-router-dom';

// Icon
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontIcon } from '../../styles/style';

const Header = () => {
	return (
		<HeaderStyle>
			<Menu>
				<Avatar />
				<LanguageButton />
				<HeaderButton>
					<FontIcon icon={faQuestionCircle} />
					<span>کمک لازم داری</span>
				</HeaderButton>
				<HeaderButton>پیشنهادات</HeaderButton>
			</Menu>
			<Logo>
				<Link to='/'><h1>بقالی</h1></Link>
			</Logo>
		</HeaderStyle>
	);
};

export default Header;

const HeaderStyle = styled.header`
	background-color: var(--color-white2);
	padding: 0 4rem;
	
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: 12vh;

	@media screen and (max-width: 61.25em){
		background-color: inherit;
	}
`;

const Menu = styled.div`
	grid-column: 1 / span 6;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const Logo = styled.div`
	grid-column: 8 / -1;
	color: var(--color-primary);
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const HeaderButton = styled.button`
	@media screen and (max-width: 61.25em){
		display: none;
	}
`;

