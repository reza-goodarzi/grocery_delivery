import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loadMore } from "../../store/productsSlice";

function PaginationButton() {
	const dispatch = useDispatch();

	return (
		<Pagination>
			<button onClick={() => dispatch(loadMore())}>
				بارگذاری بیشتر
			</button>
		</Pagination>
	);
}

export default PaginationButton;

const Pagination = styled.div`
	grid-column: 1 / -1;
	justify-self: center;
	align-self: start;
	height: 10rem;

	button{
		background-color: #fff;
		color: var(--color-primary);
		padding: 1rem 2rem;
		box-shadow: 0 0 1rem #00000010;
		font-weight: 600;
		transition: all .5s ease;

		&:hover{
			background-color: var(--color-primary);
			color: #fff;
		}
	}
`;
