import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

// import Overlay from "../UI/Overlay";
import CartItem from "./CartItem";
import { CircleButton, FontIcon } from "../../styles/style";
import EmptyCart from "./EmptyCart";
import VoucherButton from "../VoucherButton/VoucherButton";

const CartPanel = ({ showModal, setShowModal }) => {
	const cart = useSelector(state => state.cart);
	const price = Math.floor(cart.items.reduce((acc, item) => (acc + item.totalPrice), 0) * 1000 * cart.discount);


	const closePanel = () => {
		setShowModal(false);
	};

	return (
		<>
			<CartPanelStyle showModal={showModal}>
				<Header>
					<ClosePanel onClick={closePanel}>X</ClosePanel>
					<NumberOfItems>
						<FontIcon icon={faShoppingBag} />
						<span>{`${cart.items.length} آیتم`}</span>
					</NumberOfItems>
				</Header>
				<Items>
					{cart.totalQuantity > 0 ?
						cart.items.map(item => <CartItem key={item.id} item={item} />) :
						<EmptyCart />
					}
				</Items>
				<Buttons>
					<VoucherButton />
					<CheckoutButton to='/checkout' className={cart.totalQuantity === 0 && 'disabled'}>
						<span className="text">پرداخت</span>
						<span className="price">
							{`${price} تومان`}
						</span>
					</CheckoutButton>
				</Buttons>
			</CartPanelStyle>
		</>
	);
};

export default CartPanel;

const CartPanelStyle = styled.div.attrs(props => (
	{
		showModal: props.showModal
	}
))`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 30%;
	background-color: #fff;
	box-shadow: 0 0 1rem #00000050;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 101;
	
	transition: transform .25s ease;
	transform: translateX(${props => props.showModal ? '0%' : '-100%'});
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	font-size: 1.8rem;
	padding: 1.5rem 0;
	border-bottom: 1px solid #dde;
`;

const NumberOfItems = styled.div`
	color: var(--color-primary);
	padding: 0 2rem;
`;

const ClosePanel = styled(CircleButton)`
	padding: 0 2rem;
`;

const Items = styled.div`
	width: 100%;
	/* color: whitesmoke; */
	height: 70vh;
	color: black;
	overflow-y: scroll;

	.empty{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 5rem;

		svg{
			width: 18rem;
		}
	}
`;

const Buttons = styled.div`
	margin-top: auto;
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CheckoutButton = styled(Link)`
	&,&:link, &:visited{
		background-color: var(--color-primary);
		border-radius: 3rem;
		font-weight: bold;
		width: 97%;
		margin-bottom: 2rem;
		padding: .5rem;
		display: flex;
		justify-content: space-between;

		&.disabled{
			pointer-events: none;
			background-color: var(--color-primary-disabled);
		}
	}
	
	.text{
		color: var(--color-white);
		padding: 1rem;
	}

	.price{
		background-color: var(--color-white);
		color: var(--color-primary);
		padding: 1.2rem;
		border-radius: 3rem;
	}
`;