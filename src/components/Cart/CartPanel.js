import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

// import Overlay from "../UI/Overlay";
import CartItem from "./CartItem";
import { CircleButton, FontIcon } from "../../styles/style";
import EmptyCart from "./EmptyCart";

const CartPanel = ({ showModal, setShowModal }) => {
	const items = useSelector(state => state.cart.items);

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
						<span>{`${items.length} آیتم`}</span>
					</NumberOfItems>
				</Header>
				<Items>
					{items.length > 0 ?
						items.map(item => <CartItem key={item.id} item={item} />) :
						(
							<div className="empty">
								<EmptyCart />
								<p>هیج آیتمی وجود ندارد</p>
							</div>
						)
					}
				</Items>
				<Buttons>
					<VoucherBtn>ایا کد تخفیف دارید؟</VoucherBtn>
					<CheckoutButton to='/checkout'>
						<span className="text">پرداخت</span>
						<span className="price">
							{`${items.reduce((acc, item) => (acc + item.totalPrice), 0) * 1000} تومان`}
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
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const VoucherBtn = styled.button`
	color: var(--color-primary);
	font-weight: 500;
`;

const CheckoutButton = styled(Link)`
	&,&:link, &:visited{
		background-color: var(--color-primary);
		border-radius: 3rem;
		font-weight: bold;
		width: 90%;
		margin-bottom: 2rem;
		padding: .5rem;
		display: flex;
		justify-content: space-between;
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