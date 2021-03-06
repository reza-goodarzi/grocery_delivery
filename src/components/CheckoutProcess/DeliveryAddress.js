import { useState } from "react";
import { ErrorMessage } from "../../styles/style";

import Card from "../UI/Card";
import Container from "../UI/Container";
import CheckoutModal from "./CheckoutModal";


function DeliveryAddress() {
	const [addresses, setAddresses] = useState(JSON.parse(localStorage.getItem('addresses')) || []);
	const [title, setTitle] = useState('');
	const [address, setAddress] = useState('');
	const [currentId, setCurrentId] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [isOnEdit, setIsOnEdit] = useState(false);
	const [error, setError] = useState('');

	// add new address to our addresses and save it in localStorage
	function addAddressHandler() {
		if (isAddressExist()) {
			setError('این ادرس وجود دارد');
			return;
		}

		if (!title || !address) {
			setError('لطفا تمام فیلد ها را کامل کنید');
			return;
		}
		const newAddresses = [
			...addresses,
			{
				id: title.split(' ').join(''),
				title,
				address,
				selected: addresses.length === 0 ? true : false,
			},
		];

		changeAddresses(newAddresses);
		setShowModal(false); // hide modal
	}


	function editAddressesHandler() {
		if (!title || !address) {
			setError('لطفا تمام فیلد ها را کامل کنید');
			return;
		}

		const newAddresses = addresses.map(prevAddress => (
			prevAddress.id === currentId ? {
				...prevAddress,
				id: title.split(' ').join(''),
				title,
				address,
			} :
				prevAddress
		));

		changeAddresses(newAddresses);
		setShowModal(false); // hide modal

	}

	// Check address is exist or not
	function isAddressExist() {
		return addresses.some(address => address.id === title.split(' ').join(''));
	}

	// store new Addresses to localStorage and state
	function changeAddresses(newAddresses) {
		localStorage.setItem('addresses', JSON.stringify(newAddresses));
		setAddresses(JSON.parse(localStorage.getItem('addresses')));
	}

	function changeTitleHandler(e) {
		setTitle(e.target.value);
	}

	function changeAddressHandler(e) {
		setAddress(e.target.value);
	}

	function onSelectHandler(id) {
		const newAddresses = addresses.map(address => {
			return (address.id === id ?
				{ ...address, selected: true } :
				{ ...address, selected: false }
			);
		});

		changeAddresses(newAddresses);
	}

	// delete address use want
	function onDeleteHandler(e, curAddress) {
		e.stopPropagation();

		const newAddresses = addresses.filter(address => address !== curAddress);

		// check selected address is delete, if yes select first address of our addresses
		const selectedAddressIsDeleted = newAddresses.some(address => address.selected === false);
		if (selectedAddressIsDeleted) newAddresses[0] = { ...newAddresses[0], selected: true };

		changeAddresses(newAddresses);
	}

	// edit address use want
	function onEditHandler(e, address) {
		e.stopPropagation();

		setAddress(address.address);
		setTitle(address.title);
		setIsOnEdit(true);
		setShowModal(true);
		setError('');

		setCurrentId(address.id);
	}

	function onAddAddressHandler() {
		setShowModal(true);
		setIsOnEdit(false);
		setAddress('');
		setTitle('');
		setError('');
	}

	return (
		<>
			<Container
				onClick={onAddAddressHandler}
				title="نشانی"
				number='1'
				textButton="اضافه کردن"
			>
				{addresses.length !== 0 ?
					addresses.map(address => (
						<Card
							key={address.id}
							title={address.title}
							subtitle={address.address}
							selected={address.selected}
							onSelect={() => onSelectHandler(address.id)}
							onDelete={e => onDeleteHandler(e, address)}
							onEdit={e => onEditHandler(e, address)}
						/>
					)) :
					<p>آدرسی وجود ندارد	</p>
				}
			</Container>

			{showModal &&
				<CheckoutModal
					onClose={() => setShowModal(false)}
					onClick={isOnEdit ? editAddressesHandler : addAddressHandler}
					title={isOnEdit ? 'ویرایش آدرس' : 'اضافه کردن آدرس جدید'}
					textButton='ذخیره ادرس'
				>
					<ErrorMessage>{error}</ErrorMessage>
					<input type="text" placeholder='عنوان خود را وارد کنید' onChange={changeTitleHandler} value={title} />
					<textarea type="text" placeholder='آدرس خود را وارد کنید' onChange={changeAddressHandler} value={address} />
				</CheckoutModal>
			}
		</>
	);
}

export default DeliveryAddress;