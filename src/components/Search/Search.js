import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { FontIcon } from '../../styles/style';

// image
import background from '../../assets/images/bg.png';
import SearchInput from './SearchInput';

function Search() {
	return (
		<SearchStyle>
			<h1>سفارشات خود را در 90 دقیقه تحویل بگیرید</h1>
			<p>غذا و خوراکی های سالم خود را همه روزه درب خانه تان تحویل بگیرید</p>
			<SearchInput>
				<Button>
					<FontIcon icon={faSearch} />
					<span>جستجو</span>
				</Button>
			</SearchInput>
		</SearchStyle>
	)
}

export default Search;

const SearchStyle = styled.section`
	background-image: url(${background});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 88vh;
	width: 100%;

	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(12, 1fr);

	justify-content: center;
	justify-items: center;
	align-items: center;

	h1{
		grid-column: 1 / -1;
		grid-row: 4 / span 1;
		font-size: 4.5rem
	}

	p{
		grid-column: 1 / -1;
		grid-row: 5 / span 1;
		font-size: 1.8rem;
		color: var(--color-gray);
	}
`;

const Button = styled.button`
	background-color: var(--color-primary);
	color: var(--color-white);
	border-radius: 5px 0 0 5px;
`;
