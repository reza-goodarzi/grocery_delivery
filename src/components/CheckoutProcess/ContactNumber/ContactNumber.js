import { useState } from "react";
import { ErrorMessage } from "../../../styles/style";
import Card from "../../UI/Card";
import Container from "../../UI/Container";
import CheckoutModal from "../CheckoutModal";

function ContactNumber() {
	const [numbers, setNumbers] = useState(JSON.parse(localStorage.getItem('numbers')) || []);
	const [numberInput, setNumberInput] = useState('');
	const [editMode, setEditMode] = useState(false);
	const [index, setIndex] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [error, setError] = useState('');

	function addNumber() {
		if (!numberInput || numberInput === '') {
			setError('لطفا شماره خود را وارد کنید');
			return;
		}

		if (numberIsExist()) {
			setError('این شماره وجود دارد');
			return;
		}

		const newNumbers = [
			...numbers,
			{
				number: numberInput,
				selected: numbers.length === 0 ? true : false,
			}
		];

		changeNumbers(newNumbers);
		setShowModal(false);
	}

	function editNumberHandler() {
		if (!numberInput || numberInput === '') {
			setError('لطفا شماره خود را وارد کنید');
			return;
		}


		const newNumbers = numbers.map((prevNumber, i) => (
			i === index ? {
				...prevNumber,
				number: numberInput,
			} :
				prevNumber
		));

		changeNumbers(newNumbers);
		setShowModal(false); // hide modal

	}

	function changeNumbers(newNumbers) {
		localStorage.setItem('numbers', JSON.stringify(newNumbers));
		setNumbers(JSON.parse(localStorage.getItem('numbers')));
	}

	function numberIsExist() {
		return numbers.some(number => number.number === numberInput);
	}

	function onAddNumberHandler() {
		setError('');
		setNumberInput('');
		setEditMode(false);
		setShowModal(true);
	}

	function onEditHandler(e, number, index) {
		e.stopPropagation();

		setError('');
		setNumberInput(number);
		setEditMode(true);
		setShowModal(true);

		setIndex(index);
	}

	function onDeleteHandler(e, index) {
		e.stopPropagation();

		const newNumbers = numbers.filter((_, i) => i !== index);

		// check selected number is delete, if yes select first number of our numbers
		const selectedNumberIsDeleted = newNumbers.some(number => number.selected === false);
		if (selectedNumberIsDeleted) newNumbers[0] = { ...newNumbers[0], selected: true };

		changeNumbers(newNumbers);
	}

	function onSelectHandler(index) {
		const newNumbers = numbers.map((number, i) => {
			return (i === index ?
				{ ...number, selected: true } :
				{ ...number, selected: false }
			);
		});

		changeNumbers(newNumbers);
	}

	function onChangeHandler(e) {
		setNumberInput(e.target.value);
	}

	return (
		<>
			<Container
				number={3}
				title='شماره تماس'
				textButton='اضافه کردن شماره'
				onClick={onAddNumberHandler}
			>
				{numbers.length !== 0 ?
					numbers.map((number, index) => (
						<Card
							key={index}
							title={number.selected ? "انتخاب شده" : "انتخاب نشده"}
							subtitle={number.number}
							selected={number.selected}
							onEdit={e => onEditHandler(e, number.number, index)}
							onDelete={e => onDeleteHandler(e, index)}
							onSelect={() => onSelectHandler(index)}
						/>
					)) :
					<p>شماره ای وجود ندارد	</p>
				}

			</Container>
			{showModal &&
				<CheckoutModal
					onClose={() => setShowModal(false)}
					title="اضافه کردن شماره"
					textButton="ذخیره شماره"
					onClick={editMode ? editNumberHandler : addNumber}
				>
					<ErrorMessage>{error}</ErrorMessage>
					<input type="number" onChange={onChangeHandler} value={numberInput} placeholder="شماره خود را وارد کنید" />
				</CheckoutModal>
			}
		</>
	);
}

export default ContactNumber;
