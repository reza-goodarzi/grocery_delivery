import styled from "styled-components";
const data = [1, 2, 3, 4, 5, 6, 4, 6, 8, 6, 45, 6, 2, 4, 6, 2, 4, 6, 42, 5];
function YourOrderList() {

	return (
		<Container>
			{data.map(() => (
				<List>
					<p className="quantity">1</p>
					<p className="divider">x</p>
					<p className="name">گوشت قرمز</p>
					<p className="weight">12 کیلو</p>
					<p className="price">60,000 ت</p>
				</List>
			))}
		</Container>
	);
}

export default YourOrderList;

const Container = styled.div`
	height: 50vh;
	overflow-y: scroll;
	margin: 3rem 0;
	border-bottom: 1px solid #ddd;
`;

const List = styled.span`
	display: flex;
	align-items: center;

	p{
		margin: 1rem 7px;
		color: var(--color-gray);
	}

	.quantity{
		font-size: 2rem;
		color: var(--color-black);
	}

	.divider{
		margin-right: 0;
	}

	.weight{
		margin-right: 0
	}
`;