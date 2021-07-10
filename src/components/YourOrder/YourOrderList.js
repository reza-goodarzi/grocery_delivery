import { useSelector } from "react-redux";
import styled from "styled-components";
import EmptyCart from "../Cart/EmptyCart";

function YourOrderList() {
	const cart = useSelector(state => state.cart);

	return (
		<Container>
			{cart.totalQuantity > 0 ?
				cart.items.map((item, i) => (
					<List key={i}>
						<p className="quantity">{item.quantity}</p>
						<p className="divider">x</p>
						<p className="name">{item.name}</p>
						<p className="price">{`${item.price * 1000} تومان`}</p>
					</List>
				)) :
				<EmptyCart />
			}

		</Container>
	);
}

export default YourOrderList;

const Container = styled.div`
	max-height: 50vh;
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

	.name{
		width: 12rem;
	}
`;
