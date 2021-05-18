import styled from 'styled-components';

const SearchInput = ({ children }) => {
	return (
		<SearchInputStyle>
			<input type="Search" name="search" placeholder="خواروبار مورد نیاز خود را جستجو کنید" />
			{children}
		</SearchInputStyle>
	)
}

export default SearchInput;


const SearchInputStyle = styled.div`
	width: auto;
	position: relative;
	grid-column: 1 / -1;
	grid-row: 7 / span 1;

	display: flex;
	width: 65rem;
`;