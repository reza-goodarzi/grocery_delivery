import { useState } from "react";
import CartFloatButton from "./CartFloatButton";
import CartPanel from "./CartPanel";

const Cart = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<section>
			<CartFloatButton setShowModal={setShowModal} />
			<CartPanel setShowModal={setShowModal} showModal={showModal} />
		</section>
	);
};

export default Cart;
