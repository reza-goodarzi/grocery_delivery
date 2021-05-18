import styled from 'styled-components';
import { Button } from '../../styles/style';

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import avatarImage from '../../assets/images/avatar.jpg';

const Header = () => {
	return (
		<HeaderStyle>
			<Menu>
				<Avatar src={avatarImage} alt="User Avatar" />
				<Button>
					<FontIcon icon={faQuestionCircle} />
					<span>کمک لازم داری</span>
				</Button>
				<Button>پیشنهادات</Button>
			</Menu>
			<Logo>
				<h1>بقالی</h1>
			</Logo>
		</HeaderStyle>
	)
}

export default Header;

const HeaderStyle = styled.header`
	background-color: var(--color-white2);
	padding: 5px 7rem;
	
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: 10vh;
`;

const Menu = styled.div`
	grid-column: 1 / span 3;
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

const Avatar = styled.img`
	border-radius: 50%;
	height: 4rem;
	width:4rem;
`;

const FontIcon = styled(FontAwesomeIcon)`
	margin-left: 5px;
`

