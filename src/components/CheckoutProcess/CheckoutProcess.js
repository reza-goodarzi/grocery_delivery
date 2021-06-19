import styled from "styled-components";
import DeliveryAddress from "./DeliveryAddress/DeliveryAddress";

function CheckoutProcess() {
	return (
		<CheckoutProcessStyled>
			<DeliveryAddress />
		</CheckoutProcessStyled>
	);
}

export default CheckoutProcess;

const CheckoutProcessStyled = styled.div`
	margin: 2rem;
`;