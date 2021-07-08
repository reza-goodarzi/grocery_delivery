import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FontIcon } from "../../styles/style";

const CartFloatButton = ({ setShowModal }) => {
	const cart = useSelector(state => state.cart);
	const price = Math.floor(cart.items.reduce((acc, item) => (acc + item.totalPrice), 0) * 1000);

	return (
		<Container className={cart.totalQuantity <= 0 && 'disabled'} onClick={() => setShowModal(true)}>
			<span>
				<FontIcon icon={faShoppingBag} />
				<span>{`${cart.items.length} آیتم`}</span>
			</span>
			<Price>
				{`${price} تومان`}
			</Price>
		</Container>
	);
};

export default CartFloatButton;

const Container = styled.button`
	position: fixed;
	left: 0;
	top: 45%;
	background-color: var(--color-primary);
	color: var(--color-white);
	padding: 1rem;
	border-radius: 0 5px 5px 0;
	display: flex;
	flex-direction: column;
	z-index: 100;

	transform-origin: left;
	visibility: visible;
	opacity: 1;
	transform: scale(1);

	transition: all .2s ease-out;

	&.disabled{
		visibility: hidden;
		opacity: 0;
		transform: scale(.8);
	}

	span{
		margin: 7px 0;
	}
	
	&:hover{
		color: var(--color-white);
	}
`;

const Price = styled.span`
	background-color: var(--color-white);
	color: var(--color-primary);
	border-radius: 1rem;
	padding: 1rem;
	font-size: 1.3rem;
`;


