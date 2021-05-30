import { useState } from "react";
import BasketButton from "./BasketButton";
import BasketModal from "./BasketModal";

const Basket = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<section>
			<BasketButton setShowModal={setShowModal} />
			<BasketModal setShowModal={setShowModal} showModal={showModal} />
		</section>
	);
};

export default Basket;
