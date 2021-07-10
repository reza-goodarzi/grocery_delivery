import { Helmet } from "react-helmet";
import styled from "styled-components";
import CheckoutProcess from "../components/CheckoutProcess/CheckoutProcess";
import YourOrder from "../components/YourOrder/YourOrder";

function Checkout() {
	return (
		<CheckoutStyled>
			<Helmet>
				<title>پرداخت💰</title>
			</Helmet>
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