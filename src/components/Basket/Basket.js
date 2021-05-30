import Overlay from "../UI/Overlay";
import BasketButton from "./BasketButton";
import BasketModal from "./BasketModal";

const Basket = () => {
	return (
		<section>
			<Overlay />
			<BasketButton />
			<BasketModal />
		</section>
	);
};

export default Basket;
