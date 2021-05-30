import styled from "styled-components";
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

// const BasketContainer = styled.div`
// 	position: fixed;
// 	left: 0;
// 	top: 0;
// `;
