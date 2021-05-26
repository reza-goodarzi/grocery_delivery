import styled from 'styled-components';

const SearchInput = ({ children }) => {
	return (
		<SearchInputStyle>
			<Input type="Search" name="search" placeholder="خواروبار مورد نیاز خود را جستجو کنید" />
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

	@media screen and (max-width: 61.25em){
		width: 100%;
	}
`;

const Input = styled.input`
	@media screen and (max-width: 61.25em){
		background-color: #f0f0f0;
		color: #333;
		font-size: 2rem;
		box-shadow: none;
		padding: 2.3rem;
		padding-right: 7rem;

		::placeholder{
			color: #333;
		}
	}
`