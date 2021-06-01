import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FontIcon, XButton } from "../../styles/style";
// import Overlay from "../UI/Overlay";
import BasketItem from "./BasketItem";

const BasketModal = ({ showModal, setShowModal }) => {

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<>
			{/* {showModal && <Overlay onClick={closeModal} />} */}
			<BasketModalStyle showModal={showModal}>
				<Header>
					<CloseModal onClick={closeModal}>X</CloseModal>
					<NumberOfItems>
						<FontIcon icon={faShoppingBag} />
					5 آیتم
				</NumberOfItems>
				</Header>
				<Items>
					<BasketItem />
					<BasketItem />
					<BasketItem />
					<BasketItem />
					<BasketItem />
				</Items>
				<Buttons>
					<VoucherBtn>ایا کد تخفیف دارید؟</VoucherBtn>
					<CheckoutButton>
						<span className="text">پرداخت</span>
						<span className="price">550,000 تومان</span>
					</CheckoutButton>
				</Buttons>
			</BasketModalStyle>
		</>
	);
};

export default BasketModal;

const BasketModalStyle = styled.div.attrs(props => (
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

const CloseModal = styled(XButton)`
	padding: 0 2rem;
`;

const Items = styled.div`
	width: 100%;
	color: whitesmoke;
	height: 70vh;
	color: black;
	overflow-y: scroll;

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

const CheckoutButton = styled.button`
	background-color: var(--color-primary);
	border-radius: 3rem;
	font-weight: bold;
	width: 90%;
	margin-bottom: 2rem;
	padding: .5rem;
	display: flex;
	justify-content: space-between;

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