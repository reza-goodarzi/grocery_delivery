import styled from "styled-components";
import ContactNumber from "./ContactNumber/ContactNumber";
import DeliveryAddress from "./DeliveryAddress/DeliveryAddress";
import DeliverySchedule from "./DeliverySchedule/DeliverySchedule";

function CheckoutProcess() {
	return (
		<CheckoutProcessStyled>
			<DeliveryAddress />
			<DeliverySchedule />
			<ContactNumber />
		</CheckoutProcessStyled>
	);
}

export default CheckoutProcess;

const CheckoutProcessStyled = styled.div`
	margin: 2rem;
`;