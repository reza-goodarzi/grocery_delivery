import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ErrorMessage } from "../../styles/style";
import Card from "../UI/Card";
import Container from "../UI/Container";
import VoucherButton from "../VoucherButton/VoucherButton";
import CheckoutModal from "./CheckoutModal";

function PaymentOption() {
	const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')) || []);
	const [cardInput, setCardInput] = useState('');
	const [editMode, setEditMode] = useState(false);
	const [index, setIndex] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [error, setError] = useState('');
	const totalQuantity = useSelector(state => state.cart.totalQuantity);

	function addCard() {
		if (!cardInput || cardInput === '') {
			setError('لطفا شماره کارت خود را وارد کنید');
			return;
		}

		if (cardInput.length !== 16) {
			setError('لطفا شماره کارت معتبر وارد کنید');
			return;
		}

		if (cardIsExist()) {
			setError('این شماره کارت وجود دارد');
			return;
		}

		const newCards = [
			...cards,
			{
				number: cardInput,
				selected: cards.length === 0 ? true : false,
			}
		];

		changeCards(newCards);
		setShowModal(false);
	}

	function editCardHandler() {
		if (!cardInput || cardInput === '') {
			setError('لطفا شماره کارت خود را وارد کنید');
			return;
		}

		if (cardInput.length !== 16) {
			setError('لطفا شماره کارت معتبر وارد کنید');
			return;
		}


		const newCards = cards.map((prevCard, i) => (
			i === index ? {
				...prevCard,
				number: cardInput,
			} :
				prevCard
		));

		changeCards(newCards);
		setShowModal(false); // hide modal

	}

	function changeCards(newCards) {
		localStorage.setItem('cards', JSON.stringify(newCards));
		setCards(JSON.parse(localStorage.getItem('cards')));
	}

	function cardIsExist() {
		return cards.some(card => card.number === cardInput);
	}

	function onAddCardHandler() {
		setError('');
		setCardInput('');
		setEditMode(false);
		setShowModal(true);
	}

	function onEditHandler(e, number, index) {
		e.stopPropagation();

		setError('');
		setCardInput(number);
		setEditMode(true);
		setShowModal(true);

		setIndex(index);
	}

	function onDeleteHandler(e, index) {
		e.stopPropagation();

		const newCards = cards.filter((_, i) => i !== index);

		// check selected number is delete, if yes select first number of our numbers
		const selectedCardIsDeleted = newCards.some(card => card.selected === false);
		if (selectedCardIsDeleted) newCards[0] = { ...newCards[0], selected: true };

		changeCards(newCards);
	}

	function onSelectHandler(index) {
		const newCards = cards.map((card, i) => {
			return (i === index ?
				{ ...card, selected: true } :
				{ ...card, selected: false }
			);
		});

		changeCards(newCards);
	}

	function onChangeHandler(e) {
		setCardInput(e.target.value);
	}

	return (
		<>
			<Container
				number={4}
				title='شماره کارت '
				textButton='اضافه کردن شماره کارت'
				onClick={onAddCardHandler}
			>
				{cards.length !== 0 ?
					cards.map((card, index) => (
						<Card
							key={index}
							title={card.selected ? "انتخاب شده" : "انتخاب نشده"}
							subtitle={`**** **** **** ${card.number.slice(card.number.length - 5, -1)}`}
							selected={card.selected}
							onEdit={e => onEditHandler(e, card.number, index)}
							onDelete={e => onDeleteHandler(e, index)}
							onSelect={() => onSelectHandler(index)}
						/>
					)) :
					<p>شماره کارت ای وجود ندارد	</p>
				}

				<Buttons>
					<VoucherButton />
					<CheckoutButton to='/order_received' className={totalQuantity === 0 && 'disabled'}>
						پرداخت
					</CheckoutButton>
				</Buttons>

			</Container>
			{showModal &&
				<CheckoutModal
					onClose={() => setShowModal(false)}
					title="اضافه کردن شماره کارت"
					textButton="ذخیره شماره کارت"
					onClick={editMode ? editCardHandler : addCard}
				>
					<ErrorMessage>{error}</ErrorMessage>
					<input type="number" onChange={onChangeHandler}
						value={cardInput} placeholder="شماره کارت کارت خود را وارد کنید"
					/>
				</CheckoutModal>
			}
		</>
	);
}

export default PaymentOption;

// TODO TEMP (MUST Completely Change)
const Buttons = styled.div`
	margin-top: 3rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const CheckoutButton = styled(Link)`
	&,&:link, &:visited{
		background-color: var(--color-primary);
		border-radius: 3rem;
		font-weight: bold;
		width: 100%;
		margin-bottom: 2rem;
		padding: .5rem;
		display: flex;
		justify-content: center;
		padding: 1.5rem 0;
		color: var(--color-white);

		&.disabled{
			pointer-events: none;
			background-color: var(--color-primary-disabled);
		}
	}
`;