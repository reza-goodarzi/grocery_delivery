import styled from "styled-components";
import DeliveryAddress from "./DeliveryAddress/DeliveryAddress";
import DeliverySchedule from "./DeliverySchedule/DeliverySchedule";

function CheckoutProcess() {
	return (
		<CheckoutProcessStyled>
			<DeliveryAddress />
			<DeliverySchedule />
		</CheckoutProcessStyled>
	);
}

export default CheckoutProcess;

const CheckoutProcessStyled = styled.div`
	margin: 2rem;
`;