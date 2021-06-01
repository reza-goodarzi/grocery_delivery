import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FontIcon } from "../../styles/style";

const CartFloatButton = ({ setShowModal }) => {
	return (
		<Container onClick={() => setShowModal(true)}>
			<span>
				<FontIcon icon={faShoppingBag} />
				5 آیتم
			</span>
			<Price>
				550,000 تومان
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


