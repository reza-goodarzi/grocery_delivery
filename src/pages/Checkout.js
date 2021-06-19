import styled from "styled-components";
import CheckoutProcess from "../components/CheckoutProcess/CheckoutProcess";
import YourOrder from "../components/YourOrder/YourOrder";

function Checkout() {
	return (
		<CheckoutStyled>
			<CheckoutProcess />
			<YourOrder />
		</CheckoutStyled>
	);
}

export default Checkout;

const CheckoutStyled = styled.section`
	display: flex;
	justify-content: center;
`;