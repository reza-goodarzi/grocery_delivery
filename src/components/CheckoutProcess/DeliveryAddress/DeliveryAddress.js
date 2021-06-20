import { useState } from "react";

import Card from "../../UI/Card";
import Container from "../../UI/Container";
import CheckoutModal from "../CheckoutModal";

function DeliveryAddress() {
	const [addresses, setAddresses] = useState(null);
	const [showModal, setShowModal] = useState(false);


	function addAddressHandler() {
		const data = [
			{
				name: '',
				address: '',
				selected: false,
			}
		];
	}

	return (
		<div>
			<Container
				onClick={() => setShowModal(true)}
				title="نشانی"
				showNumber
				number='1'
				showButton
				textButton="اضافه کردن"
			>
				{addresses ?
					addresses.map(address => (
						<Card title={address.name} subtitle={address.address} selected={address.selected} />
					)) :
					<p>آدرسی وجود ندارد	</p>
				}
			</Container>

			{showModal &&
				<CheckoutModal
					onClose={() => { setShowModal(false); }}
					onClick={addAddressHandler}
					title='اضافه کردن ادرس جدید'
					textButton='ذخیره ادرس'
					subject='موضوع'
				>
					<input type="text" placeholder='موضوع' />
					<textarea type="text" placeholder='ادرس' />
				</CheckoutModal>
			}
		</div>
	);
}

export default DeliveryAddress;