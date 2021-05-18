import styled from 'styled-components';

// image
import background from '../../assets/images/bg.png';
import SearchInput from './SearchInput';

function Search() {
	return (
		<SearchStyle>
			<SearchInput />
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
`;
