import styled from 'styled-components';

// image
import background from '../../assets/images/bg.png';

function Search() {
	return (
		<SearchStyle>
			<Background />
		</SearchStyle>
	)
}

export default Search;

const SearchStyle = styled.section`
	height: 88vh;
`;

const Background = styled.div`
	background-image: url(${background});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 100%;
	width: 100%;
`
